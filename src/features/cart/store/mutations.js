
export default {
    addProduct (state, { product, quantity }) {
        product.quantity = parseFloat(quantity)
        state.cartProducts.push(product)
    },
    cleanCart (state) {
        state.cartProducts = []
    },
    setQuantity (state, { product, quantity }) {
        let newProduct = { ...product, quantity: parseFloat(quantity) }
        let index = state.cartProducts.findIndex(p => p.id === product.id)
        state.cartProducts.splice(index, 1, newProduct)
    },
    removeProduct (state, product) {
        state.cartProducts.splice(state.cartProducts.findIndex(p => p.id === product.id), 1)
    },
}