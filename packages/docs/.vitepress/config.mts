import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "An-UI 组件库",
  description: "基于Vue3 高仿 element-ui 组件库",
  base: '/an-ui/',
   appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  nav: [
      { text: "开始使用", link: "/get-started" },
      { text: "组件", link: "/components/button" },
    ],

    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weianke/an-ui' }
    ]
  }
})
