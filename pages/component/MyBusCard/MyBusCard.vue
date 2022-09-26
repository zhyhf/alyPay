<template>
	<view class="card-container">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					我的名片
				</view>
			</view>
		</view>
		<view class="card-main">
			<image src="/static/addControl/3.png" mode=""></image>
		</view>
		<view class="bot-c">
			<view class="bot-item">
				<image class="item" src="/static/addControl/1.png" mode=""></image>
				<view class="item-t">
					分享到微信
				</view>
			</view>
			<view class="bot-item">
				<image class="item" src="/static/addControl/2.png" mode=""></image>
				<view class="item-t">
					保存到相册
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-container {}

	.top-header {
		// position: fixed;
		// top: 0;
		// left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		// background-color: white;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		padding-right: 20rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;

		.left-info {
			display: flex;
			font-size: 34rpx;
			align-items: center;

			.txt {
				margin-left: 20rpx;
			}
		}

		.right-info {
			display: flex;
			flex-direction: row;
		}
	}

	.bot-c {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 50vw;
		// background-color: red;

		.item {
			width: 110rpx;
			height: 110rpx;
		}

		.bot-item {
			width: 140rpx;
			// height: 140rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.item-t {
			margin-top: 10rpx;
			font-size: 24rpx;
			color: #B7B7B7;
		}
	}

	.card-main {
		margin: 60rpx auto;
		width: 95vw;
		height: 800rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
