export default {
    isAuthenticated(state) {
        return !!state.token
    },
    accessToken(state){
        return state.token
    },
    wasRecentlyCreated(state){
        return state.recentlyCreated
    },
    user(state){
        return state.user
    }
}