<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
		</view>
		<view class="content">
			<text class="title">请输入变更后的身份信息</text>
			<view class="modify-item">
				<text class="item">姓名</text>
				<input type="text" class="input-text" placeholder="请输入本人姓名">
			</view>
			<view class="modify-item">
				<text class="item">身份证号</text>
				<input type="text" class="input-text" placeholder="请输入身份证号码">
			</view>
			<button class="btn" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			submit() {
				uni.showToast({
					title: '修改成功',
					success() {
						uni.navigateBack()
					}
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
		height: 50rpx;
		.back {
			position: absolute;
			left: 20rpx;
			top: 10rpx;
			width: 34rpx;
			height: 34rpx;
		}
	}
	.content {
		width: calc(100% - 60rpx);
		margin-top: calc(70rpx + var(--status-bar-height));
		padding: 30rpx;
		height: 100vh;
		background-color: #fff;
		.title {
			display: block;
			font-size: 50rpx;
			color: #343434;
		}
		.modify-item {
			margin: 30rpx 0;
			.item {
				display: block;
				margin-bottom: 20rpx;
				margin-left: 18rpx;
				color: #343434;
			}
			.input-text	{
				height: 100rpx;
				border: 1rpx solid #E4E4E4;
				margin: 10rpx;
				font-size: 40rpx;
				padding-left: 20rpx;
				border-radius: 14rpx;
				.input-placeholder {
					color: #CACACA;
					font-weight: normal;
				}
			}
		}
		.btn {
			width: 100%;
			height: 100rpx;
			margin-top: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #F6F6F6;
			color: #969696;
			font-size: 38rpx;
		}
	}
}
</style>
