<template name="TopScroll">
	<!-- 顶部商品分类滑动条-->
	<view class="top-scroll">
		<scroll-view id="goodType" scroll-x :scroll-left="scrollLeft">
			<block v-for="(goodTab,index) in  goodTyps" v-bind:key="goodTab.cat">
				<view :class="['good-tab',currentTab==index?'beChoose':'']" :id="goodTab.id" :data-current="index" @tap="swichNav">
					{{goodTab.name}}
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['goodTyps'],
		data() {
			return {
				scrollLeft: 0, //滚动条的位置
				currentTab: 0, //当前被选中的商品条目
			}
		},
		methods: {
			swichNav: async function (e) { //选择商品类型(异步方法)
				console.log(e);
				if (this.currentTab == e.target.dataset.current) { //如果选择的是自己，没有变化
					return false;
				}
				let tabInfo = await this.getWidth('goodType'),
					tabBarScrollLeft = tabInfo.scrollLeft; //点击的时候记录并且设置scrollLeft
				this.scrollLeft = tabBarScrollLeft;
				console.log(this.scrollLeft)
				this.currentTab = e.target.dataset.current
			},
			getWidth: function (id) { //获得所选择的元素的宽高,异步方法
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						console.log(data)
						res(data);
					}).exec();
				});
			}
		}
	}
</script>

<style>
	/* 顶部滑动区域*/

	.top-scroll {
		margin-top: 60px;
		width: 100%;
		height: 70px;
		overflow: hidden;
		white-space: nowrap;
		align-items: center;
		color: #777777;
	}
	/* 商品类型*/

	.good-tab {
		display: inline-flex;
		margin-left: 30px;
		justify-content: center;
	}
	/* 商品分类被选中*/

	.beChoose {
		color: #FF0000;
		border-bottom: 5px solid #FF0000;
	}
</style>
