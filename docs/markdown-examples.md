# 配置

## 1. 配置文件简介

DWM 的配置文件通常位于源代码目录下的 `config.h` 文件。该文件主要包含以下几个部分：

- 包含的头文件
- 宏定义
- 配置数组
- 函数声明

## 2. 修改字体与颜色

你可以在配置文件中修改 DWM 的字体和颜色方案。首先，找到 `static const char *fonts[]` 数组，添加或修改字体设置。例如：

```c
static const char *fonts[]          = {"JetBrainsMono Nerd Font Mono:style:bold:size=11"}; /* 状态栏字体设置*/
```

接下来，修改 `static const char col_gray1[]`、`static const char col_gray2[]` 和 `static const char col_gray3[]` 的值，即可更改背景色、边框色和字体颜色。例如：

```c
#include "themes/dracula.h" 

static const char *colors[][3]      = {
    /*                     前景       背景      边框 */
    [SchemeNorm]       = { gray3,   black,  gray2 },
    [SchemeSel]        = { gray4,   blue,   blue  },
    [SchemeTitle]      = { white,   black,  black  }, // 活动窗口标题
    [TabSel]           = { blue,    gray2,  black },
    [TabNorm]          = { gray3,   black,  black },
    [SchemeTag]        = { gray3,   black,  black },
    [SchemeTag1]       = { blue,    black,  black },
    [SchemeTag2]       = { red,     black,  black },
    [SchemeTag3]       = { orange,  black,  black },
    [SchemeTag4]       = { green,   black,  black },
    [SchemeTag5]       = { blue,    black,  black },
    [SchemeTag6]       = { pinky,   black,  black },
    [SchemeTag7]       = { pink,    black,  black },
    [SchemeTag8]       = { orange,  black,  black },
    [SchemeTag9]       = { red,     black,  black },
    [SchemeTag10]      = { blue,    black,  black },    
    [SchemeLayout]     = { green,   black,  black },
    [SchemeBtnPrev]    = { green,   black,  black },
    [SchemeBtnNext]    = { yellow,  black,  black },
    [SchemeBtnClose]   = { red,     black,  black },
};
```

## 3. 自定义布局

你还可以在配置文件中自定义布局。首先，找到 `static const Layout layouts[]` 结构体数组，修改或添加布局。例如：

```c
static const Layout layouts[] = {
    /* symbol     arrange function */
    { "[]=",      tile },    /* 默认平铺布局 */
    { "><>",      NULL },    /* 浮动布局 */
    { "[M]",      monocle }, /* 最大化布局 */
};
```

## 4. 配置快捷键

配置文件中的 `static Key keys[]` 数组定义了所有的快捷键。你可以根据自己的需求添加或修改快捷键。例如：

```c
static Key keys[] = {
    /* modifier                     key        function        argument */
    { MODKEY,                       XK_p,      spawn,          {.v = dmenucmd } },
    { MODKEY,                       XK_Return, spawn,          {.v = termcmd } },
    { MODKEY,                       XK_b,      togglebar,      {0} },
};
```

注意：`MODKEY` 是一个代表修饰键的宏，通常设置为 `Mod1Mask`（Alt 键）或 `Mod4Mask`（Win 键）。

## 5. 配置工作区

你可以通过修改 `static const char *tags[]` 数组来自定义工作区的数量和名称。例如：

```c
static const char *tags[] = { "1", "2", "3", "4", "5", "6", "7", "8", "9" };
//static char *tags[] = { "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X" };
//static char *tags[] = { "Web", "Chat", "Edit", "Meld", "Vb", "Mail", "Video", "Image", "Files", "Music" };
```

另外，`static const Rule rules[]` 数组可以帮助你为特定的窗口设置特殊规则，例如默认工作区、是否浮动等。例如：



```c
static const Rule rules[] = {
    /* class      instance    title       tags mask     isfloating   monitor */
    { "Gimp",     NULL,       NULL,       1 << 8,       1,           -1 },
};
```

## 6. 编译与安装

完成配置文件的修改后，需要重新编译并安装 DWM。执行以下命令：

```bash
make
sudo make clean install
reboot
```

然后，重启 DWM 或重新登录即可看到定制后的桌面环境。
