package io.github.hylexus.jt.jt808.request.queue.impl;

import com.google.common.eventbus.Subscribe;
import io.github.hylexus.jt.annotation.BuiltinComponent;
import io.github.hylexus.jt.jt808.request.Jt808Request;
import io.github.hylexus.jt.jt808.session.Jt808SessionManager;
import io.github.hylexus.jt.jt808.support.codec.Jt808SubPackageStorage;
import io.github.hylexus.jt.jt808.support.dispatcher.Jt808DispatcherHandler;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.PostConstruct;
import java.io.IOException;

/**
 * Created At 2019-08-24 16:44
 *
 * @author hylexus
 */
@Slf4j
@BuiltinComponent
public class LocalEventBusListener extends AbstractRequestMsgQueueListener<LocalEventBus> {

    public LocalEventBusListener(
            LocalEventBus queue, Jt808DispatcherHandler dispatcherHandler,
            Jt808SessionManager sessionManager, Jt808SubPackageStorage subPackageStorage) {
        super(queue, dispatcherHandler, sessionManager, subPackageStorage);
    }

    @PostConstruct
    public void init() {
        //noinspection UnstableApiUsage
        queue.register(this);
    }

    @Subscribe
    public void listen(Jt808Request request) throws IOException, InterruptedException {
        consumeMsg(request);
    }
}
