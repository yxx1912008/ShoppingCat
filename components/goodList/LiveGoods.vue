<template name="LiveGoods">
	<!-- 领券直播商品列表-->
	<view class="container">
		<block v-for="(item,index) in liveGoods" :key="index">
			<view class="good-detail" @tap="getGoodInfo(item.id)">
				<view class="good-detail-left">
					<image :src="item.pic" mode="aspectFit" class="good-pic" />
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
		<view class="loadMore">{{loadingWord}}</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				loadingWord: '加载中...',
				currentPage: 1
			}
		},
		props: ['getGoodInfo'],
		computed: {
			...mapState(['liveGoods']),
		},
		methods: {
			...mapActions(['getLiveGoods']), //获取商品详情,
		},
		onReachBottom: function () { //列表到底
			console.log('列表下拉到底部')
			this.currentPage += 1;
			var param = {
				page: this.currentPage,
				isLoadMore: true
			}
			this.getLiveGoods(param);
		},
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

	.loadMore {
		font-size: 30px;
		line-height: 60px;
		width: 100%;
		height: 60px;
		color: #555;
		margin-bottom: 20px;
		justify-content: center;
	}
</style>
