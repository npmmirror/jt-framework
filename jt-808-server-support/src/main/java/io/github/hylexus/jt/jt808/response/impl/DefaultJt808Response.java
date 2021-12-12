package io.github.hylexus.jt.jt808.response.impl;

import io.github.hylexus.jt.config.Jt808ProtocolVersion;
import io.github.hylexus.jt.jt808.response.Jt808Response;
import io.netty.buffer.ByteBuf;

/**
 * @author hylexus
 */
public class DefaultJt808Response implements Jt808Response {

    private final Jt808ProtocolVersion version;
    private final String terminalId;

    private int flowId;
    private int msgType;
    private int encryptionType;
    private byte reversedBit15InHeader;
    private int maxPackageSize;
    private final ByteBuf body;

    public static Jt808Response init(Jt808ProtocolVersion version, String terminalId) {
        return new DefaultJt808Response(version, terminalId);
    }

    private DefaultJt808Response(Jt808ProtocolVersion version, String terminalId) {
        this.version = version;
        this.terminalId = terminalId;
        this.body = allocator().buffer();
    }

    public DefaultJt808Response(
            Jt808ProtocolVersion version, int msgType,
            int encryptionType, int maxPackageSize,
            byte reversedBit15InHeader,
            String terminalId,
            int flowId, ByteBuf body) {

        this.version = version;
        this.msgType = msgType;
        this.encryptionType = encryptionType;
        this.maxPackageSize = maxPackageSize;
        this.reversedBit15InHeader = reversedBit15InHeader;
        this.terminalId = terminalId;
        this.flowId = flowId;
        this.body = body;
    }

    public void setMsgType(int msgType) {
        this.msgType = msgType;
    }

    @Override
    public int msgType() {
        return msgType;
    }

    @Override
    public Jt808Response msgType(int msgType) {
        this.msgType = msgType;
        return this;
    }

    @Override
    public Jt808ProtocolVersion version() {
        return version;
    }

    @Override
    public String terminalId() {
        return terminalId;
    }

    @Override
    public int flowId() {
        return flowId;
    }

    @Override
    public Jt808Response flowId(int flowId) {
        this.flowId = flowId;
        return this;
    }

    @Override
    public ByteBuf body() {
        return body;
    }

    @Override
    public int msgBodyLength() {
        return body.readableBytes();
    }

    @Override
    public int encryptionType() {
        return encryptionType;
    }

    @Override
    public Jt808Response encryptionType(int encType) {
        this.encryptionType = encType;
        return this;
    }

    @Override
    public int maxPackageSize() {
        return maxPackageSize;
    }

    @Override
    public Jt808Response maxPackageSize(int size) {
        this.maxPackageSize = size;
        return this;
    }

    @Override
    public byte reversedBit15InHeader() {
        return reversedBit15InHeader;
    }

    @Override
    public Jt808Response reversedBit15InHeader(byte reversedBit15InHeader) {
        this.reversedBit15InHeader = reversedBit15InHeader;
        return this;
    }
}
