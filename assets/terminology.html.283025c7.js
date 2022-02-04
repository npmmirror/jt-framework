import{d as n}from"./app.9f46fb56.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u57FA\u672C\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u672F\u8BED" aria-hidden="true">#</a> \u57FA\u672C\u672F\u8BED</h1><p>\u5728 <code>2.x</code> \u4E2D\uFF0C\u6240\u6709\u7684\u6838\u5FC3 <code>API</code> \u90FD\u91CD\u5199\u4E86 (<code>fluent</code> \u98CE\u683C)\u3002\u51E0\u4E2A\u5173\u952E\u63A5\u53E3\u5982\u4E0B\uFF1A</p><h2 id="jt808request" tabindex="-1"><a class="header-anchor" href="#jt808request" aria-hidden="true">#</a> Jt808Request</h2><p>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u6D88\u606F\u4E2D\u7684\u5B57\u8282\u6D41\u6700\u7EC8\u4F1A\u89E3\u6790\u5230 <code>Jt808Request</code> \u91CC\u3002<code>Jt808Request</code> \u63A5\u53E3\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808Request</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u6D88\u606FID
     */</span>
    <span class="token class-name">MsgType</span> <span class="token function">msgType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u8BF7\u6C42\u5934
     */</span>
    <span class="token class-name">Jt808RequestHeader</span> <span class="token function">header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u539F\u59CB\u62A5\u6587(\u8F6C\u4E49\u4E4B\u540E)
     */</span>
    <span class="token class-name">ByteBuf</span> <span class="token function">rawByteBuf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u6D88\u606F\u4F53(\u8F6C\u4E49\u4E4B\u540E)
     */</span>
    <span class="token class-name">ByteBuf</span> <span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u6821\u9A8C\u7801(\u539F\u59CB\u62A5\u6587)
     */</span>
    <span class="token keyword">byte</span> <span class="token function">originalCheckSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u6821\u9A8C\u7801(\u8BA1\u7B97\u540E)
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808MsgBytesProcessor</span><span class="token punctuation">#</span><span class="token function">calculateCheckSum</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">byte</span> <span class="token function">calculatedCheckSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="jt808response" tabindex="-1"><a class="header-anchor" href="#jt808response" aria-hidden="true">#</a> Jt808Response</h2><p>\u4E0E <code>Jt808Request</code> \u76F8\u5BF9\u5E94\uFF0C\u5904\u7406\u5B8C\u6D88\u606F\u4E4B\u540E\u56DE\u590D\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E\u5BF9\u5E94\u7740 <code>Jt808Response</code> \u63A5\u53E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808Response</span> <span class="token keyword">extends</span> <span class="token class-name">Jt808ByteWriter</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> DEFAULT_MAX_PACKAGE_SIZE <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>

    <span class="token doc-comment comment">/**
     * byte[0,2) -- <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token class-name">MsgDataType</span><span class="token punctuation">#</span><span class="token field">WORD</span></span> WORD<span class="token punctuation">}</span> -- \u6D88\u606FID
     */</span>
    <span class="token keyword">int</span> <span class="token function">msgType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Jt808ProtocolVersion</span> <span class="token function">version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">#</span><span class="token field">VERSION_2011</span></span> VERSION_2011<span class="token punctuation">}</span> -- byte[4,10) -- <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token class-name">MsgDataType</span><span class="token punctuation">#</span><span class="token field">BCD</span></span> BCD[6]<span class="token punctuation">}</span> -- \u7EC8\u7AEF\u624B\u673A\u53F7
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">#</span><span class="token field">VERSION_2019</span></span> VERSION_2019<span class="token punctuation">}</span> -- byte[5,15) -- <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token class-name">MsgDataType</span><span class="token punctuation">#</span><span class="token field">BCD</span></span> BCD[10]<span class="token punctuation">}</span> -- \u7EC8\u7AEF\u624B\u673A\u53F7
     */</span>
    <span class="token class-name">String</span> <span class="token function">terminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">#</span><span class="token field">VERSION_2011</span></span> VERSION_2011<span class="token punctuation">}</span> -- byte[10,11) -- <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token class-name">MsgDataType</span><span class="token punctuation">#</span><span class="token field">WORD</span></span> WORD<span class="token punctuation">}</span> -- \u6D41\u6C34\u53F7
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808ProtocolVersion</span><span class="token punctuation">#</span><span class="token field">VERSION_2019</span></span> VERSION_2019<span class="token punctuation">}</span> -- byte[15,16) -- <span class="token punctuation">{</span><span class="token keyword">@link</span>  <span class="token reference"><span class="token class-name">MsgDataType</span><span class="token punctuation">#</span><span class="token field">WORD</span></span> WORD<span class="token punctuation">}</span> -- \u6D41\u6C34\u53F7
     */</span>
    <span class="token keyword">int</span> <span class="token function">flowId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ByteBuf</span> <span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="jt808session" tabindex="-1"><a class="header-anchor" href="#jt808session" aria-hidden="true">#</a> Jt808Session</h2><p>\u548C\u5BA2\u6237\u7AEF\u5BF9\u5E94\u7684\u8FDE\u63A5\u90FD\u7528\u4E00\u4E2A\u53EB\u505A <code>Jt808Session</code> \u7C7B\u6765\u8868\u793A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808Session</span> <span class="token keyword">extends</span> <span class="token class-name">Jt808FlowIdGenerator</span> <span class="token punctuation">{</span>

    <span class="token comment">// ...</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">byteBuf</span> \u5F85\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7684\u6570\u636E
     */</span>
    <span class="token keyword">void</span> <span class="token function">sendMsgToClient</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">JtCommunicationException</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u5F53\u524D\u6D41\u6C34\u53F7\uFF0C\u5E76\u81EA\u589E
     * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">currentFlowId</span><span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">currentFlowId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">sessionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Channel</span> <span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Jt808Session</span> <span class="token function">channel</span><span class="token punctuation">(</span><span class="token class-name">Channel</span> channel<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> <span class="token function">terminalId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u5F53\u524D\u7EC8\u7AEF\u7684\u534F\u8BAE\u7248\u672C\u53F7
     */</span>
    <span class="token class-name">Jt808ProtocolVersion</span> <span class="token function">protocolVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u4E0A\u6B21\u901A\u4FE1\u65F6\u95F4
     */</span>
    <span class="token keyword">long</span> <span class="token function">lastCommunicateTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Jt808Session</span> <span class="token function">lastCommunicateTimestamp</span><span class="token punctuation">(</span><span class="token keyword">long</span> lastCommunicateTimestamp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="jt808serverexchange" tabindex="-1"><a class="header-anchor" href="#jt808serverexchange" aria-hidden="true">#</a> Jt808ServerExchange</h2><p>\u5728\u5B9E\u9645\u5904\u7406\u6D88\u606F\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5C06 <code>Jt808Request</code>\u3001<code>Jt808Response</code> \u548C <code>Jt808Session</code> \u90FD\u5C01\u88C5\u5728\u4E86\u4E00\u4E2A\u53EB <code>Jt808ServerExchange</code> \u7684\u5BF9\u8C61\u91CC\u3002</p><p>\u548C <code>Spring</code> \u7684 <code>WebFlux</code> \u4E2D\u7684 <code>org.springframework.web.server.ServerWebExchange</code> \u6709\u7C7B\u4F3C\u7684\u4F5C\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808ServerExchange</span> <span class="token punctuation">{</span>

    <span class="token class-name">Jt808Request</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Jt808Response</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Jt808Session</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,15);function p(t,c){return e}var u=s(a,[["render",p]]);export{u as default};
