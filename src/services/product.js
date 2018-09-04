import http from '@/services/http-client'
import store from '@/store'

function getList(){
    const filtros = store.getters['products/filters'];
    return http.get('products', { params: filtros })
        .then(res => Promise.resolve(res.data))
        .catch(e => Promise.reject(e))
}

export default { getList }