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
	</view>
</template>

<script>
	import SearchBox from '../../components/index/SearchBox.vue'
	import TopScroll from '../../components/index/TopScroll.vue'
	import GoodTypeData from '../../static/data/GoodTypeData'
	import TopBanner from '../../components/index/TopBanner.vue'
	import ActiveList from '../../components/index/ActiveList.vue'
	import utils from '../../common/util.js'

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
			ActiveList
		},
		onReachBottom: function () { //列表到底
			console.log('列表到底部')
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
