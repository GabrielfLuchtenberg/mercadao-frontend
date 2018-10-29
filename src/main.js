import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import http from './plugins/http'
import './assets/scss/style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingCart, faTrashAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTheMask from 'vue-the-mask'

library.add(faCoffee, faShoppingCart, faTrashAlt, faRedoAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(http)
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
