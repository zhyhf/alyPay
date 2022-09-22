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
	width: 96vw;
	padding: 0 2vw;
	background-color: #F5F5F5;
	.payment-assistant {
		width: 100%;
		height: 820rpx;
		margin-bottom: 20rpx;
	}
	.payment {
		width: 100%;
		height: 480rpx;
		margin-bottom: 20rpx;
	}
	.sport {
		width: 100%;
		height: 420rpx;
		margin-bottom: 20rpx;
	}
}
</style>
