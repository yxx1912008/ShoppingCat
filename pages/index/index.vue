<template>
	<!-- 首页-->
	<view class="content">
		<!-- 搜索框-->
		<view class="search-box">
			<view class="search-box-main">
				<image class="search-icon" src="../../static/img/icon/search_icon.png" mode="aspectFit"></image>
				<input class="search-button" placeholder="输入关键词或粘贴淘宝商品标题" @tap="searchGood" />
			</view>
		</view>
		<!-- 顶部滑动区域 -->
		<view class="top-scroll">
			<scroll-view id="goodType" scroll-x :scroll-left="scrollLeft">
				<block v-for="(goodTab,index) in  goodTyps" v-bind:key="goodTab.cat">
					<view :class="['good-tab',currentTab==index?'beChoose':'']" :id="goodTab.id" :data-current="index" @tap="swichNav">
						{{goodTab.name}}
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import GoodType from '../../static/data/GoodTypeData'
	export default {
		data: {
			goodTyps: [], //商品类目列表
			scrollLeft: 0, //滚动条的位置
			currentTab: 0, //当前被选中的商品条目
		},
		methods: {
			swichNav: async function (e) { //选择商品类型(异步方法)
				console.log(e);
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
			},

			searchGood: function () { //点击搜索按钮事件
				console.log('搜索按钮被点击');
			}
		},
		mounted: function () {
			console.log(`首页商品分类加载成功`)
			this.goodTyps = GoodType //加载首页商品分类
		}
	}
</script>

<style>
	.content {
		flex: 1;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: column;
	}
	/*搜索框*/

	.search-box {
		width: 100%;
		height: 60px;
		text-align: center;
		justify-content: center;
		background: #FF5BA6;
		color: #666;
	}
	/* 搜索框主体*/

	.search-box-main {
		background-color: #FFFFFF;
		width: 80%;
		height: 50px;
		border-radius: 10px;
		align-items: center;
		padding: 2px;
	}
	/* 搜索框图标*/

	.search-icon {
		width: 40px;
		height: 40px;
	}
	/* 搜索按钮*/

	.search-button {
		width: 90%;
	}
	/* 顶部滑动区域*/

	.top-scroll {
		width: 100%;
		height: 70px;
		border: solid thin red;
		overflow: hidden;
		white-space: nowrap;
		align-items: center;
		color: #777777;
	}
	/* 商品类型*/

	.good-tab {
		display: inline-flex;
		margin-left: 30px;
		justify-content: center;
	}
	/* 商品分类被选中*/

	.beChoose {
		color: #FF0000;
		border-bottom: 5px solid #FF0000;
	}
</style>
