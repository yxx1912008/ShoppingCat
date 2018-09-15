<template name="GoodBanner">
	<view class="good-banner">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in batchImage" v-bind:key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item" mode="aspectFit" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: ['batchImage']
	}
</script>

<style scoped>
	.good-banner,
	swiper,
	.swiper-img {
		width: 100%;
		height: 750px;
	}
</style>
