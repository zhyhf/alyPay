<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<view class="left">
				<uni-icons type="left" color="black" size="24" @click="back"></uni-icons>
				<text class="text">{{ title }}</text>
			</view>
		</view>
		<image :src="loadingSrc" class="loading" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadingSrc: require('@/static/loading.gif'),
				title: '消息盒子',
			}
		},
		mounted(){
			setTimeout(()=>{
				uni.navigateTo({
					url: "/pages/component/indexPage-relative/latestMessage/latestMessage"
				})
			},20)
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		width: 100vw;
		height: 100vh;
		position: relative;
		margin-top: 6rpx;
		background-color: #fbfbfb;
		.right-info {
			display: flex;
			flex-direction: row;
		}
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #fbfbfb;
			position: fixed;
			left: 0;
			z-index: 99;
		}
		.header {
			// position: fixed;
			// top: 0;
			// left: 0;
			width: 100vw;
			height: 130rpx;
			z-index: 999999;
			color: #333;
			font-size: 32rpx;
			font-weight: 500;
			letter-spacing: 6rpx;
			padding: 30rpx;
			padding-top: var(--status-bar-height);
			box-sizing: border-box;
			background-color: #fbfbfb;
			-webkit-font-smoothing: antialiased;
			
			.left {
				display: flex;
				align-items: center;
				position: absolute;
				top: 50rpx;
				left: 38rpx;
				.back {
					width: 35rpx;
					height: 35rpx;
					margin-right: 10rpx;
				}
				.text {
					font-size: 36rpx;
					font-weight: 500;
				}
			}
			
			.right-icon {
				position: absolute;
				top: 15rpx;
				right: 20rpx;
				width: 24vw;
			}
			.application {
				position: absolute;
				top: 35rpx;
			
				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
			.application-right {
				position: absolute;
				right: 4rpx;
				top: 35rpx;
				width: 15vw;
			
				.more {
					position: absolute;
					right: 66rpx;
					top: 5rpx;
					width: 30rpx;
					height: 30rpx;
			
					image {
						width: 100%;
						height: 100%;
					}
				}
			
				.close {
					position: absolute;
					right: 10rpx;
					top: 5rpx;
					width: 30rpx;
					height: 30rpx;
			
					image {
						width: 100%;
						height: 100%;
					}
				}
			
				.bg {
					width: 140rpx;
					height: 50rpx;
					transform: translateX(-20rpx);
				}
			}
		}
		.loading {
			width: 150rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate3d(-50%, -50%, 0);
		}
	}
</style>
