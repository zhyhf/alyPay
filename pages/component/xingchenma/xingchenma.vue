<template>
	<view>
		<view class="top-header" style="padding-top: 88rpx;width: 100vw;padding-bottom:15rpx;">
			<view class="back" style="display: flex; align-items: center;">
				<image @click="back" style="width: 35rpx;height: 35rpx;margin-right: 30rpx;" src="/static/image/back.png" mode=""></image>
				<view class="txt">
					通信行程卡
				</view>
			</view>
			<view class="right-info">
				<view class="left-img">
					<image style="width: 50rpx; height: 50rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img">
					<image style="width: 130rpx; height: 50rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
					<view class="more" @click="jump">
						<image style="width: 38rpx; height: 8rpx;" class="imageMore" src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close" @click="back">
						<image style="width: 34rpx; height: 34rpx;" class="imageClose" src="@/static/government/closeBlack.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view style="position: relative;">
			 <image src="@/static/beijing.png" mode="widthFix" style="width:100%"></image>
		     <view style="position: absolute;top: 50rpx;text-align: center;left: 10%;">
				  <view><text style="color: #fff;font-size: 52rpx;letter-spacing: 4rpx;">通信大数据行程卡</text></view>
				  <view style="margin-top: 20rpx;"><text style="color: #fff;font-size: 30rpx;">疫情防控, 人人有责</text></view>
			      <view style="">
					   <image src="@/static/xinchengCard.png" mode="widthFix" ></image>
				  </view>
			 </view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.top-header {
		padding-right: 20rpx;
		padding-left: 20rpx;
		// box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 100vw;
		background-color: #f5f5f5;
	}
	.more{
		position: absolute;
		top: 22rpx;
		left: 16rpx;
		width: 40rpx;
		height: 10rpx;
		.imageMore {
			width: 100%;
			height: 100%;
		}
	}
	.close {
		position: absolute;
		right: 20rpx;
		top: 9rpx;
		width: 34rpx;
		height: 34rpx;
	
		.imageClose {
			width: 100%;
			height: 100%;
		}
	}
	.right-info {
		display: flex;
		flex-direction: row;
	}
	.left-img {
		margin-right: 20rpx;
	}
	.right-img {
			position: relative;
		}
	.back {
		display: flex;
		flex-direction: row;
		font-size: 32rpx;
	}
</style>