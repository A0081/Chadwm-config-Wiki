# ChaDWM

## 简介

[Dwm](https://dwm.suckless.org/) 是Dynamic Window Manager的缩写,它是一个非常轻量级的窗口管理器。其主要特征有:

1. 动态管理窗口:Dwm 不使用永久性的窗口位置和大小,而是动态的在运行时计算窗口的最佳布局。这使得它非常适合用在终端环境下。
2. 高度可定制:Dwm 是高度模块化的,可以很容易的更改其行为和外观。该项目的代码量也很小,只有2000行左右的C代码,非常适合学习和修改。
3. 键盘驱动:Dwm 的控制主要是通过键盘快捷键来完成的,鼠标很少使用。这使得它对键盘使用非常高效。
4. 低资源消耗:Dwm 非常轻量级,其资源消耗非常低。这使得它能够在很低配置的机器上也运行良好。
5. Xinerama 兼容:Dwm 支持Xinerama,可以很容易的在多头显示器上使用。
6. 基于dmenu的程序启动器:Dwm 与dmenu 程序启动器配合使用,可以高效的启动终端程序。
7. 平铺和独立布局:Dwm 支持平铺和独立两种布局方式,用户可以在两种布局间自由切换。

[chadwm](https://github.com/siduck/chadwm) 是一个基于 dwm 窗口管理器的衍生版本。它具有以下主要特性:

1. 更简洁的代码:chadwm 对 dwm 代码进行了精简,移除了许多不常用的功能,使得其代码更加简洁。
2. 支持浮动窗口:chadwm 支持浮动窗口,用户可以设置某些应用的窗口浮动在其他窗口之上。
3. 支持半透明:chadwm 支持窗口的半透明效果,用户可以设置窗口的透明度。
4. 更佳的多显示器支持:chadwm 对 dwm 的多显示器支持进行了改进,可以更灵活的设置各显示器之间的窗口布局。
5. 支持背景设置:chadwm 支持为每个显示器设置不同的背景图片或颜色。
6. 支持窗口Descriptions:chadwm 支持给每个窗口设置描述信息,当窗口被聚焦时可以显示该描述信息。
7. 支持系统托盘:chadwm 内置了一个简单的系统托盘,可以显示常驻程序的图标。
8. 其它改进:chadwm 还进行了其它一些改进,如支持了滚动表头、支持全屏窗口等。

![](/preview.png)

## 配置一览

```go
❄️                  Setup / DWM                   ❄️
---------------------------------------------------
╭─ Distro          -> Arch Linux
├─ Editor          -> Vim / Sublime Text 4
├─ Browser         -> google chrome 
├─ Shell           -> zsh / bash
╰─ Process Viewer  -> htop
 
╭─ Music Player    -> yesplaymusic
├─ Compositor      -> picom
├─ Notifications   -> dunst
├─ Media Player    -> mpv / vlc
├─ pdf Read 	   -> Zathura / Foliate
╰─ File Manager    -> ranger / thunra
 
╭─ DE              -> chadwm
├─ WM	           -> dwm
├─ Terminal        -> alacritty
├─ App Laucher     -> dmenu / rofi
├─ Theme           -> pywal
╰─ Font            -> JetBrainsMono
```

