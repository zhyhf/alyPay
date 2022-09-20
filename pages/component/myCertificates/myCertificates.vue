<template>
	<view class="wrapper">
		<view class="header">
			<text class="title">全部证照</text>
			<text class="manage">管理 ></text>
		</view>
		<image src="@/static/government/my-certificate.png" class="certificate"></image>
		<button class="button" @click="add">添加证照</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			add() {
				uni.navigateTo({
					url: '/pages/component/manageCertificates/manageCertificates'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 94vw;
		height: 470rpx;
		margin-top: 15rpx;
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
			position: absolute;
			bottom: 30rpx;
		}
	}
</style>
