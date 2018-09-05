<template name="ActiveList">
	<!-- 活动列表-->
	<view class="container">
		<view class="icon-item" v-for="(item,index) in actives" :key="index">
			<view :class="item.iconStyle">
				<image :src="item.imgUrl" mode="aspectFit" class="icon-img"></image>
			</view>
			<view class="icon-text">
				{{item.value}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actives: [{
					value: "疯抢榜",
					imgUrl: "../../static/img/icon/ranking.png",
					iconStyle: "icon-img-body"
				}, {
					value: 2,
					imgUrl: "../../static/img/icon/ranking.png",
					iconStyle: ""
				}]
			}
		},

	}
</script>

<style scoped>
	.container {
		width: 100%;
		border: #FF0000 thin solid;
		height: 200px;
	}

	.icon-item {
		width: 120px;
		height: 100%;
		border: #FF0000 thin solid;
		margin-left: 45px;
		flex-direction: column;
	}

	.icon-img-body {
		margin-top: 10px;
		width: 120px;
		height: 120px;
		border-radius: 60px;
		align-items: center;
		justify-content: center;
	}

	.icon-img-body {
		background-color: #A992FF;
	}

	.icon-text {
		width: 100%;
		justify-content: center;
	}

	.icon-img {
		width: 60px;
		height: 60px;
	}
</style>
