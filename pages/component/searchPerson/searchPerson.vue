<template>
	<view class="searchPerson-container">
		<view class="top-header">
			<view class="back" @click="back">
				<uni-icons type="left" size="28"></uni-icons>
			</view>
			<view class="search-input">
				<uni-icons class="search" type="search" size="20" color="#6f6f6f"></uni-icons>
				<input :focus="true" type="text" placeholder="支付宝号/手机号/邮箱">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-header {
		display: flex;
		width: 100vw;
		align-items: center;
		padding: 15rpx 20rpx;
		padding-top: calc(var(--status-bar-height) + 20rpx);
		background-color: white;
		box-sizing: border-box;
		.search-input {
			position: relative;
			flex: 1;
			margin: 0 0 0 20rpx;
			box-sizing: border-box;
			.search {
				position: absolute;
				top: 10rpx;
				left: 22rpx;
			}

			input {
				padding: 10rpx;
				padding-left: 65rpx;

				// padding-right: 5rpx;
				height: 66rpx;
				// border-radius: 16rpx;
				width: 102%;
				// border: 1rpx solid red;
				background-color: rgba(0, 0, 0, .06);
				box-sizing: border-box;
			}
		}
	}
</style>
