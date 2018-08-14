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

		<!-- 主体内容 -->
		<view class="index-content">

			我是主题内容

		</view>




	</view>
</template>

<script>
	export default {
		data: {

		},
		methods: {


			test: function (even) {
				console.log(even)
			}
		},
	}
</script>

<style>
	.content {
		flex: 1;
		width: 100%;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	/*搜索框*/

	.search-box {
		width: 100%;
		height: 60px;
		text-align: center;
		align-self: flex-start;
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

	.index-content {
		width: 100%;
		height: 50px;
		border: solid thin red;
	}
</style>
