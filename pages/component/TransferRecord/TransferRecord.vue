<template>
	<view class="transferRecord">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					<view class="name">
						{{name}}
					</view>
					<view class="phone">
						{{phone}}
					</view>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="detail" v-for="(item,index) in account" :key="index">
				<view class="detail-item">
					<view class="total">
						{{item.total}}
					</view>
					<image :src="item.url" mode="widthFix"></image>
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
				account
			} = options
			this.name = name
			this.phone = phone
			this.account = JSON.parse(account)
			console.log(options)
		},
		data() {
			return {
				name: '',
				phone: '',
				account: null
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: white;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		padding-right: 20rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		justify-content: space-between;

		.left-info {
			display: flex;
			font-size: 34rpx;
			align-items: center;

			.txt {
				margin-left: 20rpx;
			}

			.phone {
				font-size: 24rpx;
				color: #171717;
			}
		}

		.right-info {
			display: flex;
			flex-direction: row;
		}
	}

	.container {
		padding-top: 153rpx;
	}

	.detail {
		&-item {
			width: 100vw;

			image {
				width: 100%;
			}

			.total {
				width: 100vw;
				text-align: center;
				color: #9D9D9F;
				line-height: 80rpx;
				height: 80rpx;
				// padding-bottom: 20rpx;
				box-sizing: border-box;
			}
		}
	}
</style>
