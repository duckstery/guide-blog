import {withMermaid} from "vitepress-plugin-mermaid"

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Composition API",
  description: "Guide for Vue 3 Composition API",
  outDir: '../docs',
  base: '/guide-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Trang chủ', link: '/'},
      // {text: 'Demo', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Khái niệm',
        items: [
          {
            text: 'Composition API',
            link: '/concept/composition/concept',
            items: [
              {
                text: 'Tái sử dụng (Reusability)',
                link: '/concept/composition/reuse'
              },
              {
                text: 'Tổ chức mã nguồn',
                link: '/concept/composition/organization'
              },
              {
                text: 'Typescript và chi phí',
                link: '/concept/composition/type-and-cost'
              },
            ]
          },
        ]
      },
      {
        text: 'Hướng dẫn',
        items: [
          {
            text: 'Cơ bản',
            link: '/guide/basic',
            items: [
              {
                text: `&lt;script setup&gt;`,
                link: '/guide/pure-composition-api'
              },
              {
                text: 'setup()',
                link: '/guide/hybrid-api'
              },
            ]
          },
          {
            text: 'Data',
            link: '/guide/data',
            items: [
              {
                text: 'ref()',
                link: '/guide/ref'
              },
              {
                text: 'reactive()',
                link: '/guide/reactive'
              },
              {
                text: 'Nâng cao',
                link: '/guide/data-advance'
              }
            ]
          },
          {
            text: 'Computed properties',
            link: '/guide/computed',
          },
          {
            text: 'Watchers',
            link: '/guide/watch',
          },
          {
            text: 'Methods',
            link: '/guide/method',
          },
          {
            text: 'Props',
            link: '/guide/props',
          },
          {
            text: 'Emit',
            link: '/guide/emit',
          },
          {
            text: '$attrs và $slots',
            link: '/guide/attrs-and-slots',
          },
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})
