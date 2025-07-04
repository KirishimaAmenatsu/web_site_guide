import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/icon/favicon.ico' }]],
  title: "雨夏酱的网址导航",
  description: "也许有很多东西哦",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Over View', link: '/overview' }
    ],
    footer: {
      message:'License Under <a href="https://creativecommons.org/licenses/by/3.0/cn/" target="_blank">CC BY 3.0 CN</a> <br> <a href="https://icp.gov.moe/?keyword=20251120" target="_blank">萌ICP备20251120号</a>',
      copyright:'Copyright ©  RainSummer'
    },

    sidebar: [
      {
        text: '网址导航',
        items: [
          { text: '雨夏自己的网站', link: '/rainsummer' },
          { text: 'ACGN相关', link: '/acgn' },
          { text: '友情链接', link: '/friendship' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RainSummerTse/web_site_guide' }
    ]
  }
})
