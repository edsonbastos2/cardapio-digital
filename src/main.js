import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import '@/assets/css/global.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import router from './router'
import 'es6-promise/auto'
import {store} from './store/store'
Vue.use(Vuex)

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
