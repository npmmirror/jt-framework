package io.github.hylexus.jt.jt808.boot.props.msg.processor;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.validation.annotation.Validated;

/**
 * @author hylexus
 */
@Getter
@Setter
@ToString
@Validated
public class MsgProcessorProps {

    @NestedConfigurationProperty
    private MsgProcessorThreadPoolProps threadPool = new MsgProcessorThreadPoolProps();
}
