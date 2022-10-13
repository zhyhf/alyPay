<template>
	<view class="codePage">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					苏康码
				</view>
			</view>
			<view class="right-info">
				<view class="left-img" @click="toLoading">
					<image style="width: 56rpx; height: 56rpx;margin-right: 12rpx;" src="@/static/government/p1.png"
						mode=""></image>
				</view>
				<view class="right-img" style="position: relative;margin-right: 16rpx;">
					<image style="width: 142rpx; height: 56rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
					<view class="more" @click="toLoading">
						<image src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close" @click="back">
						<image src="@/static/government/closeBlack.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="code-main">
			<!-- 头部 -->
			<view class="main-header">
				<view class="h-left">
					<view class="l-content">
						<image class="icon" src="@/static/healthCode/hLogo.png" mode="widthFix"></image>
						<text class="text">苏康码·绿码</text>
					</view>
					<view class="b-text">
						186********2731
					</view>

				</view>
				<view class="h-right">
					<view class="r-name text">
						<text>赵国帅</text>
					</view>

					<view class="b-text">
						<text>12412414</text>
					</view>
				</view>
			</view>
			<view class="g-msg">
				<image src="@/static/healthCode/msg.gif" mode="widthFix"></image>
			</view>
			<view class="middle">
				<view class="middle-code">
					<view class="top-time">
						<text>10-13</text>
						<text class="time">10:44:11</text>
					</view>
					<view class="code-img">
						<image src="@/static/healthCode/hcode.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="b-card">
			<view class="img-box">
				<image src="@/static/healthCode/1.png" mode="widthFix"></image>
				<image src="@/static/healthCode/2.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="through-card">
			<image src="@/static/healthCode/3.png" mode="widthFix" @click="toXingchen"></image>
			<image src="@/static/healthCode/4.png" mode="widthFix"></image>
			<image src="@/static/healthCode/5.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			toXingchen(){
				uni.navigateTo({
					url:"/pages/component/xingchenma/xingchenma"				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
	background-color: #EDEDED !important;
	}
	.through-card {
		width: 100vw;
		padding: 0 10rpx;
		box-sizing: border-box;
		image {
			width: 100%;
		}
	}
	.b-card {
		width: 100vw;
		padding: 0 6rpx;
		box-sizing: border-box;
		
		.img-box {
			display: flex;
			justify-content: space-between;
			width: 100%;
			// background-color: #fff;
		}
		image {
			width: 370rpx;
		}
	}

	.g-msg {
		image {
			width: 100vw;
		}
	}

	.middle {
		width: 100vw;
		padding: 20rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		box-sizing: border-box;

		.code-img {
			display: flex;
			justify-content: center;
			padding-top: 40rpx;

			image {
				width: 500rpx;
				height: 500rpx;
			}
		}

		.middle-code {
			width: 100%;
			background-color: #fff;
			padding-bottom: 40rpx;
			// height: 600rpx;
			border-radius: 16rpx;
			box-shadow: 0 0 4rpx 4rpx rgba(0, 0, 0, .05);

			.top-time {
				display: flex;
				justify-content: center;
				font-size: 80rpx;
				font-weight: 700;
			}

			.time {
				padding-left: 20rpx;
			}
		}

	}

	.code-main {
		margin-top: calc(var(--status-bar-height) + 100rpx);
		width: 100vw;

		.main-header {
			padding: 20rpx;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			width: 100vw;
			height: 186rpx;
			background-color: #2C8EF3;

			.icon {
				width: 60rpx;
				height: 60rpx;
			}

			.h-left,
			.h-right {
				height: 100%;
				// line-height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.l-content {
				display: flex;
				align-items: center;
			}

			.text {
				padding-left: 20rpx;
				font-weight: 700;
				color: #B9F4FC;
				font-size: 38rpx;
			}

			.r-name {
				text-align: right;
			}

			.b-text {
				color: white;
				font-size: 32rpx;
			}
		}
	}

	.more {
		position: absolute;
		top: 2rpx;
		left: 20rpx;
		width: 36rpx;
		height: 10rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.close {
		position: absolute;
		right: 20rpx;
		top: 11rpx;
		width: 34rpx;
		height: 34rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

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
			align-items: center;
			margin-top: 16rpx;
			margin-right: 6rpx;
		}
	}
</style>
