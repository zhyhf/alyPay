<template>
	<view class="cycle">
		<view class="map-main">
			<view class="top-tab">
				<view :style="tabStyle" class="cur-choose">
	
				</view>
				<view class="choose-box">
					<view class="share" @click="changeTab(1)">
						特惠机票
					</view>
					<view class="elev" @click="changeTab(2)">
						乘机服务
					</view>
				</view>
			</view>
			
			<view class="place">
				<text class="place-text">北京</text>
				<view class="img-wrapper">
					<image src="@/static/travel/airplane.png" class="place-img"></image>
				</view>
				<text class="place-text">杭州</text>
			</view>
			
			<view class="leave-day">
				<text class="leave-text">出发日期</text>
				<view class="leave-detail">
					<text class="day">{{ today }}</text>
					<text class="today">今天</text>
				</view>
			</view>
			
			<image src="@/static/travel/ticket-header.png" style="width: 100%;" mode="widthFix" @click="jump"></image>
		</view>
		<image src="@/static/travel/ticket-content.png" mode="widthFix" style="width: 100%; margin-top: 20rpx;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabStyle: {
					left: 0,
					top: 0,
				},
				today: ''
			}
		},
		created() {
			const date = new Date()
			this.today = (date.getMonth() + 1) + '月' + date.getDate() + '日'
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			},
			changeTab(tab) {
				if (tab == 1) {
					this.tabStyle = {
						left: 0,
						borderTopLeftRadius: '20rpx',
						borderTopRightRadius: 0
					}
				} else {
					this.tabStyle = {
						left: "50%",
						borderTopLeftRadius: 0,
						borderTopRightRadius: '20rpx'
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$pageWidth:92vw;
	
	.map-main {
		padding-bottom: 20rpx;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}
	
	.top-tab {
		position: relative;
		width: $pageWidth;
	
		background-color: #F6F6F6;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: normal;
		font-size: 30rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		color: #000000;
	
		.cur-choose {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 50%;
			background-color: #fff;
			transition: all .3s;
			font-weight: 500;
			border-top-left-radius: 20rpx;
		}
	
		.choose-box {
			position: absolute;
			display: flex;
			text-align: center;
			z-index: 20;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	
		.share {
			width: 50%;
		}
	
		.elev {
			width: 50%;
		}
	}
	
	.place {
		display: flex;
		border-bottom: 1rpx solid #F1F1F1;
		margin: 20rpx 30rpx;
		padding-bottom: 20rpx;
		.place-text {
			font-size: 44rpx;
			color: #323232;
			font-weight: normal;
		}
		.img-wrapper {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			.place-img {
				width: 65rpx;
				height: 65rpx;
			}
		}
	}
	.leave-day {
		width: 100%;
		margin: 20rpx 30rpx 0;
		padding-bottom: 20rpx;
		.leave-text {
			font-size: 24rpx;
			color: #9B9B9B;
			font-weight: normal;
			display: block;
			margin-bottom: 10rpx;
		}
		.leave-detail {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: normal;
			.day {
				font-size: 44rpx;
				color: #323232;
				margin-right: 15rpx;
			}
			.today {
				font-size: 24rpx;
				color: #9B9B9B
			}
		}
	}
</style>