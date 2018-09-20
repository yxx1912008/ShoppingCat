<template>
	<view class="container">
		<!-- 代理商区域查询系统-->
		<view class="form">
			<view class="title">
				代理区域查询系统
			</view>
			<view class="show">
				<view class="query-word">
					<view class="query-box">
						<input type="text" class="input-value" v-model="searchWord" placeholder="请输入查询的地级市,如杭州市" />
						<view class="search-button" @tap="queryAgent">
							查询
						</view>
					</view>
				</view>
				<view class="show-result">
					{{result}}
				</view>
			</view>
		</view>
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
		},
		data() {
			return {
				searchWord: '',
				result: ''
			}
		},
		methods: {
			queryAgent: function() {
				var queryWord = this.searchWord;
				if (this.searchWord === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入地级市进行查询'
					});
				}
				var that = this;
				uni.request({
					url: 'https://wx.star0393.com/cat/api/queryAgent.do',
					method: 'POST',
					data: {
						areaName: queryWord
					},
					header: {
						'Content-Type': 'application\/x-www-form-urlencoded'
					},
					success: function(res) {
						if (res.data.status === 1) {
							var data = res.data.data;
							that.result = data.areaName + '-' + data.level + '-' + data.price
						} else {
							uni.showToast({
								title: res.data.showMessage,
								icon: 'none'
							});
						}

					}
				});



			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		min-height: 100%;
		background: url("https://wx.star0393.com/static/cat/search/search_bg.jpg") no-repeat center top / auto 100%;
		align-items: center;
		justify-content: center;
	}

	.form {
		width: 600px;
		height: 500px;
		background-color: #fff;
		border-radius: 16px;
		flex-direction: column;
	}

	.title {
		width: 100%;
		height: 200px;
		line-height: 200px;
		color: #e71f48;
		justify-content: center;
		font-size: 40px;
		font-weight: 700;
	}

	.show {
		width: 100%;
		height: 300px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.query-word {
		height: 80px;
		width: 100%;
		justify-content: center;
	}

	.query-box {
		width: 90%;
		height: 80px;
		border: #e71f48 solid thin;
		border-radius: 15px;
	}

	.input-value {
		width: 80%;
		height: 80px;
		font-size: 28px;
	}

	.search-button {
		width: 20%;
		height: 80px;
		background-color: #e71f48;
		color: #fff;
		justify-content: center;
		line-height: 80px;
		border-radius: 15px;
	}

	.show-result {
		margin-top: 10px;
		height: 180px;
		width: 90%;
		font-size: 28px;
		font-weight: 500;
		color: #333;
		background-color: #f5f5f5;
		border-radius: 15px;
		line-height: 180px;
		justify-content: center;
	}
</style>
