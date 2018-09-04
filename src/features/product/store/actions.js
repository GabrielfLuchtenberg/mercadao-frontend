import product from '@/services/product'

export default {
    getProductsAction({ commit }) {
        product.getList()
        .then(res => commit('setProducts',res))
        .catch(e =>console.log(e))
    },
    setFilterAction({ commit }, filter) {
        commit('setFilterMutation', filter);
    }
}