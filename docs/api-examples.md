# 配置

## 配置文件路径

dwm的配置文件通常位于用户的家目录下，路径为~/.dwm/config.h。如果这个文件不存在，可以从dwm源代码中复制一个示例配置文件，并将其保存为config.h。

## 配置文件结构

```bash
.config/chadwm/
├── chadwm
│   ├── chadwm
│   ├── config.def-azerty.h
│   ├── config.def.h   #默认配置文件  主要修改的文件
│   ├── config.h		#配置文件  
│   ├── config.mk
│   ├── drw.c
│   ├── drw.h
│   ├── drw.o
│   ├── dwm.1
│   ├── dwm.c
│   ├── dwm.o
│   ├── dwm.png
│   ├── fibonacci.c
│   ├── functions.h
│   ├── gaplessgrid.c
│   ├── Makefile
│   ├── movestack.c
│   ├── themes		#主题
│   │   ├── catppuccin.h
│   │   ├── dracula.h
│   │   ├── gruvchad.h
│   │   ├── nord.h
│   │   └── onedark.h
│   ├── transient.c
│   ├── util.c
│   ├── util.h
│   ├── util.o
│   └── vanitygaps.c
├── cheatsheet.md
├── conky		#系统配置总揽
│   └── system-overview
├── launcher		#启动器
│   ├── launcher.sh
│   └── rofi
│       ├── colors.rasi
│       ├── launcher.rasi
│       └── powermenu.rasi
├── LICENSE
├── picom		#动效
│   └── picom.conf
├── README.md
├── rofi		#Rofi
│   ├── colors.rasi
│   ├── config.rasi
│   ├── launcher2.rasi
│   └── themes	#Rofi额外主题
│       ├── dracula.rasi
│       ├── everblush.rasi
│       ├── forest.rasi
│       ├── gruv.rasi
│       ├── nord.rasi
│       └── onedark.rasi
├── scripts		#脚本
│   ├── bar.sh		#生成状态栏的一些信息
│   ├── bar_themes		#状态栏配色文件
│   │   ├── catppuccin
│   │   ├── dracula
│   │   ├── gruvchad
│   │   ├── nord
│   │   └── onedark
│   ├── fetch
│   ├── keyhint
│   ├── license
│   │   └── fetch.md
│   ├── picom-toggle.sh
│   └── run.sh		#开机启动脚本，自启动的软件写在这里边
├── sxhkd		#快捷建自定义
│   └── sxhkdrc
└── wallpaper		#壁纸
    ├── chadwm1.png
    └── chadwm.jpg
```

