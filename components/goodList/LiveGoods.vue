<template name="LiveGoods">
	<!-- 领券直播商品列表-->
	<view class="container">



	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		methods: {
			...mapActions(['getLiveGoods']),
		},
		mounted: function () {
			console.log('开始获取领券直播商品列表')
			this.getLiveGoods(1);
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
	}
</style>
