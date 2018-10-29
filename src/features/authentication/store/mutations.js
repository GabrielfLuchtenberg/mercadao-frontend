export default {
    setTokenMutation(state, token) {
        state.token = token
    },
    recentlyCreatedMutation(state,value){
        state.recentlyCreated = value
    },
    setUserMutation(state,user){
        state.user = user
    }
}