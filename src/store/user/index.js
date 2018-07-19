import { _login } from "../../services/Auth";
import { setToken } from "@/services/Http";
import { TOKEN } from "./types";
const state = {
    name:'kanwal',
    token:'',
}
const mutations = {
    ['logout'](state){
        // state.name = payload.name
        state.token = null
    }, 
    
    [TOKEN](state,payload){
        state.token = payload.token
    },
    
}
const actions = {
    doLogout({commit}){
        commit('logout')
    },
    doLogin({commit},data) {
        return new Promise((resolve, reject)=> {
            _login(data).then(response => {
                commit(TOKEN, response.body)

            }, err => reject(err))
        })
    },
    setToken(){
        setToken()
    }
}
export default {
    state,
    mutations,
    actions
}