package io.github.hylexus.jt.jt808.support.netty;

import io.github.hylexus.jt.annotation.BuiltinComponent;
import io.github.hylexus.jt.jt808.spec.session.Jt808SessionManager;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;
import lombok.extern.slf4j.Slf4j;

import static io.github.hylexus.jt.jt808.spec.session.DefaultSessionCloseReason.IDLE_TIMEOUT;

/**
 * @author hylexus
 * Created At 2019-08-21 21:48
 */
@Slf4j
@ChannelHandler.Sharable
@BuiltinComponent
public class Jt808TerminalHeatBeatHandler extends ChannelInboundHandlerAdapter {

    private final Jt808SessionManager sessionManager;

    public Jt808TerminalHeatBeatHandler(Jt808SessionManager sessionManager) {
        this.sessionManager = sessionManager;
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (!(evt instanceof IdleStateEvent)) {
            super.userEventTriggered(ctx, evt);
            return;
        }

        if (((IdleStateEvent) evt).state() == IdleState.READER_IDLE) {
            log.debug("disconnected idle connection");
            sessionManager.removeBySessionIdAndClose(sessionManager.generateSessionId(ctx.channel()), IDLE_TIMEOUT);
        }
    }
}
