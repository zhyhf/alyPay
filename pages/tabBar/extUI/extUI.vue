<template>
	<view class="container" @click="jump">
		<view class="status_bar"></view>
		<view class="header">
			<view class="detail">
				<text class="text">消息</text>
				<image src="@/static/image/broom.png" class="broom"></image>
			</view>	
			<image src="@/static/image/address-book.png" class="img book"></image>
			<image src="@/static/image/add.png" class="img"></image>
		</view>
		<view class="heaeder-input">
			<input type="text" class="input">
		</view>
		<image src="@/static/image/message1.png" mode="widthFix" class="message1"></image>
		<image src="@/static/image/message2.png" mode="widthFix" class="message2"></image>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	width: 100vw;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		background-color:  #3974f6;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}
	.header {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		background-color:  #3974f6;
		padding-left: 3vw;
		padding-bottom: 20rpx;
		z-index: 99;
		.detail {
			display: flex;
			.text {
				font-size: 36rpx;
				color: #fff;
				font-weight: 500;
			}
			.broom {
				width: 36rpx;
				height: 36rpx;
				margin-left: 18rpx;
				margin-top: 8rpx;
			}
		}
		.img {
			position: absolute;
			width: 40rpx;
			height: 40rpx;
			right: 45rpx;
		}
		.book {
			right:110rpx;
		}
	}
	.heaeder-input {
		width: 100vw;
		background-color: #3974f6;
		padding: 20rpx 0;
		margin-top: -2rpx;
		position: fixed;
		top: calc(70rpx + var(--status-bar-height));
		left: 0; 
		z-index: 99;
		.input {
			width: 95vw;
			height: 60rpx;
			margin-left: 2.5vw;
			border-radius: 20rpx;
			background-color: #fbfbfb;
		}
	}
	.message1 {
		width: 100%;
		margin-top: calc(160rpx + var(--status-bar-height));;
	}
	.message2 {
		width: 100%;
		margin-top: 20rpx;
	}
}
</style>
