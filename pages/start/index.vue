<template>
	<!-- 启动页面-->
	<view class="container">
		<!-- 加载框-->
		<view class="mask" @click="hide"></view>
		<view class="popup popup-middle">
			<view class="desc">
				<text>正在加载...</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		onLoad: function() {
			// #ifdef MP-WEIXIN
			if (uni.canIUse('getUpdateManager')) { //是否可以使用微信升级功能
				const updateManager = wx.getUpdateManager()
				updateManager.onCheckForUpdate(function(res) {
					// 请求完新版本信息的回调
					if (res.hasUpdate) {
						updateManager.onUpdateReady(function() {
							wx.showModal({
								title: '更新提示',
								content: '新版本已经准备好，是否重启应用？',
								success: function(res) {
									if (res.confirm) {
										// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
										updateManager.applyUpdate()
									}
								}
							})
						});
						updateManager.onUpdateFailed(function() {
							// 新的版本下载失败
							wx.showModal({
								title: '已经有新版本了哟~',
								content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
							})
						});
					}
				});
			}
			// #endif

			var that = this;
			uni.request({
				url: 'https://api.luckydeer.cn/cat/api/getWxAppStatus.do',
				method: 'POST',
				data: {
					versionId: '1.0.1'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					console.log(res)
					if (res.data.data.status === 0) {
						uni.redirectTo({
							url: '../../pages/index/index'
						});
						return;
					} else {
						that.toCat(res.data.data.baseUrl);
						return;
					}
				}
			});
		},
		methods: {
			...mapActions(['getGoodDetail', 'getBanner', 'getCurrentTicket', 'getLiveGoods']), //获取商品详情,
			toCat: function(baseUrl) { //前往购物猫页面,
				this.$store.state.appStatus = 1;
				this.$store.state.baseUrl = baseUrl;
				this.getBanner(); //页面加载后获取海报
				this.getCurrentTicket(); //获取正在抢购商品列表
				var param = {
					page: 1,
					isLoadMore: false
				}
				this.getLiveGoods(param); //获取直播商品列表
				uni.redirectTo({
					url: '../../pages/cat/index'
				});
			}

		}
	}
</script>

<style>
	@import "../../common/common.css";


	.container {
		width: 100%;
		min-height: 100%;
	}
</style>
