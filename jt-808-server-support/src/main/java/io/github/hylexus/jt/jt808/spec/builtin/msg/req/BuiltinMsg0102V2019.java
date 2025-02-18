package io.github.hylexus.jt.jt808.spec.builtin.msg.req;

import io.github.hylexus.jt.annotation.BuiltinComponent;
import io.github.hylexus.jt.jt808.support.annotation.msg.req.Jt808RequestBody;
import io.github.hylexus.jt.jt808.support.annotation.msg.req.RequestField;
import lombok.Data;

import static io.github.hylexus.jt.jt808.support.data.MsgDataType.BYTE;
import static io.github.hylexus.jt.jt808.support.data.MsgDataType.STRING;

/**
 * 内置的终端鉴权消息体(V2019)
 *
 * @author hylexus
 */
@Data
@Jt808RequestBody
@BuiltinComponent
public class BuiltinMsg0102V2019 {

    // byte[0,1)    BYTE    鉴权码长度
    @RequestField(order = 1, startIndex = 0, dataType = BYTE)
    private byte authCodeLength;

    // byte[1,n)    STRING  鉴权码内容
    @RequestField(order = 2, startIndex = 1, dataType = STRING, lengthExpression = "authCodeLength")
    private String authCode;

    // byte[n+1,n+1+15)     BYTE[]  IMEI
    @RequestField(order = 3, startIndexExpression = "authCodeLength + 1", dataType = STRING, length = 15)
    private String imei;

    // byte[n+16,n+16+20)   BYTE[20]    软件版本号
    @RequestField(order = 4, startIndexExpression = "authCodeLength + 1 + 15", dataType = STRING, length = 20)
    private String softwareVersion;

}
