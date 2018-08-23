import http from '@/services/http-client'

export default {
    sendLogin({ commit }, { username, password }) {
        const credentials = { username, password };

        http.post('http://mercadao.api/api/login', credentials)
            .then(response => {
                const token = response.data.access_token
                commit('setTokenMutation', token)
                localStorage.setItem('access_token', token)
            })
            .catch(e => console.log(e))

    }
}