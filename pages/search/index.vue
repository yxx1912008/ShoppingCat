<template>
	<view>
		<!-- <web-view :src="searchUrl"></web-view> -->
		<rich-text :nodes="pageContent"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchUrl: 'http://cat.luckydeer.cn/index.php?r=index/search&s_type=1&kw=&kws=',
				pageContent: ''
			}
		},
		mounted: function () {
			console.log('进入搜索页面');
			uni.setNavigationBarTitle({
				title: '搜索商品',
			})

			uni.request({
				url: 'http://cat.luckydeer.cn/index.php?r=index/wap',
				success: function (res) {
					this.pageContent = res.data;
				},
			})

		}
	}
</script>

<style>

</style>
