export default {
    cartProducts (state) {
        return state.cartProducts
    },
    cartTotal (state) {

        return state.cartProducts.reduce((value, p) => {
            return parseFloat((value + (p.quantity * p.price)).toFixed(2))
        }, 0)
    },
    countProduct (state) {
        return state.cartProducts.reduce((value, p) => {
            return value + (p.quantity)
        }, 0)
    },
    productWithTotalValue (state) {
        return state.cartProducts.map(p => {
            p.totalValue = parseFloat((p.price * p.quantity).toFixed(2))
            return p
        })
    }
}