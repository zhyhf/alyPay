<template>
	<view>
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26"></uni-icons>
				<view class="txt">
					我要纠错
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
		<image v-if="index === 8" src="@/static/government/married-error.png" class="image-sty"></image>
		<image v-if="index === 9" src="@/static/government/divorce-error.png" class="image-sty"></image>
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
			this.index = uni.getStorageSync('selectMarried')
		},
		methods: {

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

	.image-sty {
		margin-top: 160rpx;
		width: 100vw;
		height: 1900rpx;
	}
</style>
