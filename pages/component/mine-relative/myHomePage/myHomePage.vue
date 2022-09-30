<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title"></text>
			<view class="header-right">
				<!-- <text class="right-text" @click="jumpToLoading">编辑</text> -->
				<uni-icons class="right-icon" type="more-filled" size="25" color="#333"></uni-icons>
			</view>
		</view>
		<image src="@/static/mine/my-home-page.png" mode="widthFix" class="img"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
.wrapper {
	width: 100%;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index:999;
	}
	.header {
		z-index:99;
		width: 100%;
		position: fixed;
		left: 0;
		height: 50rpx;
		top: var(--status-bar-height);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding-bottom: 20rpx;
		.back {
			position: absolute;
			left: 20rpx;
			top: 10rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title {
			font-size: 38rpx;
			font-weight: 500;
		}
		.header-right {
			position: absolute;
			right: 20rpx;
			top: 0;
			.right-text {
				color: #3675DC;
				margin-right: 20rpx;
				font-size: 34rpx;position: relative;
				top: -4rpx;
			}
		}
	}
	.img {
		width: 100%;
		margin-top: calc(70rpx + var(--status-bar-height));
	}
}
</style>
