<template>
	<!-- 商品详情-->
	<view class="container">
		<GoodBanner :batchImage="goodDetail.batchImage" />
		<GoodPrice />
		<GoodMainPic />
	</view>
</template>

<script>
	import GoodBanner from '../../components/good/GoodBanner.vue'
	import GoodPrice from '../../components/good/GoodPrice.vue'
	import GoodMainPic from '../../components/good/GoodMainPic.vue'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			GoodBanner,
			GoodPrice,
			GoodMainPic
		},
		computed: {
			...mapState(['goodDetail'])
		},
		onUnload() {
			console.log('页面销毁')
			this.$store.state.goodDetail = {};
		},
		onLoad() {
			/* this.getGoodDetail('16359465') */
		},
		methods: {
			...mapActions(['getGoodDetail']),
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: auto;
		flex-direction: column;
	}
</style>
