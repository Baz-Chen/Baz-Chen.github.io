import { defineConfig } from 'vitepress'

// 右上方导航栏
const nav = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '框架',
    items: [
      { text: 'Vue', link: '/docs/vue/index' },
      { text: 'React', link: '/doce/react/index' }
    ]
  },
  {
    text: '关于我',
    link: '/docs/about'
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "生活明朗，人间值得！",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/avatar.png',
    nav: nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Baz-Chen/Baz-Chen.github.io' }
    ],
    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: 'Utils', link: '/markdown/javascript/utils' },
        ]
      },
      {
        text: 'Vue',
        link: '/markdown/vue/index'
      },
      {
        text: 'React',
        link: '/markdown/react/index'
      }
    ],
    outline: {
      level: [2, 6], // h2-h6级
      label: '目录'
    },
  }
})
