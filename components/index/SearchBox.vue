<template name="SearchBox">
	<!-- 首页顶部搜索框-->
	<view class="search-box">
		<view class="search-box-main">
			<image class="search-icon" src="../../static/img/icon/search_icon.png" mode="aspectFit"></image>
			<input class="search-button" placeholder="输入关键词或粘贴商品标题" @tap="searchGood" />
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			searchGood: async function(param) { //顶部商品搜索框点击事件
				uni.navigateTo({
					url: '../../pages/search/index',
				})
			}
		}


	}
</script>

<style scoped>
	/*搜索框*/

	.search-box {
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		text-align: center;
		justify-content: center;
		background: #FF5BA6;
		color: #666;
		z-index: 999;
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
</style>
