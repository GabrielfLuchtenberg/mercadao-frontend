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
            .then(r =>{
                http.get('user').then(r=>{
                    const user = r.data
                    commit('setUserMutation',user)
                    localStorage.setItem('user', JSON.stringify(user))
                })
                .catch(e=>console.log(e))
            })
            .catch(e => Promise.reject(e))
    },
    recentlyCreatedAction({commit},value){
        commit('recentlyCreatedMutation',value)
    },
    sendRegister({commit},{name,username,password,password_confirmation,birthdate}){
        const account = {name,'email':username,password,password_confirmation,birthdate}
        return http.post('register',account)
        .then(res=>{
            commit('recentlyCreatedMutation',true)
            Promise.resolve(res.data)
        })
        .catch(e => Promise.reject(e))
    },
    sendLogout ({ commit }) {
        http.post('logout')
            .then(() => {
                commit('setTokenMutation', undefined)
                commit('setUserMutation',undefined)
                localStorage.removeItem('access_token')
                localStorage.removeItem('user')
            })
    }
}