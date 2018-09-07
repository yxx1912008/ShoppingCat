<template name="CurrentTicket">
	<!-- 大家都在领-->
	<view class="container">
		<view class="current-top">
			<view class="current-title">
				大家都在领
			</view>
			<!-- 当前领券人数-->
			<view class="current-count">
				<text class="current-count-font">909,259次</text>实时领券
			</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 40px;
		flex-wrap: wrap;
		background-color: #F8F8F8;
	}

	.current-top {
		height: 40px;
		width: 100%;
		line-height: 40px;
		flex-direction: row;
		justify-content: space-between;
	}

	.current-title {
		border-left: 5px solid #FC4D52;
		padding-left: 10px;
		font-size: 26px;
		margin-left: 20px;
	}

	.current-count {
		color: #aaa;
		font-size: 23px;
	}

	.current-count-font {
		font-size: 30px;
		color: #FC4D52;
	}
</style>
