<template>
	<view class="wrapper">
		<swiper
			class="swiper"
			circular
			autoplay
			:interval="interval"
			:duration="1000"
			vertical
		>
			<swiper-item>
				<view class="life-item">
					<image src="@/static/image/energy.png" class="icon-item"></image>
					<text class="item-text">水电燃缴费得绿色能量</text>
					<text class="amount">162g</text>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="life-item">
					<image src="@/static/image/zhimafen.png" class="icon-item"></image>
					<text class="item-text">水电燃缴费有助于涨芝麻分</text>
				</view>
			</swiper-item>
		</swiper>
		<image class="card-list" src="@/static/image/card-list.png"></image>
		<image class="auto-pay" src="@/static/image/auto-pay.png"></image>
		<image class="home-service" src="@/static/image/home-service.png"></image>
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
	.wrapper {
		width: 95vw;
		padding: 15rpx 2.5vw;
		background-color: #F5F5F5;
		.swiper {
			width: 99.8%;
			height: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			transform: translateY(10rpx);
			background-color: #fff;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			padding-top: 10rpx;
			.life-item {
				width: 100%;
				height: 50rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.icon-item {
					width: 36rpx;
					height: 36rpx;
					margin-right: 10rpx;
					position: relative;
					// top: 4rpx;
				}
				.item-text {
					font-size: 26rpx;
					position: relative;
					top: -2.5rpx;
					color: #333333;
				}
				.amount {
					font-size: 30rpx;
					color: #208111;
					position: relative;
					top: -2.5rpx;
					left: 8rpx;
					font-weight: bold;
				}
			}
			// .swiper-item {
			// 	width: 44%;
			// 	height: 50rpx;
			// 	text-align: center;
			// 	position: relative;
			// 	left: 50%;
			// 	transform: translateX(-50%);
			// }
			// /deep/.uni-swiper-slide-frame {
			// 	display: flex;
			// 	justify-content: center;
			// 	// align-items: center;
			// 	uni-swiper-item {
			// 		width: 44% !important;
			// 		// height: 50rpx !important;
			// 	}
			// 	.swiper-item {
			// 		width: 100%;
			// 		height: 50rpx;
			// 		text-align: center;
			// 	}
			// }
		}
		.card-list {
			width: 100%;
			height: 548rpx;
			margin-bottom: 10rpx;
		}
		.auto-pay {
			width: 100%;
			height: 145rpx;
			margin-bottom: 10rpx;
		}
		.home-service {
			width: 100%;
			height: 1230rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
