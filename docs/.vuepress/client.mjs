import { defineClientConfig } from 'vuepress/client'
import UmamiStats from './components/UmamiStats.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('UmamiStats', UmamiStats)
  }
})
