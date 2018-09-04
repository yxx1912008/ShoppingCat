/**
 *mutations数据处理 
 */
import {
	SET_INDEX_BANNER
} from './mutation-types.js'

export default {

	[SET_INDEX_BANNER](state, list) { //设置首页海报列表
		state.topBanners = list;
	}
	
	
	
}
