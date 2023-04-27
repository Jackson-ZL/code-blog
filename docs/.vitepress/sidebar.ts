/**
 * 日期: 2022/9/2
 * 路径: docs/.vitepress
 * 文件名: sidebar.ts
 * 组织名称:
 * 项目名称: code-blog
 */
import { DefaultTheme } from 'vitepress';

const iOSSidebar = [
  {
    text: '概述',
    items: [
      {
        text: '介绍', link: '/ios/'
      }
    ]
  },
  {
    text: 'Swift',
    items: [
      {
        text: '序言', link: '/ios/swift/'
      }
    ]
  },
  {
    text: 'Swift UI',
    items: [
      {
        text: '序言', link: '/ios/swift-ui/'
      }
    ]
  }
]
const androidSidebar = [
  {
    text: '概述',
    items: [
      {
        text: '介绍', link: '/android/'
      }
    ]
  },
  {
    text: 'Kotlin',
    items: [
      {
        text: '序言', link: '/android/kotlin/'
      }
    ]
  },
  {
    text: 'Jetpack Compose',
    items: [
      {
        text: '序言', link: '/android/jetpack-compose/'
      }
    ]
  }
]
const webSidebar = [
  {
    text: '概述',
    items: [
      {
        text: '介绍', link: '/web/'
      }
    ]
  },
  {
    text: 'HTML',
    items: [
      {
        text: '序言', link: '/web/html/'
      }
    ]
  },
  {
    text: 'CSS',
    items: [
      {
        text: '序言', link: '/web/css/'
      }
    ]
  },
  {
    text: 'Javascript',
    items: [
      {
        text: '序言', link: '/web/js/'
      }
    ]
  },
  {
    text: 'Vue',
    items: [
      {
        text: '序言', link: '/web/vue/'
      }
    ]
  }
]
const flutterSidebar = [
  {
    text: '概述',
    items: [
      {
        text: '介绍', link: '/flutter/'
      }
    ]
  },
  {
    text: 'Dart',
    items: [
      { text: '序言', link: '/flutter/dart/' }
    ]
  },
  {
    text: '组件',
    items: [
      { text: 'Button', link: '/flutter/components/button' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/ios/': iOSSidebar,
  '/android/': androidSidebar,
  '/web/': webSidebar,
  '/flutter/': flutterSidebar,
}

export default sidebar;
