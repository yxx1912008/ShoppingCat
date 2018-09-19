import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$appName = '购物猫'
Vue.prototype.$store = store
Vue.prototype.$appStatus=0;

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
