<template>
	<view class="wrapper">
		<view class="header">
			<view class="top-title">
				充值中心
				<view class="right-icon">
					<view class="application-right">
						<image class="bg" src="@/static/government/bg1.png" mode=""></image>
						<view class="more">
							<image src="@/static/government/more.png" mode=""></image>
						</view>
						<view class="close" @click="back">
							<image src="@/static/government/close.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<image src="@/static/image/invest-phone.png" class="invest-phone"></image>
		<view class="content">
			<image src="@/static/image/invest-money.png" class="invest-money"></image>
			<image src="@/static/image/invest-icon.png" class="invest-icon"></image>
			<image src="@/static/image/invest-ad.png" class="invest-ad"></image>
			<image src="@/static/image/invest-img.png" class="invest-img"></image>
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
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-title {
		// border-bottom: 1px solid yellow;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999999;
		color: white;
		font-size: 36rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		padding-top: calc(14rpx + var(--status-bar-height));
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: #1777FF;

		.right-icon {
			position: absolute;
			top: 65rpx;
			right: 12rpx;
			width: 24vw;
		}
	}

	.application-right {
		.more {
			position: absolute;
			left: 25rpx;
			top: -3rpx;
			width: 40rpx;
			height: 10rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
		.close {
			position: absolute;
			left: 110rpx;
			top: 14rpx;
			width: 40rpx;
			height: 40rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	
		.bg {
			width: 170rpx;
			height: 66rpx;
		}
	}

	.wrapper {
		width: 100vw;
		background-color: #F5F5F5;
		position: relative;

		.invest-phone {
			width: 100%;
			height: 470rpx;
		}

		.content {
			width: 96vw;
			padding: 0 2vw;
			position: absolute;
			left: 0;
			top: 170rpx;

			.invest-money {
				width: 100%;
				height: 490rpx;
				margin-bottom: 10rpx;
			}

			.invest-icon {
				width: 100%;
				height: 150rpx;
				margin-bottom: 10rpx;
			}

			.invest-ad {
				width: 100%;
				height: 170rpx;
				margin-bottom: 10rpx;
			}

			.invest-img {
				width: 100%;
				height: 230rpx;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
