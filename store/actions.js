import {
	SET_INDEX_BANNER,
	SET_WILL_BRING,
	SET_LIVE_GOODS,
	SET_GOOD_DETAIL
} from './mutation-types.js'
import utils from '../common/util.js'

import ApiData from '../static/data/ApiData.json' //引入 api数据


export default {

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
				console.log(res)
				commit(SET_WILL_BRING, res.data)
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
			header: {
				'Content-Type': 'application\/x-www-form-urlencoded'
			},
			success: function (res) {
				commit(SET_LIVE_GOODS, res.data.data.data)
			}
		});
	},

	getGoodDetail({
		commit
	}, goodId) { //获取指定商品详情
		console.log(`正在获取Id为:` + goodId + `详情`)

		uni.request({
			url: ApiData['base'].devUrl + ApiData.goodDetail.url,
			method: 'POST',
			data: {
				goodId: goodId
			},
			header: {
				'Content-Type': 'application\/x-www-form-urlencoded'
			},
			success: function (res) {
				console.log(res)
				commit(SET_GOOD_DETAIL, res.data)
			}
		})

	}

}
