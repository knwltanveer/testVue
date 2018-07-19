import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import {translate} from './common/filter'
import store from './store'


Vue.filter('translate',translate)

Vue.use(router)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
