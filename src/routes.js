import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import Vue from 'vue' 

Vue.use(Router)

const router = new Router({
    mode : 'history',
    routes: [
        {
            name:'home',
            path:'/home',
            component:HelloWorld,
        },
        {
            path: '*',
            component:NotFound
        },
        {
            name:'login',
            path:'/login',
            component:Login
        }
    ],

})
export default router