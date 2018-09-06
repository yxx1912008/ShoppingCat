<template name="ActiveList">
	<!-- 活动列表-->
	<view class="container">
		<view class="icon-item" v-for="(item,index) in actives" :key="index">
			<view :class="item.iconStyle" class="icon-img-body" @tap="chooseActive(item.id)">
				<image :src="item.imgUrl" mode="aspectFit" class="icon-img"></image>
			</view>
			<view class="icon-text">
				{{item.value}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actives: [{
					value: "疯抢榜",
					imgUrl: "../../static/img/icon/ranking.png",
					iconStyle: "purple",
					id: "crazy"
				}, {
					value: "9.9包邮",
					imgUrl: "../../static/img/icon/gift.png",
					iconStyle: "pink",
					id: "nine"
				}, {
					value: "咚咚抢",
					imgUrl: "../../static/img/icon/timer.png",
					iconStyle: "violet",
					id: "qiang"
				}, {
					value: "疯抢榜",
					imgUrl: "../../static/img/icon/horn.png",
					iconStyle: "yellow",
					id: "other"
				}]
			}
		},
		methods: {
			chooseActive: function (activeId) { //选择活动
				console.log(activeId)
			}

		},
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 200px;
	}

	.icon-item {
		width: 120px;
		height: 100%;
		margin-left: 52px;
		flex-direction: column;
	}

	.icon-img-body {
		margin-top: 10px;
		width: 120px;
		height: 120px;
		border-radius: 60px;
		align-items: center;
		justify-content: center;
	}

	.purple {
		background-color: #A992FF;
	}

	.pink {
		background-color: #FF7692;
	}

	.violet {
		background-color: #FF5858;
	}

	.yellow {
		background-color: #FFC151;
	}

	.icon-text {
		margin-top: 10px;
		width: 100%;
		justify-content: center;
		font-size: 24px;
		color: #333;
	}

	.icon-img {
		width: 60px;
		height: 60px;
	}
</style>
