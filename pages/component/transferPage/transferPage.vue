<template>
	<view class="transfer-container">
		<view class="top-status-bar">
			<view class="icon">
				<uni-icons @click="back" type="left" size="24"></uni-icons>
				<text class="txt">转账到支付宝账户</text>
			</view>
			<view class="right-text">
				转账记录
			</view>
		</view>
		<view class="main-container">
			<view class="top-header">
				<image :src="url" mode=""></image>
				<view class="right-info">
					<view class="name">
						{{name}}
					</view>
					<view class="phone">
						{{phone}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			const {
				name,
				phone,
				url
			} = options
			this.name = name
			this.phone = phone
			this.url = url
		},
		data() {
			return {
				name: '',
				url: '',
				phone: ''
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.transfer-container {
		width: 100vw;
	}

	.top-status-bar {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		width: 100vw;
		padding: 25rpx;
		box-sizing: border-box;
		box-shadow: 0 2rpx 1rpx 1rpx #ccc;
		font-size: 32rpx;

		.right-text {
			font-size: 30rpx;
		}

		.icon {
			display: flex;
			align-items: center;
		}
	}

	.top-header {
		width: 100vw;
		margin-top: 30vh;
		background-color: red;
	}
</style>
