<template>
	<!-- 商品详情-->
	<view v-if="isOpen" class="container">
		<GoodBanner :batchImage="goodDetail.batchImage" />
		<GoodPrice :copyGoodWord="copyGoodWord" :showShop="showShop" />
		<GoodMainPic />
	</view>
	<view v-else>您输入的页面有误</view>
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
			...mapState(['goodDetail']),
			isOpen() {
				if (this.$store.state.appStatus === 1) {
					return true;
				}
				return false;
			}
		},
		data: {
			showShop: true
		},
		onUnload() {
			this.$store.state.goodDetail = {};
		},
		onLoad(res) {
			if (this.$store.state.appStatus === 0) {
				uni.setNavigationBarTitle({
					title: '错误页面'
				});
			}
			if (JSON.stringify(res) !== '{}') {
				this.showShop = false;
			}
		},
		methods: {
			...mapActions(['getGoodDetail']),
			copyGoodWord: function(word) {
				console.info(word);
				uni.setClipboardData({
					data: word,
					success: function() {
						uni.showModal({
							title: '温馨提示',
							content: '复制成功!打开手机淘宝下单即可',
							confirmText: '我知道了',
							cancelText: '看看教程',
							success: function(res) {
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
