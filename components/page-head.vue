<template name="page-head">
	<!-- 头部标题-->
	<view class="page-head">
		<view class="page-head-title">{{title}}</view>
	</view>
</template>

<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: "购物猫"
			}
		}
	}
</script>
