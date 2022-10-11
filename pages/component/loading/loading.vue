<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header" v-if="showHeader">
			<view class="left">
				<uni-icons type="left" color="black" size="24" @click="back"></uni-icons>
			<!-- 	<image src="@/static/image/back.png" class="back" @click="back"></image> -->
				<text class="text">{{ title }}</text>
			</view>
			<view class="right-icon" v-if="showDefaultIcon">
				<view class="application-right">
					<image class="bg" src="@/static/government/p2.png" mode=""></image>
					<view class="more" @click="jumpLoading">
						<image src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close" @click="back">
						<image src="@/static/government/closeBlack.png"></image>
					</view>
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
					require('@/static/loading3.gif'),
					require('@/static/loading4.gif'),
					require('@/static/ant-loading.gif')
				],
				loadingSrc: require('@/static/loading.gif'),
				title: '加载中 ...',
				showHeader: false,
				showDefaultIcon: true,
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			jumpLoading(){
				uni.navigateTo({
					url: `/pages/component/loading/loading?type=1`
				})
			}
		},
		onLoad(props) {
			props.type && (this.loadingSrc = this.loading[props.type])
			props.showDefaultIcon && (this.showDefaultIcon = this.loading(props.showDefaultIcon))
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
		margin-top: 6rpx;
		background-color: #fbfbfb;
		.right-info {
			display: flex;
			flex-direction: row;
		}
		// .status_bar {
		// 	height: var(--status-bar-height);
		// 	width: 100%;
		// 	background-color: #fbfbfb;
		// 	position: fixed;
		// 	left: 0;
		// 	z-index: 99;
		// }
		.header {
			// position: fixed;
			// top: 0;
			// left: 0;
			width: 100vw;
			height: 150rpx !important;
			z-index: 999999;
			color: #333;
			font-size: 32rpx;
			font-weight: 500;
			letter-spacing: 6rpx;
			padding: 30rpx;
			padding-top: calc(var(--status-bar-height) + 20rpx);
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
			
			// .home {
			// 	width: 44rpx;
			// 	height: 44rpx;
			// 	position: absolute;
			// 	top: 52rpx;
			// 	left: 38rpx;
			// }
		
			.right-icon {
				position: absolute;
				top: 19rpx;
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
					right: 76rpx;
					top: -8rpx;
					width: 30rpx;
					height: 10rpx;
			
					image {
						width: 100%;
						height: 100%;
					}
				}
			
				.close {
					position: absolute;
					right: 10rpx;
					top: 5rpx;
					width: 36rpx;
					height: 36rpx;
			
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
