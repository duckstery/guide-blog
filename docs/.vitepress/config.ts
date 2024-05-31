import {withMermaid} from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Composition API",
  description: "Guide for Vue 3 Composition API",
  outDir: '../docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Trang chủ', link: '/'},
      {text: 'Demo', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Khái niệm',
        items: [
          {
            text: 'Composition API',
            link: '/concept/composition',
            items: [
              {
                text: 'Tái sử dụng (Reusability)',
                link: '/concept/composition/reuse'
              },
              {
                text: 'Tổ chức mã nguồn',
                link: '/concept/composition/organization'
              },
            ]
          },
        ]
      },
      {
        text: 'Cú pháp',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})
