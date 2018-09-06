<template name="CurrentTicket">
	<!-- 大家都在领-->
	<view class="container">
		<view class="current-top">
			<view class="current-title">
				大家都在领
			</view>
			<view class="current-count">
				<text class="current-count-font">909,259次</text>实时领券
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
	import ApiData from '../../static/data/ApiData.json' //引入 api数据
	export default {
		data() {
			return {
				currentTickets: [], //大家都在抢的优惠券列表
			}
		},
		methods: {
			getCurrentTickets: function () { //获取大家都在抢的优惠券列表
				console.log('获取大家都在抢商品列表')
				uni.request({
					url: ApiData['base'].devUrl + ApiData.currentTicket.url,
					method: 'POST',
					success: function (res) {
						console.log(res)
					}
				})

			},
		},
		mounted: function () {
			this.getCurrentTickets();
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 500px;
	}

	.current-top {
		/* border: #FC4D52 thin solid; */
		height: 40px;
		width: 100%;
		line-height: 40px;
		flex-direction: row;
		justify-content: space-between;
	}

	.current-title {
		border-left: 5px solid #FC4D52;
		padding-left: 10px;
		font-size: 26px;
		margin-left: 20px;
	}

	.current-count {
		color: #aaa;
		font-size: 23px;
	}

	.current-count-font {
		font-size: 30px;
		color: #FC4D52;
	}
</style>
