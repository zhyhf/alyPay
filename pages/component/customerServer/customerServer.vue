<template>
	<view class="service-container">
			<view class="top-title">
				我的客服
				<view class="right-icon">
					<!-- <view class="application">
						<image src="@/static/government/tihuan.png" mode=""></image>
					</view> -->
					<view class="application-right">
						<image class="bg" src="@/static/government/bg.png" mode=""></image>
						<view class="more" @click="toMore">
							<image src="@/static/government/more.png"></image>
						</view>
						<view class="shuxian"></view>
						<view class="close" @click="back">
							<image src="@/static/government/close.png" @click='back' mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="introduce">
				<view class="name">
					Hi, **帅
				</view>
				<view class="in-txt">
					欢迎来到我的客服，服务让生活更简单
				</view>
				<view class="service">
					<image src="../../../static/mykf.gif" mode="widthFix"></image>
				</view>
			</view>
			<view class="loading">
				<image src="../../../static/loading.gif" mode="widthFix"></image>
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
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toMore(){
				uni.navigateTo({
					url: '/pages/component/loading/loading'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loading {
		display: flex;
		justify-content: center;
		width: 100vw;
		image {
			// margin: 0 auto;
			margin-top: 400rpx;
		    width: 150rpx;
		}
	}
	.introduce {
		position: relative;
		background-color: #1777FF;
		padding: 10rpx 0 20rpx 56rpx;
		.name {
			color: white;
			font-weight: bold;
			font-size: 32rpx;
		}
		.in-txt {
			padding-top: 6rpx;
			color: rgba(255, 255, 255, .5);
		}
		.service {
			position: absolute;
			right: 40rpx;
			top: -1.999999888rpx;
			// bottom: 2rpx;
			image {
				width: 120rpx;
			}
		}
	}
	.application {
		position: absolute;
		top: 32rpx;
		right: 152rpx;
	
		image {
			width: 57rpx;
			height: 57rpx;
		}
	}
	
	.application-right {
		position: absolute;
		right: 2rpx;
		top: 35rpx;
		width: 19vw;
	
		.more {
			position: absolute;
			right: 84rpx;
			top: -9rpx;
			width: 40rpx;
			height: 10rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
		.shuxian{
			position: absolute;
			right: 70rpx;
			top: 12rpx;
			width: 0.05px;
			height: 30rpx;
			background-color: #efeff4;
		}
	
		.close {
			position: absolute;
			right: 20rpx;
			top: 5rpx;
			width: 34rpx;
			height: 34rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	
		.bg {
			width: 140rpx;
			height: 54rpx;
		}
	}
	.top-title {
		position:relative;
		// top: 0;
		// left: 0;
		width: 100vw;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 36rpx;
		font-weight: 500;
		letter-spacing: 1rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 65rpx;
		padding-bottom: 35rpx;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: #1777FF;
	
		.right-icon {
			position: absolute;
			top: 30rpx;
			right: 16rpx;
			width: 26vw;
		}
	}
</style>
