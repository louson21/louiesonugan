import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import PrismicConfig from './prismic/prismic.config'
import linkResolver from './prismic/link-resolver'
import router from './router'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: PrismicConfig.apiEndpoint,
  linkResolver
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
