<template name="ActiveList">
	<!-- 活动列表-->
	<view class="container">
		<view class="icon-url-list">
			<view class="icon-url-cell" v-for="(item,index) in actives" :key="index">
				<image src="" mode="" class="icon-img"></image>
				<view class="icon-url-word">
					{{item.value}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				actives: [{
					value: "疯抢榜"
				}, {
					value: 2
				}]
			}
		},

	}
</script>

<style scoped>
	.container,
	.icon-url-list {
		width: 100%;
		border: #FF0000 thin solid;
		height: 150px;
	}

	.icon-img {
		width: 51px;
		height: 51px;
		background: url(../../static/img/cms-img.png) 0 -49px no-repeat;
	}
</style>
