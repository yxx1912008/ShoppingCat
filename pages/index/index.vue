<template>
	<!-- 首页-->
	<view class="content">
		<!-- 搜索框-->
		<view class="search-box">
			<view class="search-box-main">
				<image class="search-icon" src="../../static/img/icon/search_icon.png" mode="aspectFit"></image>
				<input class="search-button" placeholder="输入关键词或粘贴淘宝商品标题" @click="test" />
			</view>
		</view>
		<!-- 顶部滑动区域 -->
		<view class="top-scroll">
			<scroll-view id="goodType" scroll-x>
				<block v-for="(goodTab,index) in  goodTyps" v-bind:key="index">
					<view class="good-tab" :id="goodTab.cat">
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
			goodTyps: []
		},
		methods: {


			test: function (even) {
				console.log(even)
			}
		},
		mounted: function () {
			console.log(GoodType)
			this.goodTyps = GoodType
			console.log(this.goodTyps)
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
	}
	/* 商品类型*/

	.good-tab {
		display: inline-flex;
		margin-left: 30px;
		justify-content: center;
	}
</style>
