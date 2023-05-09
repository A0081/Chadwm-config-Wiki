# config.def.h

```c
/* See LICENSE file for copyright and license details. */

#include <X11/XF86keysym.h>

/* 外观 */
static const unsigned int borderpx  = 2;        /* 窗口边框像素*/
static const unsigned int default_border = 0;   /* 通过键绑定动态调整边框大小后切换回默认边框 */
static const unsigned int snap      = 32;       /* 用于捕捉和调整窗口大小的像素 */
static const unsigned int gappih    = 10;       /* 水平窗口内间距 */
static const unsigned int gappiv    = 10;       /* 垂直窗口内间距 */
static const unsigned int gappoh    = 10;       /*水平外间距(窗口和屏幕边缘之间)  */
static const unsigned int gappov    = 10;       /*  垂直外间距(窗口和屏幕边缘之间)*/
static const int smartgaps          = 0;        /* 1表示只有一个窗口时没有外部间隙 */
static const unsigned int systraypinning = 0;   /* 0: 随意的系统托盘跟随选定的监视器,>0: 将系统托盘固定到监视器X */
static const unsigned int systrayspacing = 2;   /* 行间距 */
static const int systraypinningfailfirst = 1;   /* 1:如果固定失败,在第一监视器上显示系统托盘,0:在最后一个监视器上显示系统托盘*/
static const int showsystray        = 1;        /* 0 表示没有系统托盘 */
static const int showbar            = 1;        /* 0表示没有bar */
static const int showtab            = showtab_auto;
static const int toptab             = 1;        /* 0表示底部标签 */
static const int floatbar           = 1;/* 1 表示bar会浮动(没有内边距),0 表示bar有内边距 */
static const int topbar             = 1;        /* 0 表示底部bar */
static const int horizpadbar        = 5;        /* bar内的内边距 */
static const int vertpadbar         = 11;       /*bar内的内边距 */
static const int vertpadtab         = 35;
static const int horizpadtabi       = 15;
static const int horizpadtabo       = 15;
static const int scalepreview       = 4;
static const int tag_preview        = 1;        /* 1 表示启用, 0 是关闭 */
static const int colorfultag        = 1;        /* 0 表示使用 SchemeSel 选定的非空闲标签 */
static const char *upvol[]   = { "/usr/bin/pactl", "set-sink-volume", "0", "+5%",     NULL };
static const char *downvol[] = { "/usr/bin/pactl", "set-sink-volume", "0", "-5%",     NULL };
static const char *mutevol[] = { "/usr/bin/pactl", "set-sink-mute",   "0", "toggle",  NULL };
static const char *light_up[] = {"/usr/bin/light", "-A", "5", NULL};
static const char *light_down[] = {"/usr/bin/light", "-U", "5", NULL};
static const int new_window_attach_on_end = 0; /*  1 表示新窗口将附加在末尾;0 表示新窗口将附加在前面,默认是前面 */
#define ICONSIZE 19   /* 图标大小 */
#define ICONSPACING 8 /* 图标和标题之间的间距 */

static const char *fonts[]          = {"JetBrainsMono Nerd Font Mono:style:bold:size=11"}; /* 状态栏字体设置*/

// 主题
//#include "themes/onedark.h"
//#include "themes/catppuccin.h"
//#include "themes/nord.h"
//#include "themes/gruvchad.h"
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

/* 标记 */
static char *tags[] = { "", "", "", "", "", "", "", "", "", "" };
//static char *tags[] = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" };
//static char *tags[] = { "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X" };
//static char *tags[] = { "", "", "", "", "", "", "", "", "", "" };
//static char *tags[] = { "Web", "Chat", "Edit", "Meld", "Vb", "Mail", "Video", "Image", "Files", "Music" };
//static char *tags[] = {"一", "二", "三", "四", "五", "六", "七", "八", "九", "十"};

static const char* eww[] = { "eww", "open" , "eww", NULL };
static const char* discord[] = { "discord", "open" , "discord", NULL };
static const char* telegram[] = { "telegram-desktop", "open" , "telegram-desktop", NULL };
static const char* mintstick[] = { "mintstick", "-m", "iso", NULL};
static const char* pavucontrol[] = { "pavucontrol", NULL };

static const Launcher launchers[] = {
    /* 命令       要显示的名称 */
    { eww,           "數" },
    { discord,       "ﱲ" },
    { telegram,      "" },
    { mintstick,     "虜" },
    { pavucontrol,   "墳" },
};

static const int tagschemes[] = {
    SchemeTag1, SchemeTag2, SchemeTag3, SchemeTag4, SchemeTag5, SchemeTag6, SchemeTag7, SchemeTag8, SchemeTag9, SchemeTag10
};

static const unsigned int ulinepad      = 5; /* 横向填充在下划线和标签之间 */
static const unsigned int ulinestroke   = 2; /* 下划线粗细/高度 */
static const unsigned int ulinevoffset  = 0; /* 下划线应出现在条形图底部以上的高度 */
static const int ulineall               = 0; /* 1 显示所有标签的下划线,0 仅显示活动标签的下划线 */

static const Rule rules[] = {
    /* xprop(1):
     *	WM_CLASS(STRING) = instance, class
     *	WM_NAME(STRING) = title
     */
    /* class      instance    title       tags mask     iscentered   isfloating   monitor */
    { "Gimp",     NULL,       NULL,       0,            0,           0,           -1 },
    { "Firefox",  NULL,       NULL,       1 << 8,       0,           0,           -1 },
    { "eww",      NULL,       NULL,       0,            0,           1,           -1 },
    { "mintstick", NULL,      NULL,       0,            0,           0,           -1 },
};

/* 布局 */
static const float mfact     = 0.50; /* 主区域大小的因子 [0.05..0.95] */
static const int nmaster     = 1;    /* 主区域中的客户端数量 */
static const int resizehints = 0;    /* 1 表示在平铺调整大小时遵守大小提示 */
static const int lockfullscreen = 1; /* 1 将强制聚焦在全屏窗口上*/

#define FORCE_VSPLIT 1  /* nrowgrid 布局:强制两个客户端始终垂直拆分 */
#include "functions.h"


static const Layout layouts[] = {
    /* 符号     		功能 */
    { "[]=",      tile },    /* 第一个条目是默认值 */
    { "[M]",      monocle },
    { "[@]",      spiral },
    { "[\\]",     dwindle },
    { "H[]",      deck },
    { "TTT",      bstack },
    { "===",      bstackhoriz },
    { "HHH",      grid },
    { "###",      nrowgrid },
    { "---",      horizgrid },
    { ":::",      gaplessgrid },
    { "|M|",      centeredmaster },
    { ">M>",      centeredfloatingmaster },
    { "><>",      NULL },    /* no layout function means floating behavior */
    { NULL,       NULL },
};

/* 按键定义 */
#define MODKEY Mod4Mask 
#define TAGKEYS(KEY,TAG) \
    { MODKEY,                       KEY,      view,           {.ui = 1 << TAG} }, \
    { MODKEY|ControlMask,           KEY,      toggleview,     {.ui = 1 << TAG} }, \
    { MODKEY|ShiftMask,             KEY,      tag,            {.ui = 1 << TAG} }, \
    { MODKEY|ControlMask|ShiftMask, KEY,      toggletag,      {.ui = 1 << TAG} },

/* helper for spawning shell commands in the pre dwm-5.0 fashion */
#define SHCMD(cmd) { .v = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

/* commands */

static const Key keys[] = {
    /* modifier                         key         function        argument */

    // 调节屏幕亮度和音量
    {0,                       XF86XK_AudioLowerVolume, spawn, {.v = downvol}},
	{0,                       XF86XK_AudioMute, spawn, {.v = mutevol }},
	{0,                       XF86XK_AudioRaiseVolume, spawn, {.v = upvol}},
	{0,				XF86XK_MonBrightnessUp,		spawn,	{.v = light_up}},
	{0,				XF86XK_MonBrightnessDown,	spawn,	{.v = light_down}},

    // 全屏和裁剪截图
    {MODKEY|ControlMask,                XK_u,       spawn,
        SHCMD("maim | xclip -selection clipboard -t image/png")},
    {MODKEY,                            XK_u,       spawn,
        SHCMD("maim --select | xclip -selection clipboard -t image/png")},

    //{ MODKEY,                           XK_c,       spawn,          SHCMD("rofi -show drun") },
    //{ MODKEY,                           XK_Return,  spawn,            SHCMD("st")},

    // toggle stuff
    { MODKEY,                           XK_b,       togglebar,      {0} },
    { MODKEY|ControlMask,               XK_t,       togglegaps,     {0} },
    { MODKEY|ShiftMask,                 XK_space,   togglefloating, {0} },
    { MODKEY,                           XK_f,       togglefullscr,  {0} },

    { MODKEY|ControlMask,               XK_w,       tabmode,        { -1 } },
    { MODKEY,                           XK_j,       focusstack,     {.i = +1 } },
    { MODKEY,                           XK_k,       focusstack,     {.i = -1 } },
    { MODKEY,                           XK_i,       incnmaster,     {.i = +1 } },
    { MODKEY,                           XK_d,       incnmaster,     {.i = -1 } },

    // 改变主窗格和当前窗口的比例
    { MODKEY,                           XK_h,       setmfact,       {.f = -0.05} },
    { MODKEY,                           XK_l,       setmfact,       {.f = +0.05} },
    { MODKEY|ShiftMask,                 XK_h,       setcfact,       {.f = +0.25} },
    { MODKEY|ShiftMask,                 XK_l,       setcfact,       {.f = -0.25} },
    { MODKEY|ShiftMask,                 XK_o,       setcfact,       {.f =  0.00} },


    { MODKEY|ShiftMask,                 XK_j,       movestack,      {.i = +1 } },
    { MODKEY|ShiftMask,                 XK_k,       movestack,      {.i = -1 } },
    { MODKEY|ShiftMask,                 XK_Return,  zoom,           {0} },
    { MODKEY,                           XK_Tab,     view,           {0} },

    // 整体间隙
    { MODKEY|ControlMask,               XK_i,       incrgaps,       {.i = +1 } },
    { MODKEY|ControlMask,               XK_d,       incrgaps,       {.i = -1 } },

    // 内部间隙
    { MODKEY|ShiftMask,                 XK_i,       incrigaps,      {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_i,       incrigaps,      {.i = -1 } },

    // 外部间隙
    { MODKEY|ControlMask,               XK_o,       incrogaps,      {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_o,       incrogaps,      {.i = -1 } },

    // 内部和外部水平和垂直间隙 
    { MODKEY|ControlMask,               XK_6,       incrihgaps,     {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_6,       incrihgaps,     {.i = -1 } },
    { MODKEY|ControlMask,               XK_7,       incrivgaps,     {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_7,       incrivgaps,     {.i = -1 } },
    { MODKEY|ControlMask,               XK_8,       incrohgaps,     {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_8,       incrohgaps,     {.i = -1 } },
    { MODKEY|ControlMask,               XK_9,       incrovgaps,     {.i = +1 } },
    { MODKEY|ControlMask|ShiftMask,     XK_9,       incrovgaps,     {.i = -1 } },

    { MODKEY|ControlMask|ShiftMask,     XK_d,       defaultgaps,    {0} },

    // 布局
    { MODKEY,                           XK_t,       setlayout,      {.v = &layouts[0]} },
    { MODKEY|ShiftMask,                 XK_f,       setlayout,      {.v = &layouts[1]} },
    { MODKEY,                           XK_m,       setlayout,      {.v = &layouts[2]} },
    { MODKEY|ControlMask,               XK_g,       setlayout,      {.v = &layouts[10]} },
    { MODKEY|ControlMask|ShiftMask,     XK_t,       setlayout,      {.v = &layouts[13]} },
    { MODKEY,                           XK_space,   setlayout,      {0} },
    { MODKEY|ControlMask,               XK_comma,   cyclelayout,    {.i = -1 } },
    { MODKEY|ControlMask,               XK_period,  cyclelayout,    {.i = +1 } },
    { MODKEY,                           XK_0,       view,           {.ui = ~0 } },
    { MODKEY|ShiftMask,                 XK_0,       tag,            {.ui = ~0 } },
    { MODKEY,                           XK_comma,   focusmon,       {.i = -1 } },
    { MODKEY,                           XK_period,  focusmon,       {.i = +1 } },
    { MODKEY|ShiftMask,                 XK_Left,    tagmon,         {.i = -1 } },
    { MODKEY|ShiftMask,                 XK_Right,   tagmon,         {.i = +1 } },

    // 改变边框像素
    { MODKEY|ShiftMask,                 XK_minus,   setborderpx,    {.i = -1 } },
    { MODKEY|ShiftMask,                 XK_p,       setborderpx,    {.i = +1 } },
    { MODKEY|ShiftMask,                 XK_w,       setborderpx,    {.i = default_border } },

    // 注销dwm
    //{ MODKEY|ControlMask,               XK_q,       spawn,        SHCMD("killall bar.sh dwm") },

    // 关闭窗口
    { MODKEY,                           XK_q,       killclient,     {0} },
    { MODKEY|ShiftMask,                 XK_q,       killclient,     {0} },

    // 重启
    { MODKEY|ShiftMask,                 XK_r,       restart,           {0} },

    // 隐藏和还原窗口
    { MODKEY,                           XK_e,       hidewin,        {0} },
    { MODKEY|ShiftMask,                 XK_e,       restorewin,     {0} },

    // 按下 MODKEY 和数字键，可以切换到对应的标签

    TAGKEYS(                            XK_1,                       0)
    TAGKEYS(                            XK_2,                       1)
    TAGKEYS(                            XK_3,                       2)
    TAGKEYS(                            XK_4,                       3)
    TAGKEYS(                            XK_5,                       4)
    TAGKEYS(                            XK_6,                       5)
    TAGKEYS(                            XK_7,                       6)
    TAGKEYS(                            XK_8,                       7)
    TAGKEYS(                            XK_9,                       8)

    // azerty keyboard (Belgium)
    // TAGKEYS(                               XK_ampersand,                0)
    // TAGKEYS(                               XK_eacute,                   1)
    // TAGKEYS(                               XK_quotedbl,                 2)
    // TAGKEYS(                               XK_apostrophe,               3)
    // TAGKEYS(                               XK_parenleft,                4)
    // TAGKEYS(                               XK_section,                  5)
    // TAGKEYS(                               XK_egrave,                   6)
    // TAGKEYS(                               XK_exclam,                   7)
    // TAGKEYS(                               XK_ccedilla,                 8)

};

/* u */
/* click can be ClkTagBar, ClkLtSymbol, ClkStatusText, ClkWinTitle, ClkClientWin, or ClkRootWin */
static const Button buttons[] = {
    /* click                event mask      button          function        argument */
    { ClkLtSymbol,          0,              Button1,        setlayout,      {0} },
    { ClkLtSymbol,          0,              Button3,        setlayout,      {.v = &layouts[2]} },
    { ClkWinTitle,          0,              Button2,        zoom,           {0} },
    { ClkStatusText,        0,              Button2,        spawn,          SHCMD("st") },

    /* Keep movemouse? */
    /* { ClkClientWin,         MODKEY,         Button1,        movemouse,      {0} }, */

    /* placemouse options, choose which feels more natural:
    *    0 - tiled position is relative to mouse cursor
    *    1 - tiled position is relative to window center
    *    2 - mouse pointer warps to window center
    *
    * The moveorplace uses movemouse or placemouse depending on the floating state
    * of the selected client. Set up individual keybindings for the two if you want
    * to control these separately (i.e. to retain the feature to move a tiled window
    * into a floating position).
    */
    { ClkClientWin,         MODKEY,         Button1,        moveorplace,    {.i = 0} },
    { ClkClientWin,         MODKEY,         Button2,        togglefloating, {0} },
    { ClkClientWin,         MODKEY,         Button3,        resizemouse,    {0} },
    //{ ClkClientWin,         ControlMask,    Button1,        dragmfact,      {0} },
    //{ ClkClientWin,         ControlMask,    Button3,        dragcfact,      {0} },
    { ClkTagBar,            0,              Button1,        view,           {0} },
    { ClkTagBar,            0,              Button3,        toggleview,     {0} },
    { ClkTagBar,            MODKEY,         Button1,        tag,            {0} },
    { ClkTagBar,            MODKEY,         Button3,        toggletag,      {0} },
    { ClkTabBar,            0,              Button1,        focuswin,       {0} },
    { ClkTabBar,            0,              Button1,        focuswin,       {0} },
    { ClkTabPrev,           0,              Button1,        movestack,      { .i = -1 } },
    { ClkTabNext,           0,              Button1,        movestack,      { .i = +1 } },
    { ClkTabClose,          0,              Button1,        killclient,     {0} },
};

```

