<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<view class="left">
				<image src="@/static/mine/car-home.png" class="left-icon"></image>
				<text class="text">我的车辆</text>
			</view>
			<view class="right">
				<image class="app" src="@/static/mine/replace.png" mode="widthFix"></image>
				<view class="more-and-out">
					<image class="bg" src="@/static/mine/bg.png" mode="widthFix"></image>
					<image class="icon icon-left" src="@/static/mine/car-more.png" mode="widthFix"></image>
					<image class="icon icon-right" src="@/static/mine/car-close.png" mode="widthFix" @click="back"></image>
				</view>
			</view>
		</view>
		<image src="@/static/mine/my-car.png" mode="widthFix" class="img"></image>
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

<style lang="scss" scoped>
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
		width: 100%;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
		background-color: #fff;
		.left {
			display: flex;
			align-items: center;
			margin-left: 30rpx;
			.left-icon {
				width: 36rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}
			.text {
				font-size: 40rpx;
				font-weight: 500;
			}
		}
		.right {
			display: flex;
			align-items: center;
			.app {
				width: 54rpx;
				height: 54rpx;
				margin-right: 16rpx;
			}
			.more-and-out {
				width: 150rpx;
				position: relative;
				margin-right: 16rpx;
				margin-top: 10rpx;
				.bg {
					width: 100%;
				}
				.icon {
					position: absolute;
					width: 40rpx;
					height: 40rpx;
					top: 10rpx;
				}
				.icon-left {
					left: 24rpx;
					top: 22rpx;
				}
				.icon-right {
					right: 18rpx
				}
			}
		}
	}
	.img {
		width: 100%;
		margin-top: calc(70rpx + var(--status-bar-height));
	}
}
</style>
