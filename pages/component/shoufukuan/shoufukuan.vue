<template>
	<view class="container">
		<view class="top-header">
			<view class="left-icon">
				<uni-icons @click="back" type="left" color="white" size="24" class="left"></uni-icons>
				<view class="txt">
					收付款
				</view>
			</view>
			<uni-icons type="more" color="white" size="24"></uni-icons>
		</view>
		<view style="padding-top: 140rpx;">
			<image src="../../../static/image/shoufukuanInner.png" mode="widthFix"
				style="display:block;margin:0 auto;width: 93%;"></image>
		</view>
		<uni-card :isShadow="true" mode="basic" :border="false" style="background-color:#4492FF">
			<uni-list>
				<uni-list-item v-for="(item, index) in list"
					style="height: 95rpx;background-color: #4492FF;color:#4492FF" :title="item.title" showArrow link
					:thumb="item.url" thumb-size="base" @click="show(index)" />
			</uni-list>
		</uni-card>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
						title: '二维码收款',
						url: require('@/static/government/shoukuan.png')
					},
					{
						title: '向支付宝或银行卡转账',
						url: require('@/static/government/toMoney.png')
					}
				]
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			show(index) {

			}
		}
	}
</script>

<style scoped lang="scss">
	.top-header {
		position: fixed;
		width: 100vw;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		display: flex;
		align-items: center;
		font-size: 32rpx;
		padding-bottom: 30rpx;
		color: white;
		background-color: #1777FF;
		padding-left: 20rpx;
		padding-right: 20rpx;
		justify-content: space-between;
		box-sizing: border-box;

		.left-icon {
			display: flex;
			align-items: center;
		}

		.txt {
			margin: 0 auto;
		}
	}

	.container {
		background-color: #1777FF !important;
		height: 100%;
	}

	/deep/ .uni-card {
		border-radius: 9px !important;
	}

	/deep/ .uni-list-item__content-title {
		color: #fff;
	}

	/deep/ .uniui-arrowright:before {
		color: #fff;
	}

	/deep/ .uni-list-item__container {
		padding-left: 5px !important;
	}

	/deep/ .uni-list--border-top {
		height: 0px;
	}

	/deep/ .uni-list--border-bottom {
		height: 0px;
	}

	/deep/ .uni-list:after {
		height: 0px;
	}
</style>
