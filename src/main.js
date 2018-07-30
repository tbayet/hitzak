import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'

import Gallery from './components/Gallery'
import Bio from './components/Bio'
import Lyrics from './components/Lyrics'
import Dates from './components/Dates'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/dates', component: Dates },
  { path: '/bio', component: Bio },
  { path: '/lyrics', component: Lyrics },
  { path: '/gallery', component: Gallery },
  { path: '/', component: Dates },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
