import{_ as s,c as a,o as n,O as l}from"./chunks/framework.d7e37bdc.js";const p="/assets/preview.a9ee3ad9.png",m=JSON.parse('{"title":"ChaDWM","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),o={name:"index.md"},e=l('<h1 id="chadwm" tabindex="-1">ChaDWM <a class="header-anchor" href="#chadwm" aria-label="Permalink to &quot;ChaDWM&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://dwm.suckless.org/" target="_blank" rel="noreferrer">Dwm</a> 是Dynamic Window Manager的缩写,它是一个非常轻量级的窗口管理器。其主要特征有:</p><ol><li>动态管理窗口:Dwm 不使用永久性的窗口位置和大小,而是动态的在运行时计算窗口的最佳布局。这使得它非常适合用在终端环境下。</li><li>高度可定制:Dwm 是高度模块化的,可以很容易的更改其行为和外观。该项目的代码量也很小,只有2000行左右的C代码,非常适合学习和修改。</li><li>键盘驱动:Dwm 的控制主要是通过键盘快捷键来完成的,鼠标很少使用。这使得它对键盘使用非常高效。</li><li>低资源消耗:Dwm 非常轻量级,其资源消耗非常低。这使得它能够在很低配置的机器上也运行良好。</li><li>Xinerama 兼容:Dwm 支持Xinerama,可以很容易的在多头显示器上使用。</li><li>基于dmenu的程序启动器:Dwm 与dmenu 程序启动器配合使用,可以高效的启动终端程序。</li><li>平铺和独立布局:Dwm 支持平铺和独立两种布局方式,用户可以在两种布局间自由切换。</li></ol><p><a href="https://github.com/siduck/chadwm" target="_blank" rel="noreferrer">chadwm</a> 是一个基于 dwm 窗口管理器的衍生版本。它具有以下主要特性:</p><ol><li>更简洁的代码:chadwm 对 dwm 代码进行了精简,移除了许多不常用的功能,使得其代码更加简洁。</li><li>支持浮动窗口:chadwm 支持浮动窗口,用户可以设置某些应用的窗口浮动在其他窗口之上。</li><li>支持半透明:chadwm 支持窗口的半透明效果,用户可以设置窗口的透明度。</li><li>更佳的多显示器支持:chadwm 对 dwm 的多显示器支持进行了改进,可以更灵活的设置各显示器之间的窗口布局。</li><li>支持背景设置:chadwm 支持为每个显示器设置不同的背景图片或颜色。</li><li>支持窗口Descriptions:chadwm 支持给每个窗口设置描述信息,当窗口被聚焦时可以显示该描述信息。</li><li>支持系统托盘:chadwm 内置了一个简单的系统托盘,可以显示常驻程序的图标。</li><li>其它改进:chadwm 还进行了其它一些改进,如支持了滚动表头、支持全屏窗口等。</li></ol><p><img src="'+p+`" alt=""></p><h2 id="配置一览" tabindex="-1">配置一览 <a class="header-anchor" href="#配置一览" aria-label="Permalink to &quot;配置一览&quot;">​</a></h2><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">❄️                  Setup </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> DWM                   ❄️</span></span>
<span class="line"><span style="color:#89DDFF;">---------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">╭─ Distro          </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Arch Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Editor          </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Vim </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> Sublime Text </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Browser         </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> google chrome </span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Shell           </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> zsh </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> bash</span></span>
<span class="line"><span style="color:#A6ACCD;">╰─ Process Viewer  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> htop</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">╭─ Music Player    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> yesplaymusic</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Compositor      </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> picom</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Notifications   </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> dunst</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Media Player    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> mpv </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> vlc</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ pdf Read 	   </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> Zathura </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> Foliate</span></span>
<span class="line"><span style="color:#A6ACCD;">╰─ File Manager    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> ranger </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> thunra</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">╭─ DE              </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> chadwm</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ WM	           </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> dwm</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Terminal        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> alacritty</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ App Laucher     </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> dmenu </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> rofi</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Theme           </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> pywal</span></span>
<span class="line"><span style="color:#A6ACCD;">╰─ Font            </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> JetBrainsMono</span></span></code></pre></div>`,9),t=[e];function c(r,i,D,C,A,y){return n(),a("div",null,t)}const h=s(o,[["render",c]]);export{m as __pageData,h as default};
