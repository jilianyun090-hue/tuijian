import { defineClientConfig } from 'vuepress/client'
import UmamiStats from './components/UmamiStats.vue'
import SchemaOrg from './components/SchemaOrg.vue'
import NewbieGuide from './components/NewbieGuide.vue'
import NewbieFloatButton from './components/NewbieFloatButton.vue'
import FAQSearch from './components/FAQSearch.vue'
import AirportComparison from './components/AirportComparison.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('UmamiStats', UmamiStats)
    app.component('SchemaOrg', SchemaOrg)
    app.component('NewbieGuide', NewbieGuide)
    app.component('NewbieFloatButton', NewbieFloatButton)
    app.component('FAQSearch', FAQSearch)
    app.component('AirportComparison', AirportComparison)
  }
})
