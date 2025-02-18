package io.github.hylexus.jt.jt808.support.data.type;

import io.github.hylexus.jt.jt808.support.utils.JtProtocolUtils;
import io.netty.buffer.ByteBuf;

/**
 * @author hylexus
 */
public class DWordWrapper implements BytesValueWrapper<Integer> {
    private Integer value;

    public DWordWrapper() {
    }

    public DWordWrapper(Integer value) {
        this.value = value;
    }

    @Override
    public void write(ByteBuf byteBuf) {
        JtProtocolUtils.writeWord(byteBuf, value);
    }

    @Override
    public Integer read(ByteBuf byteBuf, int offset, int length) {
        value = JtProtocolUtils.readUnsignedWord(byteBuf);
        return value;
    }

    @Override
    public Integer value() {
        return value;
    }
}
