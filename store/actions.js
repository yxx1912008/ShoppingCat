import {
	SET_INDEX_BANNER,
	SET_WILL_BRING,
	SET_LIVE_GOODS
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

	getLiveGoods({
		commit
	}, page) { //获取领券直播商品列表
		console.log(`当前选择的页码是:` + page);
		uni.request({
			url: ApiData['base'].devUrl + ApiData.ticketLive.url,
			method: 'POST',
			data: {
				page: page
			},
			success: function (res) {
				console.log(res.data.data.data);
				commit(SET_LIVE_GOODS, res.data.data.data)
			}
		});
	}

}
