import http from '@/services/http-client'

export default {
    sendLogin ({ commit }, { username, password }) {
        const credentials = { username, password };
        return http.post('login', credentials)
            .then(response => {
                const token = response.data.access_token
                commit('setTokenMutation', token)
                localStorage.setItem('access_token', token)
                Promise.resolve(token)
            })
            .catch(e => Promise.reject(e))
    },
    sendLogout ({ commit }) {
        http.post('logout')
            .then(() => {
                commit('setTokenMutation', undefined)
                localStorage.removeItem('access_token')
            })
    }
}