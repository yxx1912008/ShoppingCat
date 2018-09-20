import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$appName = '购物猫'
Vue.prototype.$Tb = '淘宝'
Vue.prototype.$tmall = '天猫'
Vue.prototype.$appStatus = 0;
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
