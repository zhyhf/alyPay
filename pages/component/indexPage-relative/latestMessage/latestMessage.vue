<template>
	<view class="wrapper">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26"></uni-icons>
				<view class="txt">
					消息盒子
				</view>
			</view>
			<view class="right-info">
				<uni-icons type="gear" size="24" color="black"></uni-icons>
			</view>
		</view>
		<view class="" style="margin-top: 130rpx;">

			<image class="payment-assistant" src="@/static/image/payment-assistant.png"></image>
			<image class="payment" src="@/static/image/payment.png"></image>
			<image class="sport" src="@/static/image/sport.png"></image>
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

		}
	}
</script>

<style lang="scss" scoped>
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: white;
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

	.wrapper {
		width: 94vw;
		padding: 20rpx 3vw;
		background-color: #F5F5F5;

		.payment-assistant {
			width: 100%;
			height: 762rpx;
			margin-bottom: 20rpx;
		}

		.payment {
			width: 100%;
			height: 450rpx;
			margin-bottom: 20rpx;
		}

		.sport {
			width: 100%;
			height: 364rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
