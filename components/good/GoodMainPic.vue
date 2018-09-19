<template name="GoodMainPic">
	<!-- 商品简介主图-->
	<view class="container">
		<block v-for="(item,index) in goodMainPic" :key="index">
			<view class="good-main">
				<image :src="item" lazy-load mode="widthFix" class="good-main-pic"></image>
			</view>
		</block>
		<view class="loadMore">到底了!</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState(['goodMainPic'])
		}
	}
</script>

<style scoped>
	.container,
	.good-main,
	.good-main-pic {
		width: 100%;
		height: auto;
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
