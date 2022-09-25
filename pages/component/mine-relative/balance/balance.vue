<template>
	<view class="container">
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
			jump(title) {
				uni.navigateTo({
					url: `/pages/component/loading/loading?title=${title}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container {
	width: 100vw;
	position: relative;
	.balance-bg {
		width: 100vw;
	}
	.balance {
		width: 95vw;
		padding: 10rpx 2.5vw;
		border-radius: 16rpx;
		position: absolute;
		top: 0;
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
