<template>
	<view>
		<view class="top-header">
			<view class="mask">

			</view>
			<view class="nav" :style="topStyle">
				<view class="top-bg">

				</view>
				<view class="main">
					<view class="left-info">
						<uni-icons @click="back" type="left" color="black" size="26"></uni-icons>
						用户保护中心
					</view>
					<view class="right-info">
						<uni-icons type="more-filled" size="26" color="black"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<!-- <image src="/static/mine/pro1.png" mode="" class="img"></image> -->
		<image src="../../../../static/mine/user-protect.png" class="img"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topStyle: {
					backgroundColor: 'transparent'
				}
			}
		},
		methods: {

			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			onPageScroll(e) {
				let seconds = 0
				if (e.scrollTop <= 106)
					seconds = e.scrollTop / 106
				else
					seconds = 1
				this.topStyle.backgroundColor = `rgba(255,255,255,${seconds})`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll {
		background-color: #fff !important;
	}

	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		// padding-bottom: 20rpx;
		z-index: 9999;
		width: 100vw;
		box-sizing: border-box;

		.right-img {
			margin-left: 20rpx;
		}

		.mask {
			position: absolute;
			width: 100vw;
			top: 0;
			left: 0;
			padding-top: var(--status-bar-height);
			background-color: rgba(0, 0, 0, .4);
		}

		.top-bg {
			padding-top: var(--status-bar-height);
			background-color: #fff;
		}

		.main {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100vw;
			color: black;
			padding: 30rpx 20rpx;
			padding-top: 10rpx;
			box-sizing: border-box;
			background-color: transparent;
		}

		.left-info {
			display: flex;
			font-size: 34rpx;
			align-items: center;

			.txt {
				margin-left: 20rpx;
			}
		}

		.right-info {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}

	.img {
		padding-top: var(--status-bar-height);
		width: 100vw;
		height: 2300rpx;
		margin-top: 10rpx;
	}
</style>
