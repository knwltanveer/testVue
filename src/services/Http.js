import Vue from "vue";
import VueResource from 'vue-resource'
import { API } from "@/environment";
import store from "@/store";
Vue.use(VueResource)

export const get = (url) => Vue.http.get(`${API}/${url}`)

export const put = (url , data) => Vue.http.put(`${API}/${url}`,data)

export const post = (url, data) => Vue.http.post(`${API}/${url}`,data)

export const del = (url) => Vue.http.del(`${API}/${url}`)


export const setToken = () => {
    Vue.http.interceptors.push(function (request){
        let token = store.state.user.token || ''

        request.headers.set('X-CSRF','TOKEN')
        request.headers.set('Authorization',`Bearer ${token}`)
    })
}