<template>
	<!-- 首页-->
	<view class="content">
		<!-- 搜索框-->
		<SearchBox />
		<!-- 顶部滑动区域-->
		<!-- 本期暂时取消-->
		<TopScroll />
		<!-- banner-->
		<TopBanner :getGoodInfo="getGoodInfo" />
		<!-- 活动列表-->
		<ActiveList />
		<!-- 大家都在领 标题-->
		<IndexTitle title="大家都在领" rightTitle="实时领券" count="532,090次" />
		<!-- 大家都在领商品列表-->
		<CurrentGoods :getGoodInfo="getGoodInfo" />
		<!-- 领券直播标题-->
		<IndexTitle title="领券直播" middleTitle="今日已为用户省钱" count="34,051,337元" />
		<!-- 领券直播商品列表-->
		<LiveGoods :getGoodInfo="getGoodInfo" />

	</view>
</template>

<script>
	import SearchBox from '../../components/index/SearchBox.vue'
	import TopScroll from '../../components/index/TopScroll.vue'
	import TopBanner from '../../components/index/TopBanner.vue'
	import ActiveList from '../../components/index/ActiveList.vue'
	import CurrentGoods from '../../components/index/CurrentGoods.vue'
	import IndexTitle from '../../components/index/IndexTitle.vue'
	import LiveGoods from '../../components/goodList/LiveGoods.vue'

	import {
		mapActions
	} from 'vuex'

	export default {

		mounted: function () {
			this.getBanner(); //页面加载后获取海报
			this.getCurrentTicket(); //获取正在抢购商品列表
			var param = {
				page: 1,
				isLoadMore: false
			}
			this.getLiveGoods(param); //获取直播商品列表
		},
		components: {
			SearchBox,
			TopScroll,
			TopBanner,
			ActiveList,
			CurrentGoods,
			IndexTitle,
			LiveGoods
		},

		methods: {
			...mapActions(['getGoodDetail', 'getBanner', 'getCurrentTicket', 'getLiveGoods']), //获取商品详情,
			getGoodInfo: async function (goodId) { //获取商品详情,,
				this.getGoodDetail(goodId);
				this.$store.goodDetail = {};
				this.$store.goodMainPic = [];
				uni.navigateTo({
					url: "/pages/good/index",
				});
			}
		}
	}
</script>

<style>
	/* 容器*/

	.content {
		flex: 1;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: column;
	}
</style>
