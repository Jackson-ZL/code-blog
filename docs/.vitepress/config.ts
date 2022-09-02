import {defineConfig} from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  base: '/code-blog/',
  title: 'Bug博客',
  description: '蔡子良的博客文档',
  lang: 'zh-CN',
  head: [
    ['link', {rel: 'icon', type: 'image/svg+xml', href: 'logo.svg'}]
  ],
  themeConfig: {
    logo: 'logo.svg',
    nav,
    sidebar,
    outlineTitle: '目录'
  }
})
