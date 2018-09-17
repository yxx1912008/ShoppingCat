<template name="TopScroll">
	<!-- 顶部商品分类滑动条-->
	<view class="top-scroll">
		<scroll-view scroll-x :scroll-left="scrollLeft">
			<block v-for="(goodTab,index) in  goodTyps" v-bind:key="goodTab.cat">
				<view :class="['good-tab',currentTab==index?'beChoose':'']" :id="goodTab.id" :data-current="index" @tap="swichNav">
					{{goodTab.name}}
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import GoodTypeData from '../../static/data/GoodTypeData'
	export default {
		data() {
			return {
				scrollLeft: 0, //滚动条的位置
				currentTab: 0, //当前被选中的商品条目
				goodTyps: [],
			}
		},
		methods: {
			swichNav: async function (e) { //选择商品类型(异步方法)
				console.log(`当前选择的是:` + e.target.dataset.id)
				if (this.currentTab == e.target.dataset.current) { //如果选择的是自己，没有变化
					console.log(`选择的是自己`)
					return false;
				}
				let tabInfo = await this.getWidth(e.target.id),
					tabBarScrollLeft = tabInfo.scrollLeft; //点击的时候记录并且设置scrollLeft
				this.scrollLeft = tabBarScrollLeft;
				console.log(`当前滚动条位置:` + this.scrollLeft)
				this.currentTab = e.target.dataset.current
			},
			getWidth: function (id) { //获得所选择的元素的宽高,异步方法
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						console.log(`选择器选择到的数据为:` + data)
						res(data);
					}).exec();
				});
			}
		},
		mounted: function () {
			this.goodTyps = GoodTypeData //加载首页商品分类	
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
		background-color: #F8F8F8;
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
