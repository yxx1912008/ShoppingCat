<script>
	export default {
		onLaunch: function () {
			console.log('软件启动');
			//#ifdef APP-PLUS
			/* 5+环境锁定屏幕方向 */
			plus.screen.lockOrientation('portrait-primary'); //锁定
			//#endif
		},
		onShow: function () {
			console.log(this.$appName)
		},
		onHide: function () {}
	}
</script>

<style>
	/*每个页面公共css */

	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。*/
	}

	page {
		height: auto;
		min-height: 100%;
		width: 100%;
		/* 页面背景色 */
		font-size: 32px;
		line-height: 1.6;
		background-color: #F8F8F8;
		/* 设置字体风格*/
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
		border: hidden;
	}
</style>
