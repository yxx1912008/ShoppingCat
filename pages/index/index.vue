<template>
	<!-- 首页-->
	<view class="content">
		<!-- 搜索框-->
		<SearchBox />
		<!-- 顶部滑动区域 -->
		<TopScroll :goodTyps="goodTyps" />
		<!-- banner-->
		<TopBanner />
		<!-- 活动列表-->
		<ActiveList />
		<!-- 大家都在领 标题-->
		<IndexTitle title="大家都在领" rightTitle="实时领券" count="532,090次" />
		<!-- 大家都在领商品列表-->
		<CurrentGoods />
		<!-- 领券直播标题-->
		<IndexTitle title="领券直播" middleTitle="今日已为用户省钱" count="34,051,337元" />
		<!-- 领券直播商品列表-->
		<LiveGoods />

	</view>
</template>

<script>
	import SearchBox from '../../components/index/SearchBox.vue'
	import TopScroll from '../../components/index/TopScroll.vue'
	import GoodTypeData from '../../static/data/GoodTypeData'
	import TopBanner from '../../components/index/TopBanner.vue'
	import ActiveList from '../../components/index/ActiveList.vue'
	import CurrentGoods from '../../components/index/CurrentGoods.vue'
	import IndexTitle from '../../components/index/IndexTitle.vue'
	import LiveGoods from '../../components/goodList/LiveGoods.vue'


	export default {
		data: {
			goodTyps: [], //商品类目列表
		},
		mounted: function () {
			console.log(`首页商品分类数据加载成功`)
			this.goodTyps = GoodTypeData //加载首页商品分类
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
		onReachBottom: function () { //列表到底
			console.log('列表下拉到底部')
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
