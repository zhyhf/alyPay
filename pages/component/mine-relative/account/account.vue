<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">手机号</text>
			<view class="header-right">
				<text class="right-text" @click="click">我的客服</text>
			</view>
		</view>
		<view class="content">
			<image src="@/static/mine/person-accoun t.png" mode="widthFix" class="img" @click="click"></image>
		</view>
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
			},
			click() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
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
		top: var(--status-bar-height);
		display: flex;
		// justify-content: center;
		align-items: center;
		background-color: #fff;
		padding-bottom: 20rpx;
		.back {
			// position: absolute;
			// left: 20rpx;
			// top: 10rpx;
			margin:10rpx 20rpx 0 20rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title {
			margin:10rpx 20rpx 0 20rpx;
			font-size: 38rpx;
			font-weight: 500;
		}
		.header-right {
			position: absolute;
			right: 20rpx;
			top: 15rpx;
			.right-text {
				color: #323232;
				margin-right: 20rpx;
				// margin-top: 10rpx;
				font-size: 34rpx;position: relative;
				top: 0rpx;
			}
		}
	}
	.content {
		width: 100%;
		margin-top: calc(70rpx + var(--status-bar-height));
		height: calc(100vh - 70rpx - var(--status-bar-height));
		background-color: #fff;
		.img {
			width: 100%;
			margin-top: 200rpx;
		}
	}
}
</style>
