import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chadwm-dotfile",
  description: "A chadwm configuration analysis website",
  themeConfig: {
    siteTitle: '',
    logo: '/dwm.png',
    // https://vitepress.dev/reference/default-theme-config


    sidebar: [
      {
        text: 'Chadwm',
        items: [
          { text: '预览', link: '/' },
          { text: '配置文件结构', link: '/api-examples' },
          { text: '自定义配置项', link: '/markdown-examples' },
          { text: '示例配置文件', link: '/examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
