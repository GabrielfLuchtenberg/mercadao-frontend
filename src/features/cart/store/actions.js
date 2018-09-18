export default {
    addProductAction({ state, commit }, { product, quantity }) {
        let stateProduct = state.cartProducts[state.cartProducts.findIndex(p => p.id === product.id)]
        if (stateProduct) {

            commit('setQuantity', { product, quantity: stateProduct.quantity + parseFloat(quantity) })
        } else {
            commit('addProduct', { product, quantity })
        }
    },
    cleanCartAction({ commit }) {
        commit('cleanCart')
    },
    subProductAction({ commit }, { product, quantity }) {

        if (quantity > 0) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('removeProduct', product)
        }
    },
    setProductQuantityAction({ commit }, { product, quantity }) {

        if (quantity > 0) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('removeProduct', product)
        }
    },
    removeProductAction({ commit }, product) {
        commit('removeProduct', product)
    }
}