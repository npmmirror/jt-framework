package io.github.hylexus.jt808.samples.annotation.handler;

import io.github.hylexus.jt.jt808.spec.Jt808RequestEntity;
import io.github.hylexus.jt.jt808.spec.builtin.msg.resp.BuiltinServerCommonReplyMsg;
import io.github.hylexus.jt.jt808.support.annotation.handler.Jt808RequestHandler;
import io.github.hylexus.jt.jt808.support.annotation.handler.Jt808RequestHandlerMapping;
import io.github.hylexus.jt808.samples.annotation.msg.req.LocationBatchUploadMsgV2019;
import io.github.hylexus.jt808.samples.annotation.msg.req.LocationUploadMsgV2019;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import static io.github.hylexus.jt.jt808.Jt808ProtocolVersion.VERSION_2019;

/**
 * @author hylexus
 */
@Slf4j
@Component
@Jt808RequestHandler
public class LocationMsgHandler {

    // 7E070400E401583860765500040003010049000000000004000301D9F190073CA3C1000C00000000211204082941010400D728AD300100310109250400000000140400000004150400000000
    // 1604000000001702000118030000000049000000000004000301D9F190073CA3C1000C00000000211130171352010400D728AD300100310109250400000000140400000004150400000000
    // 1604000000001702000118030000000049000000000004000301D9F190073CA3C1000C00000000211130171357010400D728AD300115310109250400000000140400000004150400000000
    // 160400000000170200011803000000407E
    @Jt808RequestHandlerMapping(msgType = 0x0704)
    public BuiltinServerCommonReplyMsg processLocationBatchUploadMsgV2019(Jt808RequestEntity<LocationBatchUploadMsgV2019> request) {
        log.info("LocationBatchUpload -- V2019 -- {}", request.body());

        return BuiltinServerCommonReplyMsg.success(request.msgId(), request.flowId());
    }

    @Jt808RequestHandlerMapping(msgType = 0x0200, versions = VERSION_2019)
    public BuiltinServerCommonReplyMsg processLocationUploadMsgV2019(Jt808RequestEntity<LocationUploadMsgV2019> request) {
        log.info("LocationUpload -- V2019 -- {}", request.body());

        return BuiltinServerCommonReplyMsg.success(request.msgId(), request.flowId());
    }
}
