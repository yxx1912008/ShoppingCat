<template>
	<!-- 商品详情-->
	<view class="container">
		<GoodBanner :batchImage="goodDetail.batchImage" />
		<GoodPrice :title="goodDetail.d_title" :istmall="goodDetail.istmall" />
	</view>
</template>

<script>
	import GoodBanner from '../../components/good/GoodBanner.vue'
	import GoodPrice from '../../components/good/GoodPrice.vue'
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		onLoad: function (res) {
			console.log('进入商品详情')

			if (!res.goodId) {
				uni.navigateBack({
					delta: 1
				});
			}

			this.getGoodDetail(res.goodId);
		},
		methods: {
			...mapActions(['getGoodDetail']), //获取商品详情
		},
		components: {
			GoodBanner,
			GoodPrice
		},
		computed: {
			...mapState(['goodDetail'])
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: auto;
		flex-direction: column;
	}
</style>
