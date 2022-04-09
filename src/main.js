import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  store,
  vuetify,
  render: () => h(App)
})

app.mount('#app')
