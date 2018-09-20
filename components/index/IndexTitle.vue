<template name="IndexTitle">
	<!-- 首页标题-->
	<view class="container">
		<view class="current-top">
			<view class="current-title">
				{{title}}
			</view>
			<!-- 当前券人数-->
			<view class="current-count">
				<text v-show="middleTitleShow">{{middleTitle}}</text>
				<text class="current-count-font">{{count}}</text>
				<text v-show="!middleTitleShow">{{rightTitle}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title', 'middleTitle', 'rightTitle', 'count'],
		data() {
			return {
				"middleTitleShow": false
			}
		},
		mounted: function () {
			if (this.middleTitle) {
				this.middleTitleShow = true;
			}
		}

	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 40px;
		flex-wrap: wrap;
		background-color: #F8F8F8;
	}

	.current-top {
		height: 40px;
		width: 100%;
		line-height: 40px;
		flex-direction: row;
		justify-content: space-between;
	}

	.current-title {
		border-left: 5px solid #FC4D52;
		padding-left: 10px;
		font-size: 26px;
		margin-left: 20px;
	}

	.current-count {
		color: #aaa;
		font-size: 23px;
	}

	.current-count-font {
		font-size: 30px;
		color: #FC4D52;
	}
</style>
