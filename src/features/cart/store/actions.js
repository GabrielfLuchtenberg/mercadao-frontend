const setCart = (products) => localStorage.setItem('cartProducts', JSON.stringify(products))

export default {
    addProductAction ({ state, commit }, { product, quantity }) {
        let stateProduct = state.cartProducts[state.cartProducts.findIndex(p => p.id === product.id)]
        if (stateProduct) {

            commit('setQuantity', { product, quantity: stateProduct.quantity + parseFloat(quantity) })
        } else {
            commit('addProduct', { product, quantity })
        }
        setCart(state.cartProducts)
    },
    cleanCartAction ({ commit }) {
        commit('cleanCart')
        localStorage.removeItem('cartProducts')
    },
    subProductAction ({ state, commit }, { product, quantity }) {

        if (quantity > 0) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('removeProduct', product)
        }
        setCart(state.cartProducts)
    },
    setProductQuantityAction ({ state, commit }, { product, quantity }) {

        if (quantity > 0) {
            commit('setQuantity', { product, quantity })
        } else {
            commit('removeProduct', product)
        }
        setCart(state.cartProducts)
    },
    removeProductAction ({ state, commit }, product) {
        commit('removeProduct', product)
        setCart(state.cartProducts)
    }
}