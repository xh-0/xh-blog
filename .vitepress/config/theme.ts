import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { algoliaSearchOptions } from './search/algolia-search';
import { localSearchOptions } from './search/local-search';

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  // 侧边栏配置
  sidebar : [
    {
      text: '火钳刘明',
      items: [
        { text: '首页', link: '/home' },
        { text: '关于介绍', link: '/about/about' }
      ]
    }
  ],
  logo: '/public/logo.png',
  outline: {
    level: 'deep', // 右侧大纲标题层级
    label: '目录', // 右侧大纲标题文本配置
  },
  // 移动端侧边栏配置
  darkModeSwitchLabel: '白天/暗黑模式切换',
  sidebarMenuLabel: '文章',
  returnToTopLabel: '返回顶部',
  
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  editLink: {
    pattern: 'https://github.com/xh-0/xh-blog/issues',
    text: '不妥之处 多多指教'
  },
  // 搜索配置（二选一）
  search: {
    // provider: 'algolia',
    // options: algoliaSearchOptions,
    // 本地离线搜索
    provider: 'local',
    options: localSearchOptions
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/xh-0' },
    { icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"></path></svg>'
    }, link: 'https://gitee.com/suxiaohu/xh-blog' }
  ],
  
  // 自定义扩展: 评论配置
  // commentConfig: {
  //   type: 'gitalk',
  //   showComment: true // 是否显示评论
  // },
  // 自定义扩展: 页脚配置
  // footerConfig: {
  //   showFooter: true, // 是否显示页脚
  //   icpRecordCode: '', // ICP备案号
  //   publicSecurityRecordCode: '', // 联网备案号
  //   copyright: `{new Date().getFullYear()}` // 版权信息
  // }
}