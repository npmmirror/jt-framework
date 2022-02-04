import{d as n}from"./app.9f46fb56.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="v2019" tabindex="-1"><a class="header-anchor" href="#v2019" aria-hidden="true">#</a> V2019</h1><h2 id="\u6D88\u606F\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u7ED3\u6784" aria-hidden="true">#</a> \u6D88\u606F\u7ED3\u6784</h2><table><thead><tr><th>\u6807\u8BC6\u4F4D</th><th>\u6D88\u606F\u5934</th><th>\u6D88\u606F\u4F53</th><th>\u6821\u9A8C\u7801</th><th>\u6807\u8BC6\u4F4D</th></tr></thead><tbody><tr><td>1byte(0x7e)</td><td>16byte</td><td></td><td>1byte</td><td>1byte(0x7e)</td></tr></tbody></table><h2 id="\u6D88\u606F\u5934" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u5934" aria-hidden="true">#</a> \u6D88\u606F\u5934</h2><ul><li><code>\u5206\u5305\u6D88\u606F</code> \u7684\u6D88\u606F\u5934\u957F\u5EA6\u4E3A <code>17\u5B57\u8282</code></li><li><code>\u975E\u5206\u5305\u6D88\u606F</code> \u7684\u6D88\u606F\u5934\u957F\u5EA6\u4E3A <code>21\u5B57\u8282</code></li></ul><p>\u6D88\u606F\u5934\u7684\u7ED3\u6784\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6D88\u606FID<span class="token punctuation">[</span><span class="token number">0</span>-2<span class="token punctuation">)</span>	\u6D88\u606F\u4F53\u5C5E\u6027<span class="token punctuation">[</span><span class="token number">2</span>-4<span class="token punctuation">)</span>	\u534F\u8BAE\u7248\u672C\u53F7<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>   \u7EC8\u7AEF\u624B\u673A\u53F7<span class="token punctuation">[</span><span class="token number">5</span>-15<span class="token punctuation">)</span>	\u6D88\u606F\u6D41\u6C34\u53F7<span class="token punctuation">[</span><span class="token number">15</span>-17<span class="token punctuation">)</span>	\u6D88\u606F\u5305\u5C01\u88C5\u9879<span class="token punctuation">[</span><span class="token number">17</span>-21<span class="token punctuation">)</span>

byte<span class="token punctuation">[</span><span class="token number">0</span>-2<span class="token punctuation">)</span> 	\u6D88\u606FID word<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
byte<span class="token punctuation">[</span><span class="token number">2</span>-4<span class="token punctuation">)</span> 	\u6D88\u606F\u4F53\u5C5E\u6027 word<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
		bit<span class="token punctuation">[</span><span class="token number">0</span>-10<span class="token punctuation">)</span>	\u6D88\u606F\u4F53\u957F\u5EA6
		bit<span class="token punctuation">[</span><span class="token number">10</span>-13<span class="token punctuation">)</span>	\u6570\u636E\u52A0\u5BC6\u65B9\u5F0F
						\u6B64\u4E09\u4F4D\u90FD\u4E3A <span class="token number">0</span>,\u8868\u793A\u6D88\u606F\u4F53\u4E0D\u52A0\u5BC6
						\u7B2C <span class="token number">10</span> \u4F4D\u4E3A <span class="token number">1</span>,\u8868\u793A\u6D88\u606F\u4F53\u7ECF\u8FC7 RSA \u7B97\u6CD5\u52A0\u5BC6
						\u5176\u5B83\u4FDD\u7559
		bit<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span>		\u5206\u5305
						<span class="token number">1</span>: \u6D88\u606F\u4F53\u536B\u957F\u6D88\u606F,\u8FDB\u884C\u5206\u5305\u53D1\u9001\u5904\u7406,\u5177\u4F53\u5206\u5305\u4FE1\u606F\u7531\u6D88\u606F\u5305\u5C01\u88C5\u9879\u51B3\u5B9A
						<span class="token number">0</span>: \u5219\u6D88\u606F\u5934\u4E2D\u65E0\u6D88\u606F\u5305\u5C01\u88C5\u9879\u5B57\u6BB5
		bit<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span>	    \u7248\u672C\u6807\u8BC6
		bit<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span>	\u4FDD\u7559
byte<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>     \u534F\u8BAE\u7248\u672C\u53F7
byte<span class="token punctuation">[</span><span class="token number">5</span>-15<span class="token punctuation">)</span> 	\u7EC8\u7AEF\u624B\u673A\u53F7\u6216\u8BBE\u5907ID bcd<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
		\u6839\u636E\u5B89\u88C5\u540E\u7EC8\u7AEF\u81EA\u8EAB\u7684\u624B\u673A\u53F7\u8F6C\u6362
		\u624B\u673A\u53F7\u4E0D\u8DB312 \u4F4D,\u5219\u5728\u524D\u9762\u8865 <span class="token number">0</span>
byte<span class="token punctuation">[</span><span class="token number">15</span>-17<span class="token punctuation">)</span> 	\u6D88\u606F\u6D41\u6C34\u53F7 word<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
		\u6309\u53D1\u9001\u987A\u5E8F\u4ECE <span class="token number">0</span> \u5F00\u59CB\u5FAA\u73AF\u7D2F\u52A0
byte<span class="token punctuation">[</span><span class="token number">17</span>-21<span class="token punctuation">]</span> 	\u6D88\u606F\u5305\u5C01\u88C5\u9879
        \u5982\u679C\u6D88\u606F\u4F53\u5C5E\u6027\u4E2D\u76F8\u5173\u6807\u8BC6\u4F4D\u786E\u5B9A\u6D88\u606F\u5206\u5305\u5904\u7406,\u5219\u8BE5\u9879\u6709\u5185\u5BB9
		\u5426\u5219\u65E0\u8BE5\u9879
		byte<span class="token punctuation">[</span><span class="token number">0</span>-2<span class="token punctuation">)</span>	\u6D88\u606F\u5305\u603B\u6570<span class="token punctuation">(</span>word<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">))</span> \u8BE5\u6D88\u606F\u5206\u5305\u540E\u5F97\u603B\u5305\u6570
		byte<span class="token punctuation">[</span><span class="token number">2</span>-4<span class="token punctuation">)</span>	\u5305\u5E8F\u53F7<span class="token punctuation">(</span>word<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">))</span>  \u4ECE <span class="token number">1</span> \u5F00\u59CB
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,7);function p(e,c){return t}var l=s(a,[["render",p]]);export{l as default};
