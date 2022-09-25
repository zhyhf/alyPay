<template>
	<view class="container">
		<view class="status_bar"></view>
		<view class="header">
			<!-- <view class="home"> -->
				<image src="@/static/image/pandemic-home.png" class="home"></image>
			<!-- </view> -->
			<view class="right-icon">
				<view class="application">
					<image src="@/static/government/tihuan.png" mode=""></image>
				</view>
				<view class="application-right">
					<image class="bg" src="@/static/government/bg.png" mode=""></image>
					<view class="more">
						<image src="@/static/government/more.png" mode=""></image>
					</view>
					<view class="close">
						<image src="@/static/government/close.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<image src="@/static/image/pandemic-page.png" class="pandemic-page" mode="widthFix"></image>
		<image src="@/static/image/area.png" class="img" mode="widthFix"></image>
		<image src="@/static/image/lookout.png" class="img" mode="widthFix"></image>
		<image src="@/static/image/commercial.png" class="com" mode="widthFix"></image>
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

<style scoped lang="scss">
.container {
	width: 100vw;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		background-color: #2952A0;
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 130rpx;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 32rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		padding-top: var(--status-bar-height);
		box-sizing: border-box;
		background-color: #28579F;
		-webkit-font-smoothing: antialiased;
		
		.home {
			width: 44rpx;
			height: 44rpx;
			position: absolute;
			top: 52rpx;
			left: 38rpx;
		}
	
		.right-icon {
			position: absolute;
			top: 15rpx;
			right: 20rpx;
			width: 24vw;
		}
		.application {
			position: absolute;
			top: 35rpx;
		
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
		.application-right {
			position: absolute;
			right: 4rpx;
			top: 35rpx;
			width: 15vw;
		
			.more {
				position: absolute;
				right: 66rpx;
				top: 5rpx;
				width: 30rpx;
				height: 30rpx;
		
				image {
					width: 100%;
					height: 100%;
				}
			}
		
			.close {
				position: absolute;
				right: 10rpx;
				top: 5rpx;
				width: 30rpx;
				height: 30rpx;
		
				image {
					width: 100%;
					height: 100%;
				}
			}
		
			.bg {
				width: 120rpx;
				height: 50rpx;
			}
		}
	}
	.pandemic-page {
		width: 100%;
		margin-top: calc(var(--status-bar-height) + 130rpx);
	}
	.img {
		width: 92vw;
		margin: 20rpx 4vw 0;
	}
	.com {
		width: 96vw;
		margin: 20rpx 2vw ;
	}
}
</style>
