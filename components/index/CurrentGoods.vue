<template name="CurrentGoods">
	<!-- 大家正在买 商品列表-->
	<view class="container">
		<scroll-view scroll-x :scroll-left="scrollLeft">
			<block v-for="goodInfo in  willBring" v-bind:key="goodInfo.cat">
				<view class="good-info" :id="goodInfo.id" :data-current="goodInfo.id" @tap="swichCurrentGood(goodInfo.id,goodInfo.status)">
					<view class="good-img-body">
						<view v-show="!goodInfo.status" class="finished">已抢光</view>
						<image class="good-img" lazy-load :src="goodInfo.pic" mode="aspectFit" lazy-load></image>
					</view>
					<view class="ticketCount">
						{{goodInfo.quan_over}}人已领|{{goodInfo.quan_jine}}元券
					</view>
					<view class="good-title">
						{{goodInfo.d_title}}
					</view>

					<view class="good-price">
						<text class="new-price">¥{{goodInfo.nowPrice}}</text>
						<text class="old-price">¥{{(goodInfo.yuanjia)}}</text>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		props: ['getGoodInfo'],
		methods: {
			swichCurrentGood: async function (goodId, goodStatus) { //选择商品类型(异步方法),
				if (!goodStatus) {
					uni.showToast({
						title: '活动已结束',
						icon: 'none',
						duration: 2000,
					});
					return;
				}
				this.getGoodInfo(goodId);
			}
		},
		computed: {
			...mapState(['willBring']),
		}
	}
</script>

<style scoped>
	/* 顶部滑动区域*/

	.container {
		margin-top: 20px;
		width: 100%;
		height: 330px;
		overflow: hidden;
		white-space: nowrap;
		color: #777777;
		padding-top: 10px;
		flex-direction: row;
	}
	/* 商品类型*/

	.good-info {
		width: 220px;
		height: 300px;
		display: inline-flex;
		flex-direction: column;
		margin-left: 20px;
		border-radius: 30px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		background-color: #F8F8F8;
		align-items: center;
	}

	.good-img-body,
	.good-img,
	.finished {
		width: 200px;
		height: 200px;
		border-radius: 30px;
	}

	.finished {
		position: absolute;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, .4);
		color: #fff;
	}


	.ticketCount {
		margin-top: -30px;
		font-size: 20px;
		width: 210px;
		height: 40px;
		background-color: #FF5BA6;
		display: inline-flex;
		justify-content: center;
		border-radius: 30px;
		align-items: center;
		color: #F8F8F8;
		z-index: 10;
	}

	.good-title {
		width: 180px;
		height: 35px;
		font-size: 23px;
		display: inline-block;
		line-height: 35px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #333;
	}

	.good-price {
		width: 100%;
		height: 50px;
	}

	.new-price {
		margin-left: 20px;
		color: #FC4D52;
		font-size: 30px;
	}

	.old-price {
		margin-left: 10px;
		font-size: 25px;
		line-height: 50px;
		text-decoration: line-through;
	}
</style>
