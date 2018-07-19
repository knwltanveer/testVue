import Vuex, {Store} from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import user from './user'
Vue.use(Vuex)

const store = new Store({
    modules: {
        user
    },
    plugins:[createPersistedState({
        paths:['user']
    })]
})
export default store