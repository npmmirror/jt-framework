package io.github.hylexus.jt.jt808.support.annotation.codec;

import io.github.hylexus.jt.jt808.spec.Jt808Request;
import io.github.hylexus.jt.jt808.spec.Jt808RequestAware;
import io.github.hylexus.jt.jt808.spec.Jt808RequestHeaderAware;
import io.github.hylexus.jt.jt808.support.annotation.msg.req.RequestField;
import io.github.hylexus.jt.jt808.support.data.ConvertibleMetadata;
import io.github.hylexus.jt.jt808.support.data.MsgDataType;
import io.github.hylexus.jt.jt808.support.data.RequestMsgConvertibleMetadata;
import io.github.hylexus.jt.jt808.support.data.deserialize.Jt808FieldDeserializer;
import io.github.hylexus.jt.jt808.support.data.deserialize.Jt808FieldDeserializerRegistry;
import io.github.hylexus.jt.jt808.support.data.meta.JavaBeanFieldMetadata;
import io.github.hylexus.jt.jt808.support.data.meta.JavaBeanMetadata;
import io.github.hylexus.jt.jt808.support.exception.Jt808AnnotationArgumentResolveException;
import io.github.hylexus.jt.jt808.support.utils.JavaBeanMetadataUtils;
import io.github.hylexus.jt.jt808.support.utils.ReflectionUtils;
import io.github.hylexus.jt.utils.Assertions;
import io.netty.buffer.ByteBuf;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
public class Jt808AnnotationBasedDecoder {

    private final Map<Class<? extends Jt808FieldDeserializer<?>>, Jt808FieldDeserializer<?>> converterMapping = new HashMap<>();
    private final ExpressionParser parser = new SpelExpressionParser();
    private final Jt808FieldDeserializerRegistry jt808FieldDeserializerRegistry;
    private final SlicedFromAnnotationDecoder slicedFromAnnotationDecoder = new SlicedFromAnnotationDecoder();

    public Jt808AnnotationBasedDecoder(Jt808FieldDeserializerRegistry jt808FieldDeserializerRegistry) {
        this.jt808FieldDeserializerRegistry = jt808FieldDeserializerRegistry;
    }

    public <T> T decode(Jt808Request request, Class<T> cls) throws Jt808AnnotationArgumentResolveException {
        final T instance = ReflectionUtils.createInstance(cls);

        final ByteBuf bodyDataBuf = request.body();

        @SuppressWarnings("unchecked") final T result = (T) decode(cls, instance, bodyDataBuf, request);
        return result;
    }

    public Object decode(Class<?> cls, Object instance, ByteBuf byteBuf, Jt808Request request) throws Jt808AnnotationArgumentResolveException {
        this.processAwareMethod(instance, request);
        final JavaBeanMetadata beanMetadata = JavaBeanMetadataUtils.getBeanMetadata(cls);
        final EvaluationContext evaluationContext = new StandardEvaluationContext(instance);
        evaluationContext.setVariable("this", instance);
        evaluationContext.setVariable("request", request);
        evaluationContext.setVariable("header", request.header());
        evaluationContext.setVariable("ctx", new AnnotationDecoderContext(byteBuf.readableBytes(), byteBuf));
        evaluationContext.setVariable("context", new AnnotationDecoderContext(byteBuf.readableBytes(), byteBuf));
        final List<JavaBeanFieldMetadata> fieldMetadataList = beanMetadata.getFieldMetadataList();
        if (fieldMetadataList.isEmpty()) {
            return instance;
        }
        for (JavaBeanFieldMetadata fieldMetadata : fieldMetadataList) {
            if (fieldMetadata.isAnnotationPresent(RequestField.class)) {
                this.processBasicField(evaluationContext, cls, instance, fieldMetadata, byteBuf, request);
            }
        }
        try {
            this.slicedFromAnnotationDecoder.processAllSlicedFromAnnotatedField(instance);
        } catch (IllegalAccessException e) {
            throw new Jt808AnnotationArgumentResolveException(e);
        }
        return instance;
    }

    private Object processBasicField(
            EvaluationContext evaluationContext, Class<?> cls, Object instance, JavaBeanFieldMetadata fieldMetadata,
            ByteBuf bodyDataBuf, Jt808Request request) {

        final RequestField annotation = fieldMetadata.getAnnotation(RequestField.class);
        final MsgDataType jtDataType = annotation.dataType();
        final Class<?> javaDataType = fieldMetadata.getFieldType();

        final int startIndex = getBasicFieldStartIndex(evaluationContext, cls, instance, annotation, fieldMetadata);
        Assertions.assertThat(startIndex >= 0, "field offset < 0 : [ " + fieldMetadata.getField() + " ]");
        final int length = getBasicFieldLength(evaluationContext, cls, instance, annotation, jtDataType, javaDataType);
        Assertions.assertThat(length > 0, "field length <= 0 : [ " + fieldMetadata.getField() + " ]");

        final Class<? extends Jt808FieldDeserializer<?>> converterClass = annotation.customerFieldDeserializerClass();
        // 1. 优先使用用户自定义的属性转换器
        final Field field = fieldMetadata.getField();
        if (converterClass != Jt808FieldDeserializer.PlaceholderFieldDeserializer.class) {
            final Jt808FieldDeserializer<?> fieldDeserializer = getFieldDeserializer(converterClass);
            return deserialize(bodyDataBuf, instance, field, fieldDeserializer, jtDataType, startIndex, length);
        }

        // 2. 内嵌对象 特殊处理
        if (jtDataType == MsgDataType.OBJECT) {
            final Class<?> objectClass = fieldMetadata.getFieldType();
            //final ByteBuf slice = bodyDataBuf.slice(startIndex, length);
            final ByteBuf slice = bodyDataBuf.readSlice(length);
            final Object objectInstance = ReflectionUtils.createInstance(objectClass);
            final Object value = decode(objectClass, objectInstance, slice, request);
            this.setFieldValue(instance, fieldMetadata, value);
            return value;
        }

        // 3 LIST 特殊处理
        if (jtDataType == MsgDataType.LIST) {
            final List<Object> list = new ArrayList<>();
            final Class<?> itemClass = fieldMetadata.getGenericType().get(0);
            //final ByteBuf slice = bodyDataBuf.slice(startIndex, length);
            final ByteBuf slice = bodyDataBuf.readSlice(length);
            while (slice.isReadable()) {
                final Object itemInstance = ReflectionUtils.createInstance(itemClass);
                final ByteBuf it = slice.slice(slice.readerIndex(), slice.readableBytes());
                this.decode(itemClass, itemInstance, it, request);
                slice.readerIndex(slice.readerIndex() + it.readerIndex());
                list.add(itemInstance);
            }
            this.setFieldValue(instance, fieldMetadata, list);
            return list;
        }

        // 没有配置【自定义属性转换器】&& 是【不支持的目标类型】
        if (!jtDataType.getExpectedTargetClassType().contains(javaDataType)) {
            throw new Jt808AnnotationArgumentResolveException(
                    "No Jt808FieldDeserializer found, Unsupported expectedTargetClassType [" + javaDataType + "] for field [" + field + " ]");
        }
        // 4. 默认的属性转换策略
        final RequestMsgConvertibleMetadata key = ConvertibleMetadata.forJt808RequestMsgDataType(jtDataType, javaDataType);
        final Jt808FieldDeserializer<?> deserializer = jt808FieldDeserializerRegistry.getConverter(key)
                .orElseThrow(() -> new Jt808AnnotationArgumentResolveException(
                        "No Jt808FieldDeserializer found, Unsupported expectedTargetClassType " + javaDataType + " for field " + field));

        return deserialize(bodyDataBuf, instance, field, deserializer, jtDataType, startIndex, length);
    }

    private Object deserialize(
            ByteBuf byteBuf, Object instance, Field field,
            Jt808FieldDeserializer<?> deserializer, MsgDataType jtDataType, int offset, int length) {

        final Object value = deserializer.deserialize(byteBuf, jtDataType, offset, length);
        if (log.isDebugEnabled()) {
            log.debug("Convert field {}({}) by converter : {}, result : {}",
                    field.getName(), instance.getClass().getSimpleName(), deserializer, value);
        }
        ReflectionUtils.setFieldValue(instance, field, value);
        return value;
    }

    @SuppressWarnings("rawtypes")
    private Jt808FieldDeserializer getFieldDeserializer(
            Class<? extends Jt808FieldDeserializer<?>> converterClass) throws Jt808AnnotationArgumentResolveException {

        Jt808FieldDeserializer converter = converterMapping.get(converterClass);
        if (converter == null) {
            synchronized (this) {
                if ((converter = converterMapping.get(converterClass)) == null) {
                    converter = ReflectionUtils.createInstance(converterClass);
                    converterMapping.put(converterClass, converter);
                }
            }
        }
        return converter;
    }

    private <T> void setFieldValue(T instance, JavaBeanFieldMetadata fieldMetadata, Object value) throws Jt808AnnotationArgumentResolveException {
        try {
            fieldMetadata.setFieldValue(instance, value);
        } catch (IllegalAccessException e) {
            throw new Jt808AnnotationArgumentResolveException(e);
        }
    }

    private int getBasicFieldLength(
            EvaluationContext evaluationContext, Class<?> cls, Object instance, RequestField annotation,
            MsgDataType dataType, Class<?> fieldType) throws Jt808AnnotationArgumentResolveException {

        // 1. DataType.byteCount
        if (dataType.getByteCount() > 0) {
            return dataType.getByteCount();
        }

        // 2. length()
        if (annotation.length() > 0) {
            return annotation.length();
        }

        // 3. lengthExpression()
        if (StringUtils.isNotEmpty(annotation.lengthExpression())) {
            final Number number = parser.parseExpression(annotation.lengthExpression()).getValue(evaluationContext, Number.class);
            if (number == null) {
                throw new Jt808AnnotationArgumentResolveException("Can not determine field length with Expression[" + annotation.lengthExpression() + "]");
            }
            return number.intValue();
        }

        // 4. lengthMethod()
        if (StringUtils.isEmpty(annotation.lengthMethod())) {
            throw new Jt808AnnotationArgumentResolveException("Can not determine field length [" + fieldType.getName() + "]");
        }

        final Method lengthMethod = getLengthMethod(cls, annotation.lengthMethod());

        return getLengthFromByteCountMethod(instance, lengthMethod);
    }

    private int getBasicFieldStartIndex(
            EvaluationContext evaluationContext, Class<?> cls, Object instance,
            RequestField annotation, JavaBeanFieldMetadata fieldType) throws Jt808AnnotationArgumentResolveException {

        if (annotation.startIndex() >= 0) {
            return annotation.startIndex();
        }
        if (StringUtils.isNotEmpty(annotation.startIndexExpression())) {
            final Number number = this.parser.parseExpression(annotation.startIndexExpression()).getValue(evaluationContext, Number.class);
            if (number == null) {
                throw new Jt808AnnotationArgumentResolveException(
                        "Can not determine field[" + fieldType.getField().getName() + "] startIndex with Expression["
                        + annotation.lengthExpression() + "]");
            }
            return number.intValue();
        }
        if (StringUtils.isEmpty(annotation.startIndexMethod())) {
            throw new Jt808AnnotationArgumentResolveException("Can not determine startIndex for field[" + fieldType.getField().getName() + "]");
        }

        final Method method = getLengthMethod(cls, annotation.startIndexMethod());
        return getLengthFromByteCountMethod(instance, method);
    }


    private <T> int getLengthFromByteCountMethod(T instance, Method lengthMethod)
            throws Jt808AnnotationArgumentResolveException {

        final Object result;
        try {
            result = lengthMethod.invoke(instance);
        } catch (Exception e) {
            throw new Jt808AnnotationArgumentResolveException(e);
        }
        if (result instanceof Number) {
            return ((Number) result).intValue();
        }
        throw new Jt808AnnotationArgumentResolveException("byteCountMethod() return NaN");
    }

    private <T> Method getLengthMethod(Class<T> cls, String methodName) {
        final Method method = ReflectionUtils.findMethod(cls, methodName);
        if (method == null) {
            throw new NoSuchMethodError("No byteCountMethod() method found : " + methodName);
        }
        return method;
    }

    private <T> void processAwareMethod(Object instance, Jt808Request request) {
        if (instance instanceof Jt808RequestHeaderAware) {
            ((Jt808RequestHeaderAware) instance).setHeader(request.header());
        }

        if (instance instanceof Jt808RequestAware) {
            ((Jt808RequestAware) instance).setRequest(request);
        }

    }

}
