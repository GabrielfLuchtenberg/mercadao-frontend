import http from '../services/http-client'

export default {
  install: function(Vue, name= '$http') {
    Object.defineProperty(Vue.prototype, name, { value: http });
  }
}