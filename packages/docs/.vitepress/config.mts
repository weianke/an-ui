import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "An-UI 组件库",
  description: "基于Vue3 高仿 element-ui 组件库",
  base: '/an-ui/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weianke/an-ui' }
    ]
  }
})
