<template>
	<!-- 启动页面-->
	<view class="container">
		<!-- 加载框-->
		<view class="mask" @click="hide"></view>
		<view class="popup popup-middle">
			<view class="desc">
				<text>正在加载...</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad: function() {

		}
	}
</script>

<style>
	@import "../../common/common.css";


	.container {
		width: 100%;
		min-height: 100%;
	}
</style>
