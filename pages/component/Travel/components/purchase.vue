<template>
	<view class="wrapper">
		<view class="top">
			<image src="@/static/travel/12306-head.png" mode="widthFix" style="width: 100%;"></image>
			<view class="leave-detail">
				<text class="day">{{ today }}</text>
				<text class="today">今天</text>
			</view>
			<image src="@/static/travel/12306-btn.png" mode="widthFix" class="btn" @click="jump"></image>
		</view>
		<image src="@/static/travel/2.png" mode="widthFix" style="width: 100%; margin-top: 20rpx;"></image>
		<image src="@/static/travel/3.png" mode="widthFix" style="width: 100%; margin-top: 10rpx;"></image>
	</view>
</template>

<script>
	export default {
		name: 'Purchase',
		data() {
			return {
				today: ''
			}
		},
		created() {
			const date = new Date()
			this.today = (date.getMonth() + 1) + '月' + date.getDate() + '日'
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 94vw;
		.top {
			width: 100%;
			position: relative;
			border: 1px soild red;
			.leave-detail {
				position: absolute;
				top: 260rpx;
				left: 50rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-weight: normal;
				.day {
					font-size: 44rpx;
					color: #323232;
					margin-right: 15rpx;
				}
				.today {
					font-size: 24rpx;
					color: #323232;
				}
			}
			.btn {
				width: 100%;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
	}
</style>