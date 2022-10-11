<template>
	<view class="container">
		<view class="header">
			<uni-icons type="left" color="white" size="26" @click="back"></uni-icons>
			<text class="title">余额</text>
			<view class="header-right" @click="toLoading">
				<uni-icons type="more-filled" size="24" color="white"></uni-icons>
			</view>
		</view>
		<image src="@/static/mine/balance-bg.png" class="balance-bg" mode="widthFix"></image>
		<view class="balance">
			<view class="my-balance">
				<image src="@/static/mine/my-balance.png" class="balance-img" mode="widthFix"></image>
				<view class="btn-wrapper">
					<button class="btn cash" @click="jump('提现')">提现</button>
					<button class="btn invest" @click="jump('充值')">充值</button>
				</view>
			</view>
			<view class="function">
				<image v-for="(item, index) in funList" :key="index" :src="item.img" class="item" mode="widthFix" @click="jump(item.title)"></image>
			</view>
			<image src="@/static/mine/balance-bill.png" class="balance-bill" mode="widthFix" @click="jump('余额变动明细')"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				funList: [
					{
						img: require('@/static/mine/transfer.png'),
						title: '转账'
					},
					{
						img: require('@/static/mine/backup-money.png'),
						title: '备用金'
					},
					{
						img: require('@/static/mine/red-paper.png'),
						title: '红包'
					},
					{
						img: require('@/static/mine/wallet.png'),
						title: '小荷包'
					},
					{
						img: require('@/static/mine/family-card.png'),
						title: '亲情卡'
					}
				]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			toLoading(){
				uni.navigateTo({
					url: `/pages/component/loading/loading?title=''`
				})
			},
			jump(title) {
				uni.navigateTo({
					url: `/pages/component/loading/loading?title=${title}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.header {
		z-index:99;
		width: 100%;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
		display: flex;
		// justify-content: center;
		align-items: center;
		background-color: #3476FE;
		padding-bottom: 20rpx;
		color: white;
		.back {
			// position: absolute;
			// left: 20rpx;
			// top: 10rpx;
			margin:10rpx 20rpx 0 20rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title {
			margin:0rpx 20rpx 0 20rpx;
			font-size: 37rpx;
			font-weight: 500;
		}
		.header-right {
			position: absolute;
			right: 20rpx;
			top: 11rpx;
			.right-text {
				color: #323232;
				margin-right: 20rpx;
				// margin-top: 10rpx;
				font-size: 34rpx;position: relative;
				top: 0rpx;
			}
		}
	}
.container {
	width: 100vw;
	position: relative;
	.balance-bg {
		width: 100vw;
		height: 694rpx !important;
	}
	.balance {
		width: 95vw;
		padding: 10rpx 2.5vw;
		padding-top: 40rpx;
		border-radius: 16rpx;
		position: absolute;
		top: 146rpx;
		.my-balance {
			position: relative;
			.balance-img {
				width: 100%;
			}
			.btn-wrapper {
				width: 100%;
				position: absolute;
				bottom: 60rpx;
				display: flex;
				.btn {
					width: 46%;
				}
				.cash {
					background-color: #fff;
					color: #333;
				}
				.invest {
					background-color: #3476FE;
					color: #fff;
				}
			}
		}
		.function {
			width: 100%;
			border-radius: 16rpx;
			background-color: #fff;
			padding: 28rpx 0;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.item {
				width: 17vw;
			}
		}
		.balance-bill {
			margin-top: 30rpx;
			width: 100%;
		}
	}
}
</style>
