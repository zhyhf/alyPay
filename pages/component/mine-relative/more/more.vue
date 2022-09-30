<template>
	<view class="container">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">个人信息</text>
		</view>
		<image src="@/static/mine/more-page.png" mode="widthFix" class="img" @click="click"></image>
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

<style lang="scss" scoped>
.container {
	width: 100%;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		z-index:999;
	}
	.header {
		z-index:99;
		width: 100%;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
		display: flex;
		justify-content: center;
		align-items: center;
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
	}
	.img {
		width: 100%;
		margin-top: calc(70rpx + var(--status-bar-height));
	}
}
</style>
