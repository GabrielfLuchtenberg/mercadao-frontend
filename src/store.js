import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './features/authentication/store/index'
import products from '@/features/product/store/index'

Vue.use(Vuex)
const modules = {
  authentication, products
}

export default new Vuex.Store({
  modules
})
