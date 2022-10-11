<template>
	<view class="container" style="background-color: white;min-height: 100vh;">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26"></uni-icons>
				<view class="txt">
					关联证件
				</view>
			</view>
			<view class="right-info">
				<view class="left-img">
					<image style="width: 50rpx; height: 50rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img">
					<image style="width: 130rpx; height: 50rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
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
		padding-right: 20rpx;
		padding-left: 20rpx;
		box-sizing: border-box;

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
