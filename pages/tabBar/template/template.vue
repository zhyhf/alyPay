<template>
	<view>
		<view class="top-header">
			<view class="left-info">
				我的
			</view>
			<view class="right-info">
				<view class="left-img">
					<image style="width: 50rpx; height: 50rpx;" src="@/static/mine/kefu.png" mode=""></image>
				</view>
				<view class="right-img">
					<image style="width: 50rpx; height: 50rpx;" class="bg" src="@/static/mine/setting.png" mode="">
					</image>
				</view>
			</view>
		</view>
		<view class="" style="margin-top: 130rpx;">
			<image style src="../../../static/mine/header.png" style="width: 100vw; height: 160rpx;"
				@click="navigateToInfo">
			</image>
			<view class="content-item" style="margin:10rpx 20rpx 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in topList"
						style="align-items:center;border-radius: 20rpx;height:100rpx;" :title="item.title" showArrow
						link :thumb="item.icon" :to="item.navigatePath" />
				</uni-list>
			</view>
			<view class="content-item" style="margin: 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in middleList"
						style="align-items:center;border-radius: 20rpx;height:102rpx;" :title="item.title" showArrow
						link :thumb="item.icon" :rightText="item.rightText ? item.rightText : ''"
						:to="item.navigatePath" />
				</uni-list>
			</view>
			<view class="content-item" style="margin: 20rpx;">
				<uni-list style="border-radius: 20rpx;">
					<uni-list-item v-for="(item, index) in bottomList"
						style="align-items:center;border-radius: 20rpx;height:106rpx;" :title="item.title" showArrow
						link :thumb="item.icon" :to="item.navigatePath" />
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [{
						title: '支付宝会员',
						icon: require('../../../static/mine/membership.png'),
						navigatePath: '/pages/component/loading/loading?type=1'
					},
					{
						title: '用户保护中心',
						icon: require('../../../static/mine/protect.png'),
						navigatePath: '/pages/component/mine-relative/userProtect/userProtect'
					}
				],
				middleList: [{
						title: '账单',
						icon: require('../../../static/mine/bill.png'),
						navigatePath: '/pages/component/mine-relative/bill/bill'
					},
					{
						title: '总资产',
						icon: require('../../../static/mine/property.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '余额',
						icon: require('../../../static/mine/balance.png'),
						rightText: '111.93',
						navigatePath: '/pages/component/mine-relative/balance/balance'
					},
					{
						title: '余额宝',
						icon: require('../../../static/mine/yuebao.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '花呗',
						icon: require('../../../static/mine/huabei.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '余利宝',
						icon: require('../../../static/mine/yulibao.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '银行卡',
						icon: require('../../../static/mine/credit-card.png'),
						navigatePath: '/pages/component/loading/loading'
					}
				],
				bottomList: [{
						title: '芝麻信用',
						icon: require('../../../static/mine/zhima.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '借呗',
						icon: require('../../../static/mine/jiebei.png'),
						navigatePath: '/pages/component/loading/loading'
					}
				]
			}
		},
		methods: {
			navigateToInfo() {
				uni.navigateTo({
					url: '/pages/component/mine-relative/information/information'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: #1777FF;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-right: 17rpx;
		padding-left: 17rpx;
		box-sizing: border-box;
		color: white;

		.right-img {
			margin-left: 20rpx;
		}

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
			align-items: center;
		}
	}

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

	/deep/.uni-list-item__content-title {
		font-size: 38rpx !important;
	}

	/deep/ .uni-list--border-bottom {
		height: 0px !important;
	}

	/deep/ .uni-list:after {
		height: 0px !important;
	}

	/deep/ .uni-list-item__icon {
		margin-top: 0rpx;
	}

	/deep/ .uni-list-item__extra-text {
		margin-top: 2px;
	}

	/deep/ .uniui-arrowright:before {
		margin-top: -2rpx !important
	}
</style>
