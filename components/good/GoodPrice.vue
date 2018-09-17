<template name="GoodPrice">
	<!-- 商品详情 价格-->
	<view class="container">
		<!-- 标题-->
		<view class="title">
			<text class="istmall">{{goodDetail.istmall==='1'?"天猫":"淘宝"}}</text> {{goodDetail.d_title}}
		</view>
		<!-- 价格-->
		<view class="nowPrice">
			<!-- 券后价格-->
			<view class="priceByTicket">
				券后价 ¥
				<text class="jiage">{{goodDetail.jiage}}</text>
			</view>
			<view class="sellerCount">已售{{goodDetail.xiaoliang}}件</view>
		</view>
		<view class="before-price">
			<view class="">
				{{goodDetail.istmall==='1'?"天猫":"淘宝"}}价 ¥ {{goodDetail.yuanjia}}
			</view>
			<view class="send-type">
				<view class="good-kind">
					<image class="good-kind-before" src="../../static/img/icon/yes.png" mode="aspectFit" />
					<text>包邮</text>
				</view>
				<view v-show="goodDetail.yunfeixian==='1'" class="good-kind">
					<image class="good-kind-before" src="../../static/img/icon/yes.png" mode="aspectFit" />
					<text>运费险</text>
				</view>
			</view>
		</view>
		<!-- 优惠券信息-->
		<view class="quan-info">
			<view class="quan-info-time">
				<text class="quan-jiage-big">{{goodDetail.quan_jine}}元优惠券</text>
				<text class="quan-over">
					使用期限:
					<br> {{startTime}} - {{goodDetail.quan_time}}</text>
			</view>
			<view class="quan-info-get" @tap="copyGoodWord(goodDetail.kouling)">立即领券</view>
		</view>
		<!-- 商品简介-->
		<view class="quan-miaoshu">
			{{goodDetail.miaoshu}}
		</view>
		<!-- 分割条-->
		<view class="hr" />
		<!-- 店铺信息-->
		<view v-if="showShop" class="shop-info">
			<view class="shop-icon">
				<image :src="goodDetail.shopIcon" mode="aspectFit" class="shop-icon" />
			</view>
			<view class="shop-info-right">
				<view class="shop-title">{{goodDetail.shopName}}</view>
				<view class="shop-type-body">
					<image class="shop-type" :src="goodDetail.istmall==='1'?tmailPic:taobaoPic" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<!-- 分割条-->
		<view class="hr" />

	</view>

</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		props: ['copyGoodWord', 'showShop'],
		data() {
			return {
				tmailPic: '../../static/img/icon/tmall.png',
				taobaoPic: '../../static/img/icon/taobao.png'
			}
		},
		computed: {
			...mapState(['goodDetail']),
			...mapGetters(['startTime']),
		},
		onLoad() {
			console.log(this.showShop)
		}
	}
</script>

<style scoped>
	.container {
		margin-top: 5px;
		width: 100%;
		height: 760px;
		background-color: #fff;
	}

	.title {
		width: 100%;
		height: 70px;
		font-size: 25px;
	}
	/* 是否是天猫的标识*/

	.istmall {
		height: 38px;
		width: 60px;
		border: 1px solid #FC3F78;
		font-size: 28px;
		color: #FC3F78;
		margin-left: 10px;
		line-height: 38px;
		margin-top: 5px;
	}

	.nowPrice {
		height: 60px;
		width: 100%;
		justify-content: space-between;
	}

	.priceByTicket {
		height: 60px;
		margin-left: 10px;
		color: #FC4D52;
		font-size: 25px;
		width: 200px;
		line-height: 60px;
	}

	.jiage {
		font-size: 35px;
		font-weight: 500;
	}

	.sellerCount {
		color: #666666;
		font-size: 25px;
		height: 60px;
		width: 200px;
		line-height: 60px;
	}

	.before-price {
		height: 60px;
		width: 100%;
		justify-content: space-between;
		font-size: 25px;
		line-height: 60px;
		margin-left: 10px;
	}

	.send-type {
		height: 55px;
		width: 220px;
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 25px;
		line-height: 55px;
	}

	.good-kind-before {
		width: 25px;
		height: 55px;
	}

	.good-kind {
		margin-left: 5px;
	}

	.quan-info {
		width: 100%;
		height: 200px;
		background: no-repeat url(http://cmsstatic.dataoke.com//wap_new/main/images/goods_quan.png?v=201809131031);
		background-size: 100% 200px;
		color: #fff;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.quan-jiage-big {
		font-size: 30px;
		font-weight: 600;
	}

	.quan-info-time {
		width: 60%;
		height: 200px;
		border-right: #F8F8F8 5px dashed;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.quan-over {
		font-size: 21px;
		text-align: center;
	}

	.quan-info-get {
		width: 40%;
		height: 200px;
		line-height: 200px;
		justify-content: center;
	}

	.quan-miaoshu {
		color: #888;
		font-size: 27px;
		padding: 10px;
	}

	.hr {
		width: 100%;
		height: 14px;
		background-color: #f9f9f9;
	}

	.shop-info {
		height: 200px;
		width: 100%;
		align-items: center;
		padding-left: 20px;
	}

	.shop-icon {
		width: 160px;
		height: 160px;
		border-radius: 15px;
	}

	.shop-info-right {
		height: 160px;
		width: 100%;
		margin-left: 20px;
		flex-direction: column;
	}

	.shop-title {
		height: 60px;
		width: 100%;
	}

	.shop-type {
		height: 100px;
		width: 100px;
	}
</style>
