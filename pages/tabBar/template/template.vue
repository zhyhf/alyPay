<template>
	<view class="user-info">
		<view class="back">
			<view class="back-icon">
				< </view>
					<view class="title">
						个人专属服务空间
					</view>
			</view>
			<view class="user-info-card">
				<view class="top-title">
					<view class="user-header">
						<image style="width: 80rpx; height: 80rpx; margin-right: 3vw;" class="header" src="../../../static/image/header.png" mode="aspectFill"></image>
						<view class="user-name">
							Hi,**帅
						</view>
					</view>
					<view class="user-setting">
						设置
					</view>
				</view>
				<view class="b-info">
					<view class="item">
						<view class="left-text">
							证件类型
						</view>
						<view class="right-text">
							居民身份证
						</view>
					</view>
					<view class="item">
						<view class="left-text">
							证件号码
						</view>
						<view class="right-text">
							************2834
						</view>
					</view>
					<view class="item">
						<view class="left-text">
							手机号码
						</view>
						<view class="right-text">
							186*****2731
						</view>
					</view>
				</view>
			</view>
			<view class="fu-wu-card">
				<view class="title">
					我的服务
				</view>
				<view class="more-tools">
					<view class="tools-main">
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/dangan.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/tuijian.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/shouchang.png" mode="aspectFill">
							</image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/zxun.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/touxu.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/jianyi.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/fank.png" mode="aspectFill"></image>
						</view>
						<view class="tool-item">
							<image class="top-image" src="../../../static/image/zhengjian.png" mode="aspectFill">
							</image>
						</view>
					</view>
				</view>
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
				});
			}
		}
	}
</script>

<style  lang="scss">
	page {
		margin: 0 !important;
		padding: 0 !important;
		// background-image: url('../../../static/image/bg.png');
		// background-repeat: no-repeat;
		// background-size: contain;
	}

	.back {
		display: flex;
		margin-left: 2vw;
		font-size: 40rpx;
		color: white;
		padding-top: 2vw;

		.back-icon {
			margin-right: 20rpx;
		}

		// margin-top: ;
		// padding: 4vw 0 0 4vw;
	}

	.fu-wu-card {
		padding: 4vw;
		width: 90vw;
		margin: 0 auto;
		background-color: #fff;
		box-shadow: 1rpx 6rpx 4rpx 4rpx rgba(0, 0, 0, .1);
		box-sizing: border-box;
		border-radius: 16rpx;
		position: relative;

		.title {
			display: flex;

			&::before {
				display: block;
				margin-top: 10rpx;
				position: absolute;
				left: 0;
				content: "";
				width: 20rpx;
				height: 40rpx;
				background-color: indianred;
			}

			font-weight: 700;
			font-size: 40rpx;
		}
	}

	.more-tools {
		padding: 40rpx 55rpx;
		display: flex;
		// justify-content: center;
		align-items: center;

		.tools-main {
			display: flex;
			flex-wrap: wrap;
		}

		.tool-item {
			width: 21vw;
			height: 21vw;

			image {
				width: 21vw;
				height: 21vw;
			}
		}
	}

	.b-info {
		margin-top: 70rpx;

		.item {
			display: flex;
			margin-bottom: 20rpx;

			.left-text {
				color: #ccc;
				font-weight: 700;
				margin-right: 10vw;
			}
		}
	}

	.user-info {
		// padding: 5vw;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-sizing: border-box;
		background-image: url('../../../static/image/bg.png');
		background-repeat: no-repeat;
		background-size: contain;
		overflow-y: auto;
		padding-bottom: 5vw;
	}

	.user-setting {
		font-size: 34rpx;
		// padding-right: 10vw;
	}

	.user-info-card {
		margin: 100rpx auto;
		margin-bottom: 60rpx;
		width: 90vw;
		padding: 4vw;
		border-radius: 16rpx;
		background-color: #fff;
		box-sizing: border-box;
		box-shadow: 1rpx 6rpx 4rpx 4rpx rgba(0, 0, 0, .1);

		.user-header {
			display: flex;
			align-items: center;
			 .header {
				margin-right: 3vw;
				width: 80rpx;
				height: 80rpx;
			}
		}

		.top-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 48rpx;
		}
	}
</style>
