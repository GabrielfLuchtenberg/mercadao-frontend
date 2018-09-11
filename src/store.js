import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './features/authentication/store/index'
import products from '@/features/product/store/index'
import cart from '@/features/cart/store/index'
Vue.use(Vuex)
const modules = {
  authentication, products, cart
}

export default new Vuex.Store({
  modules
})
