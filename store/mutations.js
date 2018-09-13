/**
 *mutations数据处理 
 */
import {
	SET_INDEX_BANNER,
	SET_WILL_BRING,
	SET_LIVE_GOODS,
	SET_GOOD_DETAIL
} from './mutation-types.js'

export default {

	[SET_INDEX_BANNER](state, list) { //设置首页海报列表
		state.topBanners = list;
	},

	[SET_WILL_BRING](state, list) { //设置首页 每日必买
		state.willBring = list;
	},

	[SET_LIVE_GOODS](state, list) { //设置首页 领券直播商品列表
		state.liveGoods = list;
	},
	[SET_GOOD_DETAIL](state, list) { //设置商品详情信息
		state.goodDetail = list
	}

}
