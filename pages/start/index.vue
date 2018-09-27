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
