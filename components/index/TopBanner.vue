<template name="TopBanner">
	<view class="top-banner">
		<swiper :indicator-dots="true" scroll-x="false" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in topBanners" v-bind:key="index" @tap="getGoodInfo(item.goodId)">
				<view class="swiper-item" :id="item.goodId">
					<image class="swiper-img" lazy-load :src="item.bannerImg" mode="aspectFit" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		props: ['getGoodInfo'],
		computed: {
			...mapState(['topBanners'])
		}
	}
</script>

<style scoped>
	.top-banner {
		margin-top: 58px;
		width: 100%;
		height: 321px;
	}

	swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-img {
		width: 100%;
		height: 321px;
	}
</style>
