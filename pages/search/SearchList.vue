<template name="LiveGoods">
	<!-- 直播商品列表-->
	<view v-if="isOpen" class="container">
		<block v-for="(item,index) in list" :key="index">
			<view class="good-detail" @tap="getGoodInfo(item.goodsid)">
				<view class="good-detail-left">
					<image :src="item.pic" lazy-load mode="aspectFit" class="good-pic" />
				</view>
				<view class="good-detail-right">
					<text class="good-title">{{item.d_title}}</text>
					<view class="good-before-price">
						<text>原价¥{{item.yuanjia}} </text>
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
		<view class="loadMore">{{list.length===0?'正在加载...':'已经到底了!'}}</view>
	</view>
	<view v-else>您输入的页面有误</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				currentPage: 1,
				list: []
			}
		},
		methods: {
			...mapActions(['getTbDeatil']),
			getGoodInfo: async function(goodsId) {
				this.getTbDeatil(goodsId);
				uni.navigateTo({
					url: "/pages/good/index?type=2",
				});
			}
		},
		computed: {
			...mapState(['searchGoodList']),
			isOpen() {
				if (this.$store.state.appStatus === 1) {
					return true;
				}
				return false;
			}
		},
		mounted() {
			this.list = this.$store.searchGoodList;
			if (this.$store.state.appStatus === 0) {
				uni.setNavigationBarTitle({
					title: '错误页面'
				});
			}
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
