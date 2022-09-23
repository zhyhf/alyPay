<template>
	<view class="wrapper">
		<image class="payment-assistant" src="@/static/image/payment-assistant.png"></image>
		<image class="payment" src="@/static/image/payment.png"></image>
		<image class="sport" src="@/static/image/sport.png"></image>
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
	width: 94vw;
	padding: 20rpx 3vw;
	background-color: #F5F5F5;
	.payment-assistant {
		width: 100%;
		height: 762rpx;
		margin-bottom: 20rpx;
	}
	.payment {
		width: 100%;
		height: 450rpx;
		margin-bottom: 20rpx;
	}
	.sport {
		width: 100%;
		height: 364rpx;
		margin-bottom: 20rpx;
	}
}
</style>
