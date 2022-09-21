<template>
	<view class="container">
		<image v-if="index === 3" src="@/static/government/shenfen.png" class="img"></image>
		<image v-if="index === 4" src="@/static/government/hukou.png" class="img"></image>
		<button class="relative-btn" @click="toRelative" style="background-color: darkred; color: #fff; margin-top: 30rpx;">授权关联</button>
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
						let selectArr = JSON.parse(uni.getStorageSync('selectArr')) || []
						if (selectArr.indexOf(selectIndex) === -1) {
							selectArr.push(selectIndex)
						}
						uni.setStorageSync('selectArr', JSON.stringify(selectArr))
						setTimeout(() => {
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
	.container {
		padding: 0 30rpx;
		.img {
			width: calc(100vw - 60rpx);
			height: 800rpx;
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
