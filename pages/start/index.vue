<template>
	<!-- 启动页面-->
	<view class="container">
		<!-- 加载框-->
		<view class="mask" @click="hide"></view>
		<view class="popup popup-middle">
			<view class="desc">
				<text>正在加载...</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onLoad: function() {
			var that = this;
			uni.request({
				url: 'https://api.luckydeer.cn/cat/api/getWxAppStatus.do',
				method: 'POST',
				data: {
					versionId: '1.0.0'
				},
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				success: function(res) {
					console.log(res)
					if (res.data.data.status === 0) {
						uni.setNavigationBarTitle({
							title: '代理区域查询系统'
						});
						uni.setNavigationBarColor({
							frontColor: '#ffffff',
							backgroundColor: '#AA3D54'
						});
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
	@import "../../common/common.css";


	.container {
		width: 100%;
		min-height: 100%;
	}
</style>
