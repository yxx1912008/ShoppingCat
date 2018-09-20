<template>
	<!-- 搜索页面-->
	<view v-if="isOpen" class="container">
		<!-- 搜索框-->
		<view class="search-box-body">
			<view class="search-box">
				<input type="text" class="key-words" confirm-type="search" v-model="keyWords" placeholder="洗护沐浴" />
				<view class="search-button" @tap="searchGoods">搜 索</view>
			</view>
		</view>
		<!-- 搜索图-->
		<view class="search-pic-body">
			<image class="search-pic" src="https://wx.star0393.com/static/cat/search/search-default.png" mode="aspectFit"></image>
		</view>
		<!-- 搜索方法说明-->
		<view class="search-fangfa">
			<view class="search-help-title">搜索方法：</view>
			<view class="search-help-word">1、打开拷贝商品标题 </view>
			<view class="search-help-word">2、将商品标题粘贴到搜索框中进行搜索</view>
		</view>

		<!-- 加载框-->
		<view class="mask" v-show="showMask" @click="hide"></view>
		<view class="popup popup-middle" v-show="showState">
			<view class="desc">
				<text>正在搜索...</text>
			</view>
		</view>
	</view>
	<view v-else>您输入的页面有误</view>
</template>

<script>
	import ApiData from '../../static/data/ApiData.json'
	export default {
		data() {
			return {
				keyWords: '',
				showMask: false,
				showState: false
			}
		},
		methods: {
			searchGoods: async function() {
					console.info(`搜索关键字:` + this.keyWords);
					if (this.keyWords === '') {
						this.keyWords = '洗护沐浴'
					}
					var that = this;
					this.show();
					uni.request({
						url: ApiData['base'].devUrl + ApiData.searchGood.url,
						method: 'POST',
						data: {
							keyWords: that.keyWords
						},
						header: {
							'Content-Type': 'application\/x-www-form-urlencoded'
						},
						success: function(res) {
							if (res.data.length === 0) {
								uni.showToast({
									icon: 'none',
									title: '搜索失败'
								});
								that.hide();
								return;
							}
							that.$store.searchGoodList = res.data;
							that.hide();
							uni.navigateTo({
								url: '../../pages/search/SearchList'
							});
						},
					});
				},
				show() { //展示加载条
					this.showMask = true
					this.showState = true
				},

				hide() { //隐藏加载条
					this.showMask = false
					this.showState = false
				}
		},
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
		flex-direction: column;
		background-color: #faf5f6;
		justify-content: flex-start;
	}

	/* 搜索外框*/

	.search-box-body {
		width: 100%;
		height: 100px;
		background-color: #FF5BA6;
		justify-content: center;
	}

	/* 搜索内框*/

	.search-box {
		width: 80%;
		height: 80px;
		background-color: #FFFFFF;
		border-radius: 50px;
	}

	/* 搜索图片*/

	.search-pic-body,
	.search-pic {
		width: 100%;
	}

	/* 搜索关键字*/

	.key-words {
		width: 500px;
		height: 80px;
		margin-left: 30px;
	}

	/* 搜索按钮*/

	.search-button {
		background-color: #FFB925;
		color: #FFFFFF;
		border-radius: 50px;
		height: 80px;
		width: 200px;
		justify-content: center;
		line-height: 80px;
	}

	.search-fangfa {
		width: 100%;
		height: 200px;
		flex-direction: column;
		justify-content: center;
		padding-left: 80px;
	}

	.search-help-title {
		width: 90%;
	}

	.search-help-word {
		width: 90%;
		color: #999;
	}

	/* 加载 */

	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}

	.popup {
		position: absolute;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30px rgba(0, 0, 0, .1);
		box-shadow: 0 0 30px rgba(0, 0, 0, .1);
	}

	.popup-middle {
		width: 200px;
		height: 100px;
		border-radius: 10px;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	.desc {
		line-height: 100px;
		margin-left: 30px;
	}
</style>
