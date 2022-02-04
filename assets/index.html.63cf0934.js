import{r as t,o as c,c as l,a as e,b as r,F as p,e as a,d as s}from"./app.9f46fb56.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=e("h1",{id:"_808\u670D\u52A1\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_808\u670D\u52A1\u914D\u7F6E","aria-hidden":"true"},"#"),a(" 808\u670D\u52A1\u914D\u7F6E")],-1),m=e("p",null,"\u672C\u5C0F\u8282\u4F1A\u4ECB\u7ECD808\u670D\u52A1\u7684\u914D\u7F6E\u9009\u9879\u3002",-1),h=a("\u9ED8\u8BA4\u7684\u914D\u7F6E\u53EF\u4EE5\u5728 "),b={href:"https://github.com/hylexus/jt-framework/tree/master/jt-808-server-spring-boot-stater/src/main/resources/META-INF/default-jt808-server-config.yml",target:"_blank",rel:"noopener noreferrer"},k=a("default-jt808-server-config.yml"),g=a(" \u4E2D\u67E5\u770B\u3002 \u5E76\u4E14\u5DF2\u7ECF\u5C06\u9ED8\u8BA4\u7684\u914D\u7F6E\u52A0\u5165\u5230\u4E86 "),f=e("code",null,"Spring",-1),v=a(" \u7684 "),y=e("code",null,"PropertySources",-1),x=a(" \u4E2D\uFF0C\u5E76\u5C06\u5176\u7F6E\u4E8E\u6700\u540E\uFF0C\u540D\u79F0\u4E3A "),_=e("code",null,"default-jt808-server-config",-1),j=a(" \u3002"),q={class:""},w=["src"],z=s(`<h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">jt808</span><span class="token punctuation">:</span>
  <span class="token key atrule">built-components</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
  <span class="token key atrule">protocol</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
  <span class="token key atrule">msg-processor</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
  <span class="token key atrule">request-sub-package-storage</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
  <span class="token key atrule">response-sub-package-storage</span><span class="token punctuation">:</span>
  <span class="token comment"># ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="protocol" tabindex="-1"><a class="header-anchor" href="#protocol" aria-hidden="true">#</a> protocol</h2><h3 id="max-frame-length" tabindex="-1"><a class="header-anchor" href="#max-frame-length" aria-hidden="true">#</a> max-frame-length</h3><p>\u5BF9\u5E94 <code>io.netty.handler.codec.DelimiterBasedFrameDecoder</code> \u7684 <code>maxFrameLength</code> \u5C5E\u6027\u3002\u9ED8\u8BA4\u503C\uFF1A<code>1024</code>\u3002</p><h2 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h2><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>6808</code></li></ul><p><code>Netty</code> \u670D\u52A1\u5668\u7684TCP\u7AEF\u53E3\u3002</p><h3 id="boss-thread-count" tabindex="-1"><a class="header-anchor" href="#boss-thread-count" aria-hidden="true">#</a> boss-thread-count</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul><p>\u9ED8\u8BA4\u503C <code>0</code> \u8868\u793A\u4EA4\u7531 <code>Netty</code> \u5904\u7406\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">this</span><span class="token punctuation">.</span>bossGroup<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span>bossThreadCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="worker-thread-count" tabindex="-1"><a class="header-anchor" href="#worker-thread-count" aria-hidden="true">#</a> worker-thread-count</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul><p>\u9ED8\u8BA4\u503C <code>0</code> \u8868\u793A\u4EA4\u7531 <code>Netty</code> \u5904\u7406\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">this</span><span class="token punctuation">.</span>workerGroup<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">NioEventLoopGroup</span><span class="token punctuation">(</span>workThreadCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="idle-state-handler" tabindex="-1"><a class="header-anchor" href="#idle-state-handler" aria-hidden="true">#</a> idle-state-handler</h3><p>\u8BE5\u914D\u7F6E\u9879\u5BF9\u5E94 <code>io.netty.handler.timeout.IdleStateHandler</code> \u7684 \u4E09\u4E2A\u5C5E\u6027\uFF1A<code>readerIdleTime</code>\u3001 <code>writerIdleTime</code> \u3001<code>allIdelTime</code>\u3002 \u9ED8\u8BA4\u503C\u90FD\u662F <code>20m</code>;</p><p>\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E0D\u9700\u8981 <code>IdleStateHandler</code> \u7684\u8BDD\uFF0C\u5C06 <code>jt808.server.idle-state-handler.enabled</code> \u914D\u7F6E\u4E3A <code>false</code> \u5373\u53EF\u3002</p><h2 id="msg-processor-thread-pool" tabindex="-1"><a class="header-anchor" href="#msg-processor-thread-pool" aria-hidden="true">#</a> msg-processor.thread-pool</h2><div class="custom-container tip"><p class="custom-container-title">\u6B64\u5904\u4E3A \`\u6D88\u606F\u5904\u7406\u7EBF\u7A0B\u6C60\` \u76F8\u5173\u7684\u914D\u7F6E\u3002\u5176\u5B9E\u5C31\u662F \`Java\u7EBF\u7A0B\u6C60\` \u51E0\u4E2A\u5173\u952E\u53C2\u6570\u7684\u914D\u7F6E\u3002</p></div><h3 id="core-pool-size" tabindex="-1"><a class="header-anchor" href="#core-pool-size" aria-hidden="true">#</a> core-pool-size</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>Runtime.getRuntime().availableProcessors() + 1</code></li></ul><p>\u6D88\u606F\u5904\u7406\u7EBF\u7A0B\u6C60\u7684\u6838\u5FC3\u7EBF\u7A0B\u6570\uFF0C\u5373 <code>java.util.concurrent.ThreadPoolExecutor.corePoolSize</code>\u3002</p><h3 id="maximum-pool-size" tabindex="-1"><a class="header-anchor" href="#maximum-pool-size" aria-hidden="true">#</a> maximum-pool-size</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>2 * corePoolSize</code></li></ul><p>\u540C <code>java.util.concurrent.ThreadPoolExecutor.maximumPoolSize</code> \u3002</p><h3 id="keep-alive-time" tabindex="-1"><a class="header-anchor" href="#keep-alive-time" aria-hidden="true">#</a> keep-alive-time</h3><ul><li>\u7C7B\u578B\uFF1A<code>Duration</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>60s</code></li></ul><p>\u540C <code>java.util.concurrent.ThreadPoolExecutor.keepAliveTime</code> \u3002</p><h3 id="blocking-queue-size" tabindex="-1"><a class="header-anchor" href="#blocking-queue-size" aria-hidden="true">#</a> blocking-queue-size</h3><ul><li>\u7C7B\u578B\uFF1A<code>int</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>20</code></li></ul><p><code>java.util.concurrent.ThreadPoolExecutor.workQueue</code> \u7684 <code>size()</code> \u3002</p><h3 id="thread-name-format" tabindex="-1"><a class="header-anchor" href="#thread-name-format" aria-hidden="true">#</a> thread-name-format</h3><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>808-msg-processor-%d</code></li></ul><p>\u7EBF\u7A0B\u6C60\u4E2D\u7EBF\u7A0B\u7684\u547D\u540D\u683C\u5F0F\u3002</p><h2 id="request-sub-package-storage" tabindex="-1"><a class="header-anchor" href="#request-sub-package-storage" aria-hidden="true">#</a> request-sub-package-storage</h2><p>\u8BF7\u6C42\u5206\u5305\u6D88\u606F\u6682\u5B58\u5668\u76F8\u5173\u914D\u7F6E\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>  <span class="token key atrule">request-sub-package-storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> caffeine <span class="token comment"># caffeine || none</span>
    <span class="token comment">## \u5F53\u4E14\u4EC5\u5F53 jt808.request-sub-package-storage.type = caffeine \u65F6\u751F\u6548</span>
    <span class="token key atrule">caffeine</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6700\u591A\u7F13\u5B58\u591A\u5C11\u6761\u6D88\u606F</span>
      <span class="token key atrule">maximum-size</span><span class="token punctuation">:</span> <span class="token number">1024</span>
      <span class="token comment"># \u6700\u5927\u7F13\u5B58\u65F6\u95F4</span>
      <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 45s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="response-sub-package-storage" tabindex="-1"><a class="header-anchor" href="#response-sub-package-storage" aria-hidden="true">#</a> response-sub-package-storage</h2><p>\u54CD\u5E94\u5206\u5305\u6D88\u606F\u6682\u5B58\u5668\u76F8\u5173\u914D\u7F6E\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>    <span class="token key atrule">response-sub-package-storage</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> caffeine <span class="token comment"># caffeine || redis || none</span>
    <span class="token comment">## \u5F53\u4E14\u4EC5\u5F53 jt808.response-sub-package-storage.type = caffeine \u65F6\u751F\u6548</span>
    <span class="token key atrule">caffeine</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6700\u591A\u7F13\u5B58\u591A\u5C11\u6761\u6D88\u606F</span>
      <span class="token key atrule">maximum-size</span><span class="token punctuation">:</span> <span class="token number">1024</span>
      <span class="token comment"># \u6700\u5927\u7F13\u5B58\u65F6\u95F4</span>
      <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 45s
    <span class="token comment">## \u5F53\u4E14\u4EC5\u5F53 jt808.response-sub-package-storage.type = redis \u65F6\u751F\u6548</span>
    <span class="token key atrule">redis</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6700\u5927\u7F13\u5B58\u65F6\u95F4</span>
      <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 1m
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="built-components" tabindex="-1"><a class="header-anchor" href="#built-components" aria-hidden="true">#</a> built-components</h2><h3 id="component-statistics-enabled" tabindex="-1"><a class="header-anchor" href="#component-statistics-enabled" aria-hidden="true">#</a> component-statistics.enabled</h3><ul><li>\u7C7B\u578B\uFF1A<code>boolean</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>true</code></li></ul><p><code>jt808.built-components.component-statistics.enabled</code> \u8868\u793A\u662F\u5426\u5F00\u542F\u670D\u52A1\u542F\u52A8\u5B8C\u6210\u540E\u663E\u793A\u7EC4\u4EF6\u7EDF\u8BA1\u4FE1\u606F\u3002</p><p>\u8FD9\u4E9B\u7EDF\u8BA1\u4FE1\u606F\u53EF\u4EE5\u663E\u793A\u5DF2\u7ECF\u6CE8\u518C\u7684 <strong>\u6D88\u606F\u5904\u7406\u5668</strong> \u548C\u5176\u4ED6 <strong>\u53EF\u914D\u7F6E\u7684</strong> \u7EC4\u4EF6\u3002\u7C7B\u4F3C\u4E8E\u4E0B\u56FE\u6240\u793A\uFF1A</p>`,48),T={class:""},E=["src"],N=s(`<p>[//]: # (todo print-component-statistics.png&#39;)&quot; alt=&quot;print-component-statistics)</p><h3 id="request-handlers-enabled" tabindex="-1"><a class="header-anchor" href="#request-handlers-enabled" aria-hidden="true">#</a> request-handlers.enabled</h3><ul><li>\u7C7B\u578B\uFF1A<code>boolean</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>true</code></li></ul><p><code>jt808.built-components.request-handlers.enabled</code> \u8868\u793A\u662F\u5426\u542F\u7528\u5185\u7F6E\u7684\u4E00\u4E9B\u6D88\u606F\u5904\u7406\u5668\u3002</p><p>\u5185\u7F6E\u6D88\u606F\u5904\u7406\u5668\u90FD\u5728 <code>io.github.hylexus.jt.jt808.support.dispatcher.handler.builtin</code> \u5305\u4E0B\u3002</p><h2 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> logging</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level.root</span><span class="token punctuation">:</span> info
  <span class="token key atrule">level.io.github.hylexus</span><span class="token punctuation">:</span> info
  <span class="token comment"># \u5BF9\u5E94 io.github.hylexus.jt.jt808.support.codec.impl.DefaultJt808MsgDecoder \u7684\u65E5\u5FD7</span>
  <span class="token key atrule">level.jt-808.request.decoder</span><span class="token punctuation">:</span> info
  <span class="token comment"># \u5BF9\u5E94 io.github.hylexus.jt.jt808.support.codec.impl.DefaultJt808MsgEncoder \u7684\u65E5\u5FD7</span>
  <span class="token key atrule">level.jt-808.response.encoder</span><span class="token punctuation">:</span> info
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,7);function P(n,S){const o=t("ExternalLinkIcon");return c(),l(p,null,[u,m,e("p",null,[h,e("a",b,[k,r(o)]),g,f,v,y,x,_,j]),e("p",q,[e("img",{src:n.$withBase("/img/default-config-property-source.png"),alt:"default-config-property-source"},null,8,w)]),z,e("p",T,[e("img",{src:n.$withBase("/img/print-component-statistics.png"),alt:"print-component-statistics"},null,8,E)]),N],64)}var D=i(d,[["render",P]]);export{D as default};
