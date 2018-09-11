export default {
    cartTotal(state) {
        return state.cartProducts.reduce(p => p.value * p.quantity, 0)
    },
    countProduct(state) {
        return state.cartProducts.reduce(p => p.quantity, 0)
    },
    productWithTotalValue(state) {
        return state.cartProducts.map(p => p.totalValue = p.value * p.quantity)
    }
}