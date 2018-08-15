export default {
    setToken({ commit }, credentials) {
        //chamada http
        //then
        // let response = { data: { token: '' } }
        // const token = response.data.access_token
        // localStorage.setItem('access_token', token)
        commit('setTokenMutation', credentials)
    }
}