export default {
    addProduct({ state, commit }, { product, quantity }) {
        let stateProduct = state.cartProducts[state.cartProducts.findIndex(p => p.id === product.id)]
        if (stateProduct) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('addProduct', { product, quantity })
        }
    },
    cleanCart({ commit }) {
        commit('cleanCart')
    },
    subProduct({ commit }, { product, quantity }) {
        if (quantity > 0) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('removeProduct', { product })
        }
    },
    removeProduct({ commit }, product) {
        commit('removeProduct', product)
    }
}