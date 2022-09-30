<template>
	<view class="wrapper">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26"></uni-icons>
				<view class="txt">
					我的证照
				</view>
			</view>
			<view class="right-info">
				<view class="left-img">
					<image style="width: 56rpx; height: 56rpx;margin-right: 12rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img" style="position: relative;margin-right: 16rpx;">
					<image style="width: 142rpx; height: 56rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
					<view class="more">
						<image src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close">
						<image src="@/static/government/closeBlack.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="header">
			<text class="title">全部证照</text>
			<text class="manage" @click="jump">管理 ></text>
		</view>
		<!-- <image src="@/static/government/my-certificate.png" class="certificate"></image> -->
		<image v-if="index3" src="@/static/government/shenfen-card.png" class="certificate"></image>
		<image v-if="index4" src="@/static/government/hukou-card.png" class="certificate"></image>
		<button class="button" @click="add">添加证照</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index3: 0,
				index4: 0
			}
		},
		mounted() {
			let arr = JSON.parse(uni.getStorageSync('selectArr')) || []
			console.log(arr)
			if (arr.length > 0) {
				for (const item of arr) {
					if (item === 3) {
						this.index3 = 1
					} else if (item === 4) {
						this.index4 = 1
					}
				}
			}
		},
		methods: {
			jump() {
				const title = '证照管理'
				uni.navigateTo({
					url: `/pages/component/loading/loading?type=1&title=${title}`
				})
			},
			add() {
				uni.navigateTo({
					url: '/pages/component/manageCertificates/manageCertificates'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.more{
		position: absolute;
		top: 2rpx;
		left: 16rpx;
		width: 36rpx;
		height: 10rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.close {
		position: absolute;
		right: 20rpx;
		top: 9rpx;
		width: 34rpx;
		height: 34rpx;
	
		image {
			width: 100%;
			height: 100%;
		}
	}
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: white;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
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
			margin-right: 6rpx;
		}
	}
	.header {
		padding-top: var(--status-bar-height);
	}

	.wrapper {
		width: 94vw;
		height: 470rpx;
		margin-top: 85rpx;
		padding: 0 3vw;
		position: relative;
		height: 100vh;

		.header {
			height: 60rpx;
			display: flex;
			justify-content: space-between;

			.title {
				font-size: 36rpx;
				font-weight: bold;
				position: relative;
				top: 10rpx;
			}

			.manage {
				color: darkred;
				font-size: 30rpx;
				position: relative;
				top: 15rpx;
				right: 10rpx;
			}
		}

		.certificate {
			margin-top: 30rpx;
			width: 94vw;
			height: 240rpx;
		}

		.button {
			width: 94vw;
			height: 90rpx;
			color: white;
			background-color: rgb(163, 51, 42);
			position: fixed;
			bottom: 24rpx;
		}
	}
</style>
