<template name="LiveGoods">
	<!-- 领券直播商品列表-->
	<scroll-view class="container" scroll-y="true">
		<block v-for="(item,index) in liveGoods" :key="index">
			<view class="good-detail">
				<view class="good-detail-left">
					<image :src="item.pic" lazy-load="true" mode="aspectFit" class="good-pic" />
				</view>
				<view class="good-detail-right">
					<text class="good-title">{{item.d_title}}</text>
					<view class="good-before-price">
						<text>{{item.istmall===1?'天猫价':'淘宝价'}}¥{{item.jiage}} </text>
						<text>已售{{item.xiaoliang}}件</text>
					</view>
					<view class="good-price">
						<text class="jiage">¥{{item.jiage}}</text>
						<view class="quan-jiage">
							<text class="quan-text">{{item.quan_jine}}元券</text>
						</view>
					</view>
				</view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		methods: {
			...mapActions(['getLiveGoods']),

		},
		computed: {
			...mapState(['liveGoods']),
		},
		mounted: function () {
			console.log('开始获取领券直播商品列表')
			this.getLiveGoods(1);
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: auto;
		flex-direction: column;
	}

	.good-detail {
		margin-top: 10px;
		width: 100%;
		height: 200px;
	}

	.good-detail-left {
		width: 200px;
		height: 200px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
		border-radius: 10px;
	}

	.good-pic {
		width: 180px;
		height: 180px;
		border-radius: 10px;
	}

	.good-detail-right {
		width: 100%;
		height: 200px;
		flex-direction: column;
	}

	.good-title {
		margin-left: 20px;
		margin-top: 20px;
		color: #333333;
		font-size: 27px;
		height: 80px;
		line-height: 40px;
	}

	.good-before-price {
		margin-left: 20px;
		width: 520px;
		justify-content: space-between;
		align-content: flex-start;
		align-items: flex-start;
		color: #AAAAAA;
		font-size: 24px;
		height: 30px;
	}

	.good-price {
		margin-left: 20px;
		width: 520px;
		justify-content: space-between;
		align-content: flex-start;
		align-items: flex-start;
		height: 50px;
	}

	.jiage {
		color: #FC4D52;
		font-weight: 500;
		font-size: 32px;
	}

	.quan-jiage {
		background: linear-gradient(to left, #FF5E5E 0, #FF927C 100%);
		position: relative;
		right: 10px;
		border-radius: 5px;
		padding: 3px;
	}


	.quan-text {
		color: #FFFFFF;
		font-size: 30px;
	}
</style>
