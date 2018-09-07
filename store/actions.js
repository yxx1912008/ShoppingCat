import {
	SET_INDEX_BANNER,
	SET_WILL_BRING
} from './mutation-types.js'
import utils from '../common/util.js'

import ApiData from '../static/data/ApiData.json' //引入 api数据


export default {

	demo({
		commit
	}, testName) {
		commit(testName);
	},

	setIndexBanner({
		commit
	}, list) { //设置首页海报
		commit(SET_INDEX_BANNER, list)
	},

	getBanner({
		commit
	}) { //调用 后台接口
		uni.request({
			url: ApiData['base'].devUrl + ApiData.banner.url,
			method: 'POST',
			success: function (res) {
				console.log(res)
				commit(SET_INDEX_BANNER, res.data.data)
			}
		});
	},

	getCurrentTicket({
		commit
	}) { //获取大家都在抢的购物券

		uni.request({
			url: ApiData['base'].devUrl + ApiData.currentTicket.url,
			method: 'POST',
			success: function (res) {
				console.log(res.data[2].data.config.list)
				commit(SET_WILL_BRING, res.data[2].data.config.list)
			}
		})


	},



}
