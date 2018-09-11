
export default {
    addProduct(state, { product, quantity }) {
        product.quantity = quantity
        state.cartProducts.push(product)
    },
    cleanCart(state) {
        state.cartProducts = []
    },
    setQuantity(state, { product, quantity }) {
        state.cartProducts[state.cartProducts.findIndex(p => p.id === product.id)].quantity = quantity
    },
    removeProduct(state, product) {
        state.cartProducts.splice(state.cartProducts.findIndex(p => p.id === product.id), 1)
    },
}