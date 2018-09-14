<template name="GoodPrice">
	<!-- 商品详情 价格-->
	<view class="container">

		<!-- 标题-->
		<view class="title">
			<text class="istmall">{{istmall==='1'?"天猫":"淘宝"}}</text> {{title}}
		</view>
		<!-- 价格-->
		<view class="nowPrice">
			<!-- 券后价格-->
			<view class="priceByTicket">

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		props: ['title', 'istmall'], //商品标题 是否是天猫商品

	}
</script>

<style scoped>
	.container {
		margin-top: 5px;
		width: 100%;
		height: 200px;
		border: thin solid #A992FF;
	}

	.title {
		width: 100%;
		height: 80px;
		border: thin solid #A992FF;
	}
	/* 是否是天猫的标识*/

	.istmall {
		height: 38px;
		width: 60px;
		border: 1px solid #FC3F78;
		font-size: 28px;
		color: #FC3F78;
		margin-left: 10px;
		line-height: 38px;
		margin-top: 5px;
	}
</style>
