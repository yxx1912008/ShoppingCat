<template name="CurrentGoods">
	<!-- 大家正在买 商品列表-->
	<view class="container">
		<scroll-view scroll-x :scroll-left="scrollLeft">
			<block v-for="(goodInfo,index) in  willBring" v-bind:key="goodInfo.cat">
				<view class="good-info" :id="goodInfo.id" :data-current="index" @tap="swichCurrentGood">
					<view class="good-img-body">
						<image class="good-img" :src="goodInfo.pic" mode="aspectFit"></image>
					</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	import ApiData from '../../static/data/ApiData.json' //引入 api数据
	export default {
		data() {
			return {
				currentTickets: [], //大家都在抢的优惠券列表
				scrollLeft: 0, //滚动条的位置
				currentTab: 0, //当前被选中的商品条目
			}
		},
		methods: {
			...mapActions(['getCurrentTicket']),
			swichCurrentGood: async function (e) { //选择商品类型(异步方法)
				if (this.currentTab == e.target.dataset.current) { //如果选择的是自己，没有变化
					return false;
				}
				let tabInfo = await this.getWidth('goodType'),
					tabBarScrollLeft = tabInfo.scrollLeft; //点击的时候记录并且设置scrollLeft
				this.scrollLeft = tabBarScrollLeft;
				console.log(this.scrollLeft)
				this.currentTab = e.target.dataset.current
			},
			getWidth: function (id) { //获得所选择的元素的宽高,异步方法
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						console.log(data)
						res(data);
					}).exec();
				});
			}
		},
		mounted: function () {
			this.getCurrentTicket();
		},
		computed: {
			...mapState(['willBring'])
		}
	}
</script>

<style scoped>
	/* 顶部滑动区域*/

	.container {
		border: #333333 solid thin;
		margin-top: 20px;
		width: 100%;
		height: 330px;
		overflow: hidden;
		white-space: nowrap;
		color: #777777;
	}
	/* 商品类型*/

	.good-info {
		border: #333333 solid thin;
		width: 220px;
		height: 300px;
		display: inline-flex;
		margin-left: 20px;
		border-radius: 30px;
	}

	.good-img-body {
		width: 220px;
		height: 220px;
		border: #A992FF solid thin;
		border-radius: 30px;
		margin-top: 0;
	}

	.good-img {
		width: 100px;
		height: 100px;
	}
</style>
