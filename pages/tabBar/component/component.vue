<template>
	<view class="container" @click="jump">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/finance-left-icon.png" class="f-icon"></image>
			<view class="input-wrapper">
				<input type="text" class="input">
				<image src="@/static/image/search-icon.png" class="search"></image>
			</view>
			<image src="@/static/image/finance-right-icon.png" class="f-icon"></image>
		</view>
		<image src="@/static/image/f1.png" mode="widthFix" style="width: 100%;" class="image"></image>
		<image src="@/static/image/f2.png" mode="widthFix" style="width: 100%;"></image>
		<image src="@/static/image/f3.png"mode="widthFix" style="width: 100%;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		.status_bar {
			width: 100%;
			height: var(--status-bar-height);
			background-color: #1777FF;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
		}
		.header {
			display: flex;
			width: 100vw;
			height: 60rpx;
			align-items: center;
			padding: 20rpx 0;
			background-color: #1777FF;
			position: fixed;
			top: var(--status-bar-height);
			left: 0;
			z-index: 99;
			.f-icon {
				display: inline-block;
				width: 60rpx;
				height: 60rpx;
				margin: 0 20rpx;
			}
			.input-wrapper {
				flex: 1;
				position: relative;
				.input {
					border-radius: 12rpx;
					background-color: #fbfbfb;
					height: 60rpx;
				}
				.search {
					width: 36rpx;
					height: 36rpx;
					position: absolute;
					left: 10rpx;
					top: 12rpx;
				}
			}
		}
		.image {
			margin-top: calc(90rpx + var(--status-bar-height));
		}
	}
</style>
