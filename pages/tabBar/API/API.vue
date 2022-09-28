<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="tabs">
			<text
				:class="activeIndex === index ? 'tab-item active' : 'tab-item'"
				v-for="(item, index) in tabs"
				:key="index"
				class="tab-item"
				@click="changeTab(index)"
			>{{ item }}</text>
			<image src="../../../static/image/search-icon.png" class="search"></image>
			<image src="../../../static/image/life-person.png" class="person"></image>
		</view>
		<image src="@/static/loading2.gif" class="loading" mode="widthFix"></image>
		<my-tab-bar class="tabBar"></my-tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				tabs: ['关注', '发现', '直播']
			}
		},
		methods: {
			changeTab(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 100vw;
		background-color: #FBFBFB;
		height: 100vh;
		position: relative;
		.tabBar{
			height: 110rpx;
			top: calc(100vh - var(--status-bar-height) - 183rpx);
			left: 0;
		}
		.status_bar {
			width: 100%;
			height: var(--status-bar-height);
			background-color: #FBFBFB;
		}
		.tabs {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 20rpx;
			position: relative;
			.tab-item {
				margin: 0 20rpx;
				display: block;
				font-size: 38rpx;
				color: #686868;
			}
			.active {
				color: #393939;
				font-weight: 500;
				border-bottom: 4rpx solid #213CC9;
			}
			.search {
				position: absolute;
				right: 138rpx;
				top: 28rpx;
				width: 43rpx;
				height: 43rpx;
			}
			.person {
				position: absolute;
				right: 24rpx;
				top: 26rpx;
				width: 48rpx;
				height: 48rpx;
			}
		}
		.loading {
			width: 200rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate3d(-50%, -50%, 0);
			
		}
	}
</style>