/**
 *mutations数据处理 
 */
import {
	SET_INDEX_BANNER,
	SET_WILL_BRING
} from './mutation-types.js'

export default {

	[SET_INDEX_BANNER](state, list) { //设置首页海报列表
		state.topBanners = list;
	},

	[SET_WILL_BRING](state, list) { //设置首页 每日必买
		state.willBring = list;
	}

}
