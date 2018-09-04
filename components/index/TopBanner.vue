<template name="TopBanner">
	<view class="top-banner">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in topBanners" v-bind:key="index">
				<view class="swiper-item" :id="item.goodId" >
					<image class="swiper-img" :src="item.bannerImg" mode="aspectFit" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import utils from '../../common/util.js'
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			...mapActions(['setIndexBanner','getBanner']), //设置首页海报列表
			getIndexBanner: async function () { //异步方法加载海报列表
				var bannsers = await utils.requestUtil('indexBanner')
				this.setIndexBanner(bannsers);
				console.log(bannsers)
			}
		},
		mounted: function () {
			this.getBanner(); //页面加载后获取海报

		},
		computed: {
			...mapState(['topBanners'])
		}
	}
</script>

<style>
	.top-banner {
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
