<template>
	<view>
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					我要纠错
				</view>
			</view>
			<view class="right-info">
				<view class="left-img" @click="toLoading">
					<image style="width: 56rpx; height: 56rpx;margin-right: 12rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img" style="position: relative;margin-right: 16rpx;">
					<image style="width: 142rpx; height: 56rpx;" class="bg" src="@/static/government/p2.png" mode="">
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
		<image @click="toLoading" v-if="index === 8" src="@/static/government/married-error.png" class="image-sty"></image>
		<image @click="toLoading" v-if="index === 9" src="@/static/government/divorce-error.png" class="image-sty"></image>
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
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toLoading(){
				uni.navigateTo({
					url:'/pages/component/loading/loading'
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

	.image-sty {
		margin-top: 160rpx;
		width: 100vw;
		height: 1900rpx;
	}
</style>
