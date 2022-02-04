import{o as t,c as e,a as s,F as p,d as a}from"./app.9f46fb56.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=a(`<h1 id="\u8BF7\u6C42\u6D88\u606F\u5206\u5305" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u6D88\u606F\u5206\u5305" aria-hidden="true">#</a> \u8BF7\u6C42\u6D88\u606F\u5206\u5305</h1><h2 id="\u5206\u5305\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5206\u5305\u5408\u5E76" aria-hidden="true">#</a> \u5206\u5305\u5408\u5E76</h2><p>\u6536\u5230\u7EC8\u7AEF\u4E0A\u62A5\u7684\u5206\u5305\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u5148\u5C06\u5206\u5305\u6D88\u606F <strong>\u6682\u5B58</strong> \u5230 <strong>\u5206\u5305\u6682\u5B58\u5668(Jt808RequestSubPackageStorage)</strong>;\u7B49\u6240\u6709\u5B50\u5305\u90FD\u5230\u8FBE\u540E\u4F1A\u81EA\u52A8\u5408\u5E76\u6D88\u606F\uFF0C\u6295\u9012\u7ED9\u6D88\u606F\u5904\u7406\u5668\u5904\u7406\u3002</p><h3 id="\u5206\u5305\u6682\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#\u5206\u5305\u6682\u5B58\u5668" aria-hidden="true">#</a> \u5206\u5305\u6682\u5B58\u5668</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u9047\u5230\u5206\u5305\u8BF7\u6C42\u65F6\u4F1A\u56DE\u8C03 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">saveSubPackage</span><span class="token punctuation">(</span><span class="token class-name">Jt808Request</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u5C06\u5206\u5305\u6682\u5B58\u8D77\u6765\u3002
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * \u5B9E\u73B0\u7C7B\u81F3\u5C11\u5E94\u8BE5\u5B9E\u73B0\u4E0B\u9762\u51E0\u4E2A\u529F\u80FD:
 *
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
 *     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u5F53\u6240\u6709\u5B50\u5305\u90FD\u5230\u8FBE\u540E\uFF0C\u5B9E\u73B0\u7C7B\u5E94\u8BE5\u8D1F\u8D23\u5C06\u6D88\u606F\u5408\u5E76 &amp;&amp; \u5C06\u5408\u5E76\u540E\u7684\u5B8C\u6574\u6D88\u606F\u4F7F\u7528 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808RequestMsgDispatcher</span><span class="token punctuation">#</span><span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token class-name">Jt808Request</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u6295\u9012\u51FA\u53BB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 *     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u67D0\u4E9B\u5B50\u5305\u4E22\u5931\u672A\u5230\u8FBE\u65F6\u5E94\u8BE5\u81EA\u52A8\u53D1\u9001 \`0x8003\` \u6D88\u606F\u7ED9\u7EC8\u7AEF\uFF0C\u8981\u6C42\u7EC8\u7AEF\u91CD\u4F20\u67D0\u4E9B\u5B50\u5305<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 *     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\u957F\u65F6\u95F4\u672A\u5230\u8FBE\u670D\u52A1\u7AEF\u7684\u5B50\u5305\u5E94\u8BE5\u53CA\u65F6\u56DE\u6536\u6389, \u6700\u957F\u6682\u5B58\u591A\u4E45\u7531\u5177\u4F53\u5B9E\u73B0\u7C7B\u81EA\u884C\u51B3\u5B9A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token keyword">@author</span> hylexus
 * <span class="token keyword">@see</span> <span class="token reference"><span class="token class-name">Jt808RequestMsgDispatcher</span><span class="token punctuation">#</span><span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token class-name">Jt808Request</span><span class="token punctuation">)</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt808RequestSubPackageStorage</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u5206\u5305\u8BF7\u6C42\u5230\u8FBE\u65F6\u56DE\u8C03\u8BE5\u65B9\u6CD5\uFF0C\u6682\u5B58\u5206\u5305\u8BF7\u6C42\u3002
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * \u5982\u6709\u5FC5\u8981\uFF0C\u5B9E\u73B0\u7C7B\u5E94\u8BE5\u81EA\u884C\u56DE\u6536\u6389 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Request</span><span class="token punctuation">#</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u548C <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Jt808Request</span><span class="token punctuation">#</span><span class="token function">rawByteBuf</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span>
     *
     * <span class="token keyword">@param</span> <span class="token parameter">subPackage</span> \u5206\u5305\u8BF7\u6C42
     */</span>
    <span class="token keyword">void</span> <span class="token function">saveSubPackage</span><span class="token punctuation">(</span><span class="token class-name">Jt808Request</span> subPackage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u5185\u7F6E\u5206\u5305\u6682\u5B58\u5668" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u5206\u5305\u6682\u5B58\u5668" aria-hidden="true">#</a> \u5185\u7F6E\u5206\u5305\u6682\u5B58\u5668</h3><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5982\u679C\u914D\u7F6E\u4E86 <code>jt808.request-sub-package-storage.type = none</code>\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6240\u6709\u7684\u5206\u5305\u8BF7\u6C42\u90FD\u4F1A\u88AB<strong>\u4E22\u5F03</strong>!!!</p></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5982\u679C\u914D\u7F6E\u4E86 <code>jt808.request-sub-package-storage.type = none</code>\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6240\u6709\u7684\u5206\u5305\u8BF7\u6C42\u90FD\u4F1A\u88AB<strong>\u4E22\u5F03</strong>!!!</p></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5982\u679C\u914D\u7F6E\u4E86 <code>jt808.request-sub-package-storage.type = none</code>\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6240\u6709\u7684\u5206\u5305\u8BF7\u6C42\u90FD\u4F1A\u88AB<strong>\u4E22\u5F03</strong>!!!</p></div><ul><li><code>CaffeineJt808RequestSubPackageStorage</code><ul><li>\u57FA\u4E8E <code>caffeine</code> \u7684\u8BF7\u6C42\u6D88\u606F\u5206\u5305\u6682\u5B58\u5668</li><li>\u5F53 <code>jt808.request-sub-package-storage.type = caffeine</code> \u65F6\u542F\u7528</li></ul></li><li><code>Jt808RequestSubPackageStorage.NO_OPS</code><ul><li>\u7A7A\u7684\u5B9E\u73B0(\u5FFD\u7565\u6240\u6709\u5206\u5305\u8BF7\u6C42)</li><li>\u5F53 <code>jt808.request-sub-package-storage.type = none</code> \u65F6\u542F\u7528</li></ul></li></ul><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><p>\u4E0B\u9762\u4EE5\u7EC8\u7AEF\u6CE8\u518C\u6D88\u606F(<code>0x0001</code>) \u4E3A\u4F8B\u6765\u89C2\u5BDF\u4E00\u4E0B\u5206\u5305\u7684\u8FC7\u7A0B\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6682\u65F6\u8C03\u6574\u65E5\u5FD7\u7EA7\u522B\u4EE5\u4FBF\u89C2\u5BDF\u5206\u5305\u8BF7\u6C42\u5904\u7406</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level.root</span><span class="token punctuation">:</span> info
  <span class="token comment"># \u5C06\u9ED8\u8BA4\u89E3\u7801\u5668\u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u5230debug \u6765\u89C2\u5BDF\u8BF7\u6C42\u5206\u5305\u6D88\u606F</span>
  <span class="token key atrule">level.jt-808.request.decoder</span><span class="token punctuation">:</span> debug
  <span class="token comment"># \u5C06\u8BF7\u6C42\u5206\u5305\u6682\u5B58\u5668(\u9ED8\u8BA4\u4E3A\u57FA\u4E8ECaffeine\u7684\u5B9E\u73B0)\u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u7684debug \u6765\u89C2\u5BDF\u5206\u5305\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B</span>
  <span class="token key atrule">level.io.github.hylexus.jt.jt808.support.codec.impl.CaffeineJt808RequestSubPackageStorage</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>\u53D1\u9001\u4E0B\u9762\u4E09\u6761\u5206\u5305\u62A5\u6587\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>7E010060240100000000013912344329000000030001000B00026964393837363534333231747970653030313233343536373831323334353637277E
7E010060240100000000013912344329000100030002383837363534333231494430303030313233343536373831323334353637383837363534357E
7E0100600E010000000001391234432900020003000333323101B8CA4A2D313233343539347E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53D1\u9001\u4E09\u6761\u62A5\u6587\u4E4B\u540E\uFF0C\u53EF\u4EE5\u89C2\u5BDF\u5230\u7C7B\u4F3C\u5982\u4E0B\u65E5\u5FD7\uFF1A</p>`,16),r={class:""},u=["src"],i=a(`<p>\u4E0A\u9762\u65E5\u5FD7\u89E3\u91CA\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 0x0001 \u7684\u7B2C1\u4E2A\u5B50\u5305(-: \u8F6C\u4E49\u4E4B\u524D; +: \u8F6C\u4E49\u4E4B\u540E)</span>
- <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E010060240100000000013912344329000000030001000B00026964393837363534333231747970653030313233343536373831323334353637277E
+ <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E010060240100000000013912344329000000030001000B00026964393837363534333231747970653030313233343536373831323334353637277E
+ <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>0x0100--60<span class="token punctuation">)</span> <span class="token number">1</span>/3: 7E010060240100000000013912344329000000030001000B00026964393837363534333231747970653030313233343536373831323334353637277E
<span class="token comment"># 0x0001 \u7684\u7B2C2\u4E2A\u5B50\u5305(-: \u8F6C\u4E49\u4E4B\u524D; +: \u8F6C\u4E49\u4E4B\u540E)</span>
- <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E010060240100000000013912344329000100030002383837363534333231494430303030313233343536373831323334353637383837363534357E
+ <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E010060240100000000013912344329000100030002383837363534333231494430303030313233343536373831323334353637383837363534357E
+ <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>0x0100--60<span class="token punctuation">)</span> <span class="token number">2</span>/3: 7E010060240100000000013912344329000100030002383837363534333231494430303030313233343536373831323334353637383837363534357E
<span class="token comment"># 0x0001 \u7684\u7B2C3\u4E2A\u5B50\u5305(-: \u8F6C\u4E49\u4E4B\u524D; +: \u8F6C\u4E49\u4E4B\u540E)</span>
- <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E0100600E010000000001391234432900020003000333323101B8CA4A2D313233343539347E
- + <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin class-name">:</span> 7E0100600E010000000001391234432900020003000333323101B8CA4A2D313233343539347E
+ <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>0x0100--38<span class="token punctuation">)</span> <span class="token number">3</span>/3: 7E0100600E010000000001391234432900020003000333323101B8CA4A2D313233343539347E
<span class="token comment"># \u5206\u5305\u6682\u5B58\u5668\u53D1\u73B0\u6240\u6709\u5B50\u5305\u90FD\u5230\u8FBE\u4E86 --&gt; \u5408\u5E76\u6D88\u606F\u91CD\u65B0\u6295\u9012\u51FA\u53BB\u5F85\u5904\u7406\u5668\u5904\u7406</span>
DEBUG i.g.h.j.j.s.c.i.CaffeineJt808RequestSubPackageStorage - Redispatch mergedRequest <span class="token builtin class-name">:</span> DefaultJt808Request<span class="token punctuation">{</span>msgType<span class="token operator">=</span>BuiltInMsgType<span class="token punctuation">{</span>msgId<span class="token operator">=</span><span class="token number">256</span><span class="token punctuation">(</span>0x0100<span class="token punctuation">)</span>, <span class="token assign-left variable">desc</span><span class="token operator">=</span><span class="token string">&#39;\u7EC8\u7AEF\u6CE8\u518C&#39;</span><span class="token punctuation">}</span>, <span class="token assign-left variable">header</span><span class="token operator">=</span>HeaderSpec<span class="token punctuation">{</span>version<span class="token operator">=</span>VERSION_2019, <span class="token assign-left variable">terminalId</span><span class="token operator">=</span><span class="token string">&#39;00000000013912344329&#39;</span>, <span class="token assign-left variable">msgId</span><span class="token operator">=</span><span class="token number">256</span>, <span class="token assign-left variable">flowId</span><span class="token operator">=</span><span class="token number">2</span>, <span class="token assign-left variable">msgBodyProps</span><span class="token operator">=</span>MsgBodyProps<span class="token punctuation">{</span>intValue<span class="token operator">=</span><span class="token number">16470</span>, <span class="token assign-left variable">msgBodyLength</span><span class="token operator">=</span><span class="token number">86</span>, <span class="token assign-left variable">hasSubPackage</span><span class="token operator">=</span>false, <span class="token assign-left variable">encryptionType</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token assign-left variable">checkSum</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5206\u5305\u8865\u4F20" tabindex="-1"><a class="header-anchor" href="#\u5206\u5305\u8865\u4F20" aria-hidden="true">#</a> \u5206\u5305\u8865\u4F20</h2><p>\u8FD9\u91CC\u7684\u5206\u5305\u8865\u4F20\u6307\u7684\u662F <code>0x8003</code> \u6D88\u606F\u3002</p><p>\u5185\u7F6E\u7684\u5206\u5305\u8BF7\u6C42\u6682\u5B58\u5668\u76EE\u524D\u5C31\u53EA\u6709\u4E00\u79CD\u57FA\u4E8E <code>Caffeine</code> \u7684\u5B9E\u73B0 : <code>CaffeineJt808RequestSubPackageStorage</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6682\u65F6\u6CA1\u60F3\u5230\u4E00\u79CD\u6BD4\u8F83\u4F18\u96C5\u7684\u3001\u81EA\u52A8\u5316\u7684\u3001\u53EF\u6269\u5C55\u7684\u670D\u52A1\u7AEF\u5206\u5305\u8865\u4F20\u5904\u7406\u6D41\u7A0B\u3002</p><p>\u6240\u4EE5\u670D\u52A1\u7AEF\u5206\u5305\u8865\u4F20\u6D88\u606F\u6682\u65F6\u4E0D\u652F\u6301\uFF0C\u540E\u7EED\u7248\u672C\u5347\u7EA7\u4F1A\u5B9E\u73B0\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>2.0.0</strong> \u7248\u672C\u4E0D\u652F\u6301\u81EA\u52A8\u5316\u7684 <code>0x8003</code> \u6D88\u606F\u5904\u7406\u3002</p><p>\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49 <code>Jt808RequestSubPackageStorage</code> \u7684\u5B9E\u73B0\u7C7B\u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002</p></div>`,6);function k(n,g){return t(),e(p,null,[l,s("p",r,[s("img",{src:n.$withBase("/img/v2/basic/Jt808RequestBody-sub-package.png.png")},null,8,u)]),i],64)}var m=o(c,[["render",k]]);export{m as default};
