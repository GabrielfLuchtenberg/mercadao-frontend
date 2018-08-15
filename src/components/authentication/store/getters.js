export default {
    isAuthenticated(state) {
        return !!state.token
    },
    accessToken(state){
        return state.token
    }
}