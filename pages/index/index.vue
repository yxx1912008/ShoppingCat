<template>
	<view class="container">
		<!-- 代理商区域查询系统-->
		代理区域查询系统
	</view>
</template>

<script>
	export default {
		onLoad() {
			var that = this;
			uni.request({
				url: 'https://wx.star0393.com/cat/api/getWxAppStatus.do',
				method: 'POST',
				data: {
					versionId: '1.0.0'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					if (res.data.data.status === 0) {
						uni.setNavigationBarTitle({
							title: '代理区域查询系统'
						})
					} else {
						that.$store.state.appStatus = 1;
						uni.redirectTo({
							url: '../../pages/cat/index'
						});
						return;
					}
				}
			});
		}
	}
</script>

<style>

</style>
