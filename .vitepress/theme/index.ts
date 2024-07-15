import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import DemoBlock from '../components/DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('DemoBlock', DemoBlock)
  },
} satisfies Theme