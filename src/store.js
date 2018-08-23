import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './features/authentication/store/index'
import http from './plugins/http'
Vue.use(Vuex)
Vue.use(http)
const modules = {
  authentication
}

export default new Vuex.Store({
  modules
})
