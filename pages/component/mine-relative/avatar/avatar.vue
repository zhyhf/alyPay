<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">设置个人头像</text>
		</view>
		<image src="@/static/mine/my-avatar.png" mode="widthFix" class="img"></image>
		<view class="option-container">
			<view class="option" v-for="(item, index) in list" :key="index" @click="click">
				{{ item }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					'从相册选一张',
					'拍一张照片',
					'设置头像装扮'
				]
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			click() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.wrapper {
	width: 100%;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index:999;
	}
	.header {
		z-index:99;
		width: 100%;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding-bottom: 20rpx;
		.back {
			position: absolute;
			left: 20rpx;
			top: 10rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title {
			font-size: 38rpx;
			font-weight: 500;
		}
	}
	.img {
		width: 100%;
		margin-top: calc(70rpx + var(--status-bar-height));
	}
	.option-container {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		.option {
			padding: 26rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1rpx solid #E4E4E4;
			font-size: 36rpx;
			&:last-child {
				border-color: transparent;
			}
		}
	}
}
</style>
