export default {
    cartProducts(state) {
        return state.cartProducts
    },
    cartTotal(state) {
        return state.cartProducts.reduce((value, p) => {
            return value + (p.quantity * p.price)
        }, 0)
    },
    countProduct(state) {
        return state.cartProducts.reduce((value, p) => {
            return value + (p.quantity)
        }, 0)
    },
    productWithTotalValue(state) {
        return state.cartProducts.map(p => {
            p.totalValue = p.price * p.quantity
            return p
        })
    }
}