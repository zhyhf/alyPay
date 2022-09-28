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
			<uni-icons class="search" type="search" size="23" color="#ccc"></uni-icons>
			<input type="text" class="input" placeholder="搜索你的好友、最近转账联系人等">
		</view>
		<image src="@/static/image/message1.png" mode="widthFix" class="message1"></image>
		<image src="@/static/image/message2.png" mode="widthFix" class="message2"></image>
		<my-tab-bar></my-tab-bar>
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
	/deep/ .uni-input-placeholder{
		color:#9A9A9A;
		padding-left: 84rpx;
		font-size: 30rpx;
	}
	.search {
		position: absolute;
		left: 40rpx;
		top: 38rpx;
	}
	position: relative;
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
		padding-bottom: 26rpx;
		padding-top: 20rpx;
		z-index: 99;
		.detail {
			display: flex;
			margin-top: 5rpx;
			.text {
				font-size: 38rpx;
				color: #fff;
				font-weight: 500;
			}
			.broom{
				width: 46rpx;
				height: 46rpx;
				margin-left: 18rpx;
				margin-top: 9rpx;
			}
		}
		.img {
			position: absolute;
			width: 47rpx;
			height: 47rpx;
			right: 45rpx;
		}
		.book {
			right:125rpx;
		}
	}
	.heaeder-input {
		width: 100vw;
		background-color: #3974f6;
		padding: 30rpx 0 26rpx 0;
		margin-top: 10rpx;
		position: fixed;
		top: calc(84rpx + var(--status-bar-height));
		left: 0; 
		z-index: 99;
		.input {
			width: 95vw;
			height: 60rpx;
			margin-left: 2.5vw;
			border-radius: 15rpx;
			background-color: #fbfbfb;
		}
	}
	.message1 {
		width: 100%;
		margin-top: calc(196rpx + var(--status-bar-height));;
	}
	.message2 {
		width: 100%;
		margin-top: 20rpx;
	}
}
</style>
