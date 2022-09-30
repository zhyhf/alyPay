<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">最近使用</text>
			<view class="header-right">
				<text class="right-text" @click="jumpToLoading">编辑</text>
			</view>
		</view>
		
		<view class="detail">
			<view style="position: relative">
				<input type="text" class="input-text" value="搜索常用的小程序">
				<uni-icons class="right-icon" type="search" size="25" color="#ccc"></uni-icons>
			</view>
			<view class="content">
				<view class="content-item" v-for="(icon, i) in list" :key="i">
					<image :src="icon" class="icon" mode="widthFix" @click="toApp(i)"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					require('@/static/more/icon1.png'),
					require('@/static/more/icon2.png'),
					require('@/static/more/icon3.png'),
					require('@/static/more/icon4.png'),
					require('@/static/more/icon5.png'),
					require('@/static/more/icon6.png'),
					require('@/static/more/icon7.png'),
					require('@/static/more/icon8.png'),
					require('@/static/more/icon9.png'),
					require('@/static/more/icon10.png'),
					require('@/static/more/icon11.png'),
					require('@/static/more/icon12.png'),
					require('@/static/more/icon13.png'),
					require('@/static/more/icon14.png'),
					require('@/static/more/icon15.png'),
					require('@/static/more/icon16.png'),
					require('@/static/more/icon17.png'),
					require('@/static/more/icon18.png'),
					require('@/static/more/icon19.png'),
					require('@/static/more/icon20.png'),
					require('@/static/more/icon21.png'),
					require('@/static/more/icon22.png'),
					require('@/static/more/icon23.png'),
					require('@/static/more/icon24.png'),
					require('@/static/more/icon25.png'),
					require('@/static/more/icon26.png'),
					require('@/static/more/icon27.png'),
					require('@/static/more/icon28.png'),
					require('@/static/more/icon29.png'),
					require('@/static/more/icon30.png'),
					require('@/static/more/icon31.png'),
					require('@/static/more/icon32.png'),
					require('@/static/more/icon33.png'),
					require('@/static/more/icon34.png'),
					require('@/static/more/icon35.png'),
					require('@/static/more/icon36.png'),
					require('@/static/more/icon37.png'),
					require('@/static/more/icon38.png'),
					require('@/static/more/icon39.png'),
					require('@/static/more/icon40.png'),
					require('@/static/more/icon41.png'),
					require('@/static/more/icon42.png'),
					require('@/static/more/icon43.png'),
					require('@/static/more/icon44.png'),
					require('@/static/more/icon45.png'),
					require('@/static/more/icon46.png'),
					require('@/static/more/icon47.png'),
					require('@/static/more/icon48.png'),
					require('@/static/more/icon49.png')
				]
			}
		},
		methods: {
			toApp(index) {
				if (index === 0) {
					uni.navigateTo({
						url: '/pages/component/indexPage-relative/investCenter/investCenter'
					});
				} else if (index === 1) {
					uni.navigateTo({
						url: '/pages/component/indexPage-relative/lifePayment/lifePayment'
					})
				} else if (index === 13) {
					uni.navigateTo({
						url: '/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter'
					})
				} else if (index === 29) {
					uni.navigateTo({
						url: "/pages/component/TransferAccounts/TransferAccounts"
					})
				} else if (index === 40) {
					uni.navigateTo({
						url: '/pages/component/indexPage-relative/antForest/antForest'
					})
				} else {
					uni.navigateTo({
						url: '/pages/component/loading/loading?type=1'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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
			.header-right {
				position: absolute;
				right: 20rpx;
				top: 0;
				.right-text {
					color: #3675DC;
					margin-right: 20rpx;
					font-size: 34rpx;position: relative;
					top: -4rpx;
				}
			}
		}
		.detail {
			background-color: #fff;
			margin-top: calc(70rpx + var(--status-bar-height));
			padding-top: 20rpx;
			.input-text {
				background-color: #F5F5F5;
				border-radius: 16rpx;
				width: calc(95vw - 46rpx);
				margin: 0 2.5vw 20rpx;
				height: 60rpx;
				color: #9A9A9A;
				padding: 10rpx 0 10rpx 50rpx;
			}
			.right-icon {
				position: absolute;
				left: 20rpx;
				top: 15rpx;
			}
			.content {
				display: flex;
				flex-wrap: wrap;
				.content-item {
					width: 25%;
					.icon {
						width: 65%;
						margin: 6rpx 0 6rpx 17.5%;
					}
				}
			}
		}
	}
</style>
