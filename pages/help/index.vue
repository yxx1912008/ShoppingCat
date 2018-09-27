<template>
	<!-- 帮助页面-->
	<view v-if="isOpen" class="container">
		<image class="help-pic" src="https://api.luckydeer.cn/static/cat/help/1.jpg" mode="widthFix"></image>
		<image class="help-pic" src="https://api.luckydeer.cn/static/cat/help/2.jpg" mode="widthFix"></image>
		<image class="help-pic" src="https://api.luckydeer.cn/static/cat/help/3.jpg" mode="widthFix"></image>
		<image class="help-pic" src="https://api.luckydeer.cn/static/cat/help/4.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		computed: {
			isOpen() {
				if (this.$store.state.appStatus === 1) {
					return true;
				}
				return false;
			}
		},
		onLoad() {
			if (this.$store.state.appStatus === 0) {
				uni.setNavigationBarTitle({
					title: '错误页面'
				});
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: auto;
		flex-direction: column;
	}

	.help-pic {
		width: 100%;
	}
</style>
