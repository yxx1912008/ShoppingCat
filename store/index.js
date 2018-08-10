/*
Vuex管理中心
*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from '/store/state.js'
import getters from '/store/getters.js'
import mutations from '/store/mutations.js'
import actions from '/store/actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions,
})

export default store
