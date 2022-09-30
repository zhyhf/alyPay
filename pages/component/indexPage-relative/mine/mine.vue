<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">我的小程序</text>
			<view class="header-right">
				<uni-icons class="right-icon" type="gear" size="30" color="#333" @click="jumpToLoading"></uni-icons>
			</view>
		</view>
		<view v-for="(item, index) in list" :key="index" :class="!index ? 'card first-card' : 'card'">
			<text v-if="!index" class="more-text" @click="more">更多 ></text>
			<text class="card-title">{{ item.title }}</text>
			<view class="content">
				<view class="content-item" v-for="(icon, i) in item.app" :key="i">
					<image :src="icon" class="icon" mode="widthFix" @click="toApp(item.title, i)"></image>
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
					{
						title: '最近使用',
						app: [
							require('@/static/image/shenghuo1.png'),
							require('@/static/image/yundong.png'),
							require('@/static/image/jiangkang.png'),
							require('@/static/image/kuaidi.png'),
							require('@/static/image/shimin.png'),
							require('@/static/image/zhuanzhang.png'),
							require('@/static/image/phone.png'),
							require('@/static/image/jiebei.png')
						]
					},
					{
						title: '我的收藏',
						app: [
							require('@/static/image/movie.png'),
							require('@/static/image/takeout.png'),
							require('@/static/image/gaode.png'),
							require('@/static/image/forest.png')
						]
					},
				]
			}
		},
		methods: {
			more() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/all/all'
				})
			},
			toApp(title, index) {
				if (title === '最近使用') {
					if (index === 0) {
						uni.navigateTo({
							url: '/pages/component/indexPage-relative/lifePayment/lifePayment'
						})
					} else if (index === 5) {
						uni.navigateTo({
							url: "/pages/component/TransferAccounts/TransferAccounts"
						})
					} else if (index === 6) {
						uni.navigateTo({
							url: '/pages/component/indexPage-relative/investCenter/investCenter'
						});
					} else {
						uni.navigateTo({
							url: '/pages/component/loading/loading?type=1'
						})
					}
				} else if (title === '我的收藏') {
					if (index === 3) {
						uni.navigateTo({
							url: '/pages/component/indexPage-relative/antForest/antForest'
						})
					} else {
						uni.navigateTo({
							url: '/pages/component/loading/loading?type=1'
						})
					}
				} else {
					uni.navigateTo({
						url: '/pages/component/loading/loading?type=1'
					})
				}
			},
			back() {
				uni.navigateBack()
			},
			jumpToLoading() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
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
		background-color: #EFEFF4;
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
		background-color: #EFEFF4;
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
	.card {
		margin: 20rpx;
		background-color: #fff;
		border-radius: 20rpx;
		z-index: 9;
		position: relative;
		.more-text {
			color: #9B9B9B;
			font-size: 28rpx;
			position: absolute;
			right: 25rpx;
			top: 23rpx;
		}
		.card-title {
			font-size: 34rpx;
			font-weight: 500;
			display: inline-block;
			margin: 20rpx;
		}
		.content {
			display: flex;
			flex-wrap: wrap;
			.content-item {
				width: 25%;
				.icon {
					width: 70%;
					margin: 6rpx 0 6rpx 15%;
				}
			}
		}
	}
	.first-card {
		margin-top: calc(100rpx + var(--status-bar-height));
	}
}
</style>
