<template>
	<view class="container" style="background-color: white;min-height: 100vh;">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					添加证照
				</view>
			</view>
			<view class="right-info">
				<view class="left-img">
					<image @click="toLoading" style="width: 56rpx; height: 56rpx;margin-right: 12rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img" style="position: relative;margin-right: 16rpx;">
					<image @click="toLoading" style="width: 142rpx; height: 56rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
					<view class="more" @click="toLoading">
						<image src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close" @click="back">
						<image src="@/static/government/closeBlack.png"></image>
					</view>
				</view>
			</view>
		</view>
		<image v-if="index === 3" src="@/static/government/shenfen.png" class="img"></image>
		<image v-if="index === 4" src="@/static/government/hukou.png" class="img"></image>
		<button class="relative-btn" @click="toRelative"
			style="background-color: darkred; color: #fff; margin-top: 30rpx;">授权关联</button>
		<button class="relative-btn" @click="abandonRelative">放弃关联</button>
		<uni-popup ref='popup' type="center" :animation="false" :maskClick="true">
			<text>关联成功！</text>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0
			}
		},
		mounted() {
			this.index = uni.getStorageSync('selectIndex')
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toLoading(){
				uni.navigateTo({
					url:'/pages/component/loading/loading'
				})
			},
			toRelative() {
				let that = this
				uni.showToast({
					title: '关联成功',
					success() {
						let selectIndex = uni.getStorageSync('selectIndex')
						let selectArr
						if (uni.getStorageSync('selectArr')) {
							selectArr = JSON.parse(uni.getStorageSync('selectArr'))
						} else {
							selectArr = []
						}
						if (selectArr.indexOf(selectIndex) === -1) {
							selectArr.push(selectIndex)
						}
						uni.setStorageSync('selectArr', JSON.stringify(selectArr))
						setTimeout(() => {
							// uni.navigateBack({
							// 	delta:3
							// })
							uni.navigateTo({
								url: `/pages/component/myCertificates/myCertificates?index=${that.index}`
							})
						}, 1500)
					}
				})
			},
			abandonRelative() {
				uni.navigateBack()
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

	.container {
		padding: 0 30rpx;

		.img {
			width: calc(100vw - 60rpx);
			height: 720rpx;
			padding-top: 145rpx;
		}

		.relative-btn {
			margin-bottom: 30rpx;
			color: #333;

			&:first-child {
				color: #fff;
				background-color: darkred;
			}
		}
	}
</style>
