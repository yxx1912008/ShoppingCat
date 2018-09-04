import {
	SET_INDEX_BANNER
} from './mutation-types.js'
import utils from '../common/util.js'

import ApiData from '../static/data/ApiData.json'//引入 api数据


export default {

	demo({ commit }, testName) {
		commit(testName);
	},

	setIndexBanner({ commit }, list) { //设置首页海报
		commit(SET_INDEX_BANNER, list)
	},

	getBanner({commit}) { //调用 后台接口
		uni.request({
			url:ApiData['base'].devUrl+ApiData.banner.url,
			method:'POST',
			success:function(res){
				console.log(res)
				commit(SET_INDEX_BANNER,res.data.data)
			}
			
			
			
		})
	}


}
