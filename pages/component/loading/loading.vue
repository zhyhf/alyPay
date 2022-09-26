<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header" v-if="showHeader">
			<view class="left">
				<image src="@/static/image/back.png" class="back" @click="back"></image>
				<text class="text">{{ title }}</text>
			</view>
			<view class="right-icon">
				<view class="application-right">
					<image class="bg" src="@/static/government/p2.png" mode=""></image>
				</view>
			</view>
		</view>
		<image :src="loadingSrc" class="loading" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: [
					require('@/static/loading.gif'),
					require('@/static/loading2.gif'),
					require('@/static/loading3.gif')
				],
				loadingSrc: require('@/static/loading.gif'),
				title: '加载中 ...',
				showHeader: false
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		},
		onLoad(props) {
			props.type && (this.loadingSrc = this.loading[props.type])
			if (props.title && props.title.length > 0) {
				this.title = props.title
				this.showHeader = true
			}
			uni.setNavigationBarTitle({
				title: this.title
			})
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: #fbfbfb;
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
					width: 36rpx;
					height: 36rpx;
					margin-right: 10rpx;
				}
				.text {
					font-size: 36rpx;
					font-weight: 500;
				}
			}
			
			// .home {
			// 	width: 44rpx;
			// 	height: 44rpx;
			// 	position: absolute;
			// 	top: 52rpx;
			// 	left: 38rpx;
			// }
		
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
