<template>
	<view class="page">
		<view class="banner">
			<image class="banner-img" :src="banner.cover"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.author_name}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.published_at}}</text>
		</view>
		<view class="article-content">
			<rich-text :nodes="htmlString"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'list-triplex-row',
				banner: {},
				htmlString: ""
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.title,
				path: '../../pages/news/detail?detailDate=' + JSON.stringify(this.banner)
			}
		},
		onLoad(e) {
			this.banner = JSON.parse(e.detailDate);
			this.getDetail();
			uni.setNavigationBarTitle({
				title: this.banner.title
			})
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://wx.star0393.com/cat/api/getNewsDetail.do?postId=' + this.banner.post_id,
					method: 'POST',
					success: (data) => {
						if (data.statusCode == 200) {
							this.htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
						}
					},
					fail: () => {
						console.log('fail');
					}
				})
			}
		}
	}
</script>

<style>
	@import "../../common/news.css";

	page {
		background: #efeff4;
	}

	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
		height: 240upx;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
	}

	page {
		background-color: #F8F8F8;
		height: 100%;
		font-size: 32upx;
		line-height: 1.6;
	}

	checkbox,
	radio {
		margin-right: 10upx;
	}

	button {
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	form {
		width: 100%;
	}

	/* page */

	.container {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		justify-content: space-between;
		font-size: 32upx;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
	}

	.page-head {
		padding: 60upx 50upx 80upx;
		text-align: center;
		line-height: initial;
		height: 60upx;
	}

	.page-head-title {
		display: inline-block;
		padding: 0 40upx;
		font-size: 30upx;
		height: 60upx;
		line-height: 60upx;
		color: #BEBEBE;
		box-sizing: border-box;
		border-bottom: 2upx solid #D8D8D8;
	}

	.page-head-desc {
		padding-top: 20upx;
		color: #9B9B9B;
		font-size: 32upx;
	}

	.page-body {
		width: 100%;
		flex-grow: 1;
		overflow-x: hidden;
	}

	.page-body-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.page-body-wording {
		text-align: center;
		padding: 200upx 100upx;
	}

	.page-body-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		width: 100%;
		padding: 50upx 0 150upx 0;
	}

	.page-body-title {
		margin-bottom: 100upx;
		font-size: 32upx;
	}

	.page-body-text {
		font-size: 30upx;
		line-height: 52upx;
		color: #ccc;
	}

	.page-body-text-small {
		font-size: 24upx;
		color: #000;
		margin-bottom: 100upx;
	}

	.page-foot {
		margin: 100upx 0 30upx 0;
		text-align: center;
		color: #1aad19;
		font-size: 0;
	}

	.icon-foot {
		width: 152upx;
		height: 23upx;
	}

	.page-section {
		width: 100%;
		margin-bottom: 60upx;
	}

	.page-section_center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page-section:last-child {
		margin-bottom: 0;
	}

	.page-section-gap {
		box-sizing: border-box;
		padding: 0 30upx;
	}

	.page-section-spacing {
		box-sizing: border-box;
		padding: 0 80upx;
	}

	.page-section-title {
		font-size: 28upx;
		color: #999999;
		margin-top: 10upx;
		margin-bottom: 10upx;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.page-section-gap .page-section-title {
		padding-left: 0;
		padding-right: 0;
	}

	/* example */

	.index-hd {
		padding: 90upx;
		text-align: center;
	}

	.index-logo {
		width: 140upx;
		height: 140upx;
	}

	.btn-area {
		margin-top: 60upx;
		box-sizing: border-box;
		width: 100%;
		padding: 0 30upx;
	}

	.image-plus {
		width: 150upx;
		height: 150upx;
		border: 2upx solid #D9D9D9;
		position: relative;
	}

	.image-plus-nb {
		border: 0;
	}

	.image-plus-text {
		color: #888888;
		font-size: 28upx;
	}

	.image-plus-horizontal {
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: #d9d9d9;
		width: 4upx;
		height: 80upx;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
	}

	.image-plus-vertical {
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: #d9d9d9;
		width: 80upx;
		height: 4upx;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
	}

	.color1 {
		background-color: #1AAD19;
		color: #FFFFFF;
	}

	.color2 {
		background-color: #2782D7;
		color: #FFFFFF;
	}

	.color3 {
		background-color: #F1F1F1;
		color: #353535;
	}
</style>
