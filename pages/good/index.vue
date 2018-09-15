<template>
	<!-- 商品详情-->
	<view class="container">
		<GoodBanner :batchImage="goodDetail.batchImage" />
		<GoodPrice :copyGoodWord="copyGoodWord" />
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
			copyGoodWord: function (word) {
				console.info(word);
				uni.setClipboardData({
					data: word,
					success: function () {
						uni.showModal({
							title: '温馨提示',
							content: '复制成功!打开手机淘宝下单即可',
							confirmText: '我知道了',
							cancelText: '看看教程',
							success: function (res) {
								if (res.cancel) {
									console.info('用户点击了取消');
									uni.navigateTo({
										url: '../../pages/help/index'
									})
								}
							}
						});
					}
				});
			}
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
