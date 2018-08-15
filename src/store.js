import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './components/authentication/store/index'
Vue.use(Vuex)

const modules = {
  authentication
}

export default new Vuex.Store({
  modules
})
