<template>
	<view class="wrapper">
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
			
		}
	}
</script>

<style lang="scss" scoped>
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
