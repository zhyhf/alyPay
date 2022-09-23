<template>
	<view>
		<image
			src="../../../static/mine/header.png"
			style="width: 100vw; height: 160rpx;"
			@click="navigateToInfo"
		></image>
		<view class="content-wrapper">
			<view class="content-item" style="margin:10rpx 20rpx 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in topList"
						style="border-radius: 20rpx;height: 80rpx;font-weight: normal;"
						:title="item.title"
						showArrow
						link
						:thumb="item.icon"
						:to="item.navigatePath"
					/>
				</uni-list>
			</view>
			<view class="content-item" style="margin: 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in middleList"
						style="border-radius: 20rpx; height: 80rpx;"
						:title="item.title"
						showArrow
						link
						:thumb="item.icon"
						:rightText="item.rightText ? item.rightText : ''"
						:to="item.navigatePath"
					/>
				</uni-list>
			</view>
			<view class="content-item" style="margin: 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in bottomList"
						style="border-radius: 20rpx;height: 80rpx;"
						:title="item.title"
						showArrow
						link
						:thumb="item.icon"
						:to="item.navigatePath"
					/>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [
					{
						title: '支付宝会员',
						icon: require('../../../static/mine/membership.png'),
						navigatePath: '/pages/component/mine-relative/memberShip/memberShip'
					},
					{
						title: '用户保护中心',
						icon: require('../../../static/mine/protect.png'),
						navigatePath: '/pages/component/mine-relative/userProtect/userProtect'
					}
				],
				middleList: [
					{
						title: '账单',
						icon: require('../../../static/mine/bill.png'),
						navigatePath: '/pages/component/mine-relative/bill/bill'
					},
					{
						title: '总资产',
						icon: require('../../../static/mine/property.png')
					},
					{
						title: '余额',
						icon: require('../../../static/mine/balance.png'),
						rightText: '1000'
					},
					{
						title: '余额宝',
						icon: require('../../../static/mine/yuebao.png')
					},
					{
						title: '花呗',
						icon: require('../../../static/mine/huabei.png')
					},
					{
						title: '余利宝',
						icon: require('../../../static/mine/yulibao.png')
					},
					{
						title: '银行卡',
						icon: require('../../../static/mine/credit-card.png')
					}
				],
				bottomList: [
					{
						title: '芝麻信用',
						icon: require('../../../static/mine/zhima.png')
					},
					{
						title: '借呗',
						icon: require('../../../static/mine/jiebei.png')
					}
				]
			}
		},
		methods: {
			navigateToInfo() {
				uni.navigateTo({
					url : '/pages/component/mine-relative/information/information'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-avatar {
		width: 100vw;
		height: 160rpx !important;
	}
	.content-wrapper {
		width: 100vw;
		// background-color: lightgrey;
		.content-item {
			border-radius: 10rpx;
			margin: 20rpx;
			/deep/.uni-list:after {
				height: 0;
			}
			/deep/.uni-list--border-bottom {
				display: none;
			}
		}
	}
	/deep/.uni-list-item__icon-img {
		margin-right: 20rpx !important;
	}
</style>
