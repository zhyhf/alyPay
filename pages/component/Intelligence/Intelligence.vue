<template>
	<view style="padding: 10rpx 0 0 20rpx; background-color:#F4F4F4; min-height: 100vh;box-sizing: border-box;">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="#148EE8" size="26" @click="back"></uni-icons>
				返回
			</view>
			<view class="right-info">
				<view class="txt">
					<image src="/static//icons/robot.png" mode=""></image>
				</view>
			</view>
		</view>
		<image style="width: 26vw;height: 8vh;margin-top: 160rpx;" class="img" src="/static//moreLoading.gif" mode="">
		</image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

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
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: white;
		align-items: center;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		padding-right: 20rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;
		color: #148EE8;

		.left-info {
			display: flex;
			font-size: 32rpx;
			align-items: center;
		}

		.right-info {
			display: flex;
			flex-direction: row;
			margin: 0 auto;

			.txt {
				width: 85rpx;
				height: 80rpx;
				transform: translateX(-50%);

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
