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
				<image src="@/static/image/energy.png" class="swiper-item"></image>
			</swiper-item>
			<swiper-item>
				<image src="@/static/image/zhimafen.png" class="swiper-item"></image>
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
			.swiper-item {
				width: 44%;
				height: 50rpx;
				text-align: center;
				position: relative;
				left: 50%;
				transform: translateX(-50%);
			}
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
