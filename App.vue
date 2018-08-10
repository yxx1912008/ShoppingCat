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
			console.log('软件进入前台')
		},
		onHide: function () {
			console.log('软件进入后台')
		}
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
		min-height: 100%;
	}
</style>
