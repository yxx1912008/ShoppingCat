<template name="LiveGoods">
	<!-- 领券直播商品列表-->
	<view class="container">
		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in liveGoods" :key="index">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{item.d_title}}
				</view>
			</view>
		</view>
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
		computed: {
			...mapState(['liveGoods'])
		},
		mounted: function () {
			console.log('开始获取领券直播商品列表')
			this.getLiveGoods(1);
		}
	}
</script>

<style scoped>
	@import "../../common/uni.css";
	.container {
		width: 100%;
		height: 500px;
		border: #333333 thin solid;
	}
</style>
