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
		<view style="position: relative;display: flex;justify-content: center;">
			 <image src="@/static/beijing.png" mode="widthFix" style="width:100%"></image>
		     <view style="position: absolute;top: 50rpx;text-align: center;">
				  <view><text style="color: #fff;font-size: 52rpx;letter-spacing: 4rpx;">通信大数据行程卡</text></view>
				  <view style="margin-top: 20rpx;"><text style="color: #fff;font-size: 30rpx;">疫情防控, 人人有责</text></view>
			      <view style="position: relative;margin-top: 20rpx;display: flex;justify-content: center;">
					   <image src="@/static/xinchengCard.png" mode="widthFix"></image>
				       	<view style="position: absolute;top: 90rpx;">
							<view style="display: flex;flex-flow: column;justify-content: center">
								<view><text style="text-align: center;margin-top: 10rpx;font-size: 32rpx;">186****2731的动态行程卡</text></view>
								<view><text style="color: #959595;text-align: center;margin-top: 35rpx;">更新于:  <text>{{date}}</text> </text></view>
								<view><image src="@/static/xingchen.gif" mode="widthFix" style="width: 70%;margin-top: 34rpx;"></image></view>
							</view>
						</view>
						<view style="position: absolute;bottom: 40rpx;"><text style="color: #959595;">您于前7天内到达或途径：
						  <text style="color:black">江苏省南京市</text></text></view>
				  </view>
			 </view>
		</view>
		<view style="position: absolute;bottom: 30%;text-align: center;left: 10%;color: #fff;"><text style="font-size: 22rpx;">结果包含您在7天内到访的国家（地区）与停留4小时以上的国内城市色卡仅对到访地作提醒，不关联健康状况</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		    date:''
			};
		},
		mounted(){
			this.date = this.getNowDate()
		},
		methods: {
			getNowDate(){
			  var date = new Date();
			  var sign2 = ":";
			  var year = date.getFullYear() // 年
			  var month = date.getMonth() + 1; // 月
			  var day = date.getDate(); // 日
			  var hour = date.getHours(); // 时
			  var minutes = date.getMinutes(); // 分
			  var seconds = date.getSeconds() //秒
			  var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
			  var week = weekArr[date.getDay()];
			  // 给一位数的数据前面加 “0”
			  if (month >= 1 && month <= 9) {
			    month = "0" + month;
			  }
			  if (day >= 0 && day <= 9) {
			    day = "0" + day;
			  }
			  if (hour >= 0 && hour <= 9) {
			    hour = "0" + hour;
			  }
			  if (minutes >= 0 && minutes <= 9) {
			    minutes = "0" + minutes;
			  }
			  if (seconds >= 0 && seconds <= 9) {
			    seconds = "0" + seconds;
			  }
			  return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
			},
			  back() {
			  	uni.navigateBack({
			  		delta: 1
			  	})
			  },
			  // 跳转loading
			  jump(){
			  	uni.navigateTo({
			  		url: `/pages/component/loading/loading?type=1`
			  	})
			  },
			},
		}
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
		.txt{
			font-size: 38rpx;
		}
	}
	.more{
		position: absolute;
		top: 6rpx;
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
		margin-right: 26rpx;
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