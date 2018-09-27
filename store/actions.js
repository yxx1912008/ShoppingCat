import {
	SET_INDEX_BANNER,
	SET_WILL_BRING,
	SET_LIVE_GOODS,
	SET_GOOD_DETAIL,
	UPDATE_LIVE_GOODS,
	SET_GOOD_DESC
} from './mutation-types.js'

import ApiData from '../static/data/ApiData.json' //引入 api数据


export default {

	getBanner: async function({
			commit,
			state
		}) { //获取首页海报,
			uni.request({
				url: state.baseUrl + ApiData.banner.url,
				method: 'POST',
				success: function(res) {
					commit(SET_INDEX_BANNER, res.data.data)
				}
			});
		},


		getCurrentTicket: async function({
				commit,
				state
			}) { //获取大家都在抢的,
				uni.request({
					url: state.baseUrl + ApiData.currentTicket.url,
					method: 'POST',
					success: function(res) {
						commit(SET_WILL_BRING, res.data)
					}
				});
			},

			getLiveGoods: async function({
					commit,
					state
				}, param) { //获取直播商品列表,
					uni.request({
						url: state.baseUrl + ApiData.ticketLive.url,
						method: 'POST',
						data: {
							page: param.page
						},
						header: {
							'Content-Type': 'application\/x-www-form-urlencoded'
						},
						success: function(res) {
							if (param.isLoadMore) {
								commit(UPDATE_LIVE_GOODS, res.data.data.data)
							} else {
								commit(SET_LIVE_GOODS, res.data.data.data)
							}
						}
					});
				},

				getGoodDetail: async function({
						commit,
						state
					}, goodId) { //获取指定商品详情
						uni.request({
							url: state.baseUrl + ApiData.goodDetail.url,
							method: 'POST',
							data: {
								goodId: goodId
							},
							header: {
								'Content-Type': 'application\/x-www-form-urlencoded'
							},
							success: function(res) {
								commit(SET_GOOD_DETAIL, res.data)
								uni.request({
									url: state.baseUrl + ApiData.getGoodDescImg.url,
									method: 'POST',
									data: {
										realGoodId: res.data.goodsid
									},
									header: {
										'Content-Type': 'application\/x-www-form-urlencoded'
									},
									success: function(res) {
										commit(SET_GOOD_DESC, res.data.data.images);
									}
								})
							}
						});
					},

					getTbDeatil: async function({
						commit,
						state
					}, realGoodId) {
						uni.request({
							url: state.baseUrl + ApiData.getTbDeatil.url,
							method: 'POST',
							data: {
								realGoodId: realGoodId
							},
							header: {
								'Content-Type': 'application\/x-www-form-urlencoded'
							},
							success: function(res) {
								commit(SET_GOOD_DETAIL, res.data)
								uni.request({
									url: state.baseUrl + ApiData.getGoodDescImg.url,
									method: 'POST',
									data: {
										realGoodId: realGoodId
									},
									header: {
										'Content-Type': 'application\/x-www-form-urlencoded'
									},
									success: function(res) {
										commit(SET_GOOD_DESC, res.data.data.images);
									}
								})
							}
						});
					},
}
