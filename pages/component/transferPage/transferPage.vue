<template>
	<view class="transfer-container">
		<view class="top-status-bar">
			<view class="icon">
				<uni-icons @click="back" type="left" size="24"></uni-icons>
				<text class="txt">转账到支付宝账户</text>
			</view>
			<view class="right-text" @click="toTRecords">
				转账记录
			</view>
		</view>
		<view class="main-container">
			<view class="top-header">
				<image class="header" :src="url" mode=""></image>
				<view class="right-info">
					<view class="name">
						{{name}}
					</view>
					<view class="phone">
						{{phone}}
					</view>
				</view>
			</view>
			<view class="bottom-main">
				<view class="main-text">
					转账金额
				</view>
				<view class="main-input">
					<view class="unit">
						￥
					</view>
					<view class="right-input">
						<input confirm-type="转账" :focus="true" type="number">
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			const {
				name,
				phone,
				url
			} = options
			this.name = name
			this.phone = phone
			this.url = url
		},
		data() {
			return {
				name: '',
				url: '',
				phone: '',
				account: {
					w: [{
							total: '09月   支出：8,000.00 收入：0.00',
							url: require('@/static/Taccount/detail/w1.png')
						},
						{
							total: '08月   支出：33,000.00 收入：0.00',
							url: require('@/static/Taccount/detail/w2.png')
						},
						{
							total: '08月   支出：9,000.00 收入：15,000.00',
							url: require('@/static/Taccount/detail/w3.png')
						}
					],
					k: [{
						total: '07月   支出：24,000.00 收入：22,000.00',
						url: require('@/static/Taccount/detail/k.png')
					}],
					z: [{
						total: '2021年11月   支出：0.00 收入：20,000.00',
						url: require('@/static/Taccount/detail/z.png')
					}]
				}
			};
		},
		methods: {
			toTRecords() {
				let account
				if (this.name == '王磊(王磊)') account = JSON.stringify(this.account.w)
				else if (this.name == "孔婷婷(孔婷婷)")
					account = JSON.stringify(this.account.k)
				else if (this.name == "张劲华(**华)")
					account = JSON.stringify(this.account.z)
				uni.navigateTo({
					url: `/pages/component/TransferRecord/TransferRecord?name=${this.name}&phone=${this.phone}&account=${account}`
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F6F6F6 !important;
	}

	.transfer-container {
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
		background-color: #fff;

	}

	.top-status-bar {
		// position: fixed;
		// top: 0;
		// left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		width: 100vw;
		padding: 20rpx;
		padding-top: var(--status-bar-height);
		box-sizing: border-box;
		// box-shadow: 0 2rpx 1rpx 1rpx #ccc;
		font-size: 32rpx;

		.right-text {
			font-size: 30rpx;
		}

		.icon {
			display: flex;
			align-items: center;
		}
	}

	.main-container {}

	.top-header {
		display: flex;
		align-items: center;
		width: 100vw;
		padding: 0 20rpx;
		box-sizing: border-box;
		padding-top: 30rpx;

		.header {
			width: 80rpx;
			height: 80rpx;
		}

		.right-info {
			display: flex;
			padding-left: 30rpx;
			flex-direction: column;
		}

		.name {
			font-size: 32rpx;
		}

		.phone {
			font-size: 26rpx;
			color: #ccc;
		}
	}

	.bottom-main {
		padding: 0 20rpx;
		margin-top: 45rpx;

		.main-text {
			color: #ccc;
		}

		.main-input {
			display: flex;
			align-items: center;
			width: 95vw;
			border-bottom: 1rpx solid #F6F6F6;
			margin: 0 auto;

			.unit {
				padding-top: 30rpx;
				font-size: 50rpx !important;
				width: 60rpx;
				font-weight: 700;
			}

			.right-input {
				flex: 1;
				height: 120rpx;
				// width: 90%;


				input {
					padding: 0;
					margin: 0;
					height: 100%;
					width: 100%;
					font-size: 70rpx;
				}
			}
		}
	}
</style>
