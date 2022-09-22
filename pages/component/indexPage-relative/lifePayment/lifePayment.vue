<template>
	<view class="wrapper">
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
		width: 96vw;
		padding: 0 2vw;
		background-color: #F5F5F5;
		.card-list {
			width: 100%;
			height: 580rpx;
			margin-bottom: 10rpx;
		}
		.auto-pay {
			width: 100%;
			height: 150rpx;
			margin-bottom: 10rpx;
		}
		.home-service {
			width: 100%;
			height: 1250rpx;
			margin-bottom: 10rpx;
		}
	}
</style>
