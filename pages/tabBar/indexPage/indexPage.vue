<template>
	<view>
		<view class="uni-center">
			<view class="top-header">
				<view class="left-text">
					<view class="t-text">
						南京
						<view class="down">
							<image src="../../../static/image/down.png" mode=""></image>
						</view>
					</view>
					<view class="b-text">
						多云23℃
					</view>
				</view>
				<view class="text-input">
					<input @input="changValue" style="border: 1px solid #ccc;padding-right: 40rpx;" placeholder="" />
					<view class="btn" @click="search">
						搜索
					</view>
				</view>
				<view class="add">
					<image src="../../../static/icons/add.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="gongneng">
				<view class="g-item" @click="scanInfo">
					<image src="../../../static/image/shao.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item" @click="shoufukuan">
					<image src="../../../static/image/shoufukuan.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item" @click="toTravel">
					<image src="../../../static/image/chuxing.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item" @click="toCardBag">
					<image src="../../../static/image/kabao.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="more-main">
			<view class="more-chose">
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/shenghuo1.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/yundong.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/jiangkang.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/kuaidi.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/shimin.png"></image>
				</view>
				<view class="chose-item">
					<image @click="toNewPage" mode="scaleToFill" class="image" src="../../../static/image/phone.png">
					</image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/wode.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="b-guanggao curMsg">
				<image src="../../../static/image/cMsg.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/info-card.gif" style="height: 180rpx;"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/guanggao.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/g2.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/g3.png" mode="widthFix"></image>
			</view>
			<view class="latest-info">
				<view class="b-image">
					<image src="../../../static/image/msg.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchValue: ''
			}
		},
		mounted() {
			this.searchValue = ''
			uni.clearStorage()
		},
		methods: {
			shoufukuan(){
				uni.navigateTo({
					url: '/pages/component/shoufukuan/shoufukuan'
				});
				},
			toCardBag() {
				uni.navigateTo({
					url: "/pages/component/CardBag/CardBag"
				})
			},
			toTravel() {
				uni.navigateTo({
					url: '/pages/component/Travel/Travel'
				});
			},
			toNewPage() {
				uni.navigateTo({
					url: '/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter'
				});
			},
			changValue(e) {
				this.searchValue = e.detail.value
			},
			search() {
				if (this.searchValue.length <= 0 || this.searchValue.includes("国家"))
					uni.navigateTo({
						url: '/pages/component/SearchInfo/SearchInfo?text=111'
					})
				// uni.showToast({

				// })
			},
			scanInfo() {
				uni.scanCode({
					onlyFromCamera: true,
					success(res) {
						console.log("扫描成功")
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	page {
		padding: 0;
		margin: 0;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.latest-info {
		width: 95vw;
		margin-top: 18rpx;
		margin-bottom: 5rpx;
		border-radius: 16rpx;
		// height: 150rpx;
		background-color: #fff;

		.title {
			padding: 10rpx 0 0 10rpx;
			color: rgba(0, 0, 0, .4);
			font-weight: 700;

		}

		image {
			width: 100%;
		}
	}

	.b-guanggao {
		margin-top: 2vw;
		width: 95vw;

		image {
			width: 100%;
		}
	}

	.gongneng {
		padding-bottom: 20rpx;
		margin-top: -10rpx;
		width: 100vw;
		// height: 150rpx;
		display: flex;
		background-color: #0C7DFF;
		justify-content: space-around;

		image {
			width: 18vw;
			height: 18vw;
		}
	}

	.top-header {
		width: 100vw;
		height: 130rpx;
		display: flex;
		background-color: #0C7DFF;

		.add {
			height: 100%;
			margin-top: 16rpx;

			image {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.b-text {
			// padding-top: 1rpx;
			font-size: 24rpx;
			// margin-right: -3rpx;
			color: #ccc;
		}

		.t-text {
			display: flex;
			margin-top: 3rpx;
			justify-content: flex-end;
			padding-right: 35rpx;
			font-size: 32rpx;
			letter-spacing: 12rpx;

			.down {
				margin-top: -2rpx;

				image {
					width: 18rpx;
					height: 18rpx;
				}
			}
		}

		.left-text {
			color: white;
			flex: 2;
			// font-size: 24rpx;
		}

		.text-input {
			margin-top: 10rpx;
			display: flex;
			align-items: center;
			position: relative;
			height: 65rpx;
			overflow: hidden;
			border-radius: 16rpx;
			flex: 5;

			.btn {
				position: absolute;
				right: 20rpx;
				top: 14rpx;
				padding: 0 5rpx 0 15rpx;
				color: #007AFF;
				// line-height: 70rpx;
				border-left: 1rpx solid #ccc;
			}

			input {
				width: 100%;
				height: 100%;
				text-align: left;
				padding-left: 20rpx;
				background-color: #fff;
			}
		}

		.add {
			flex: 1.3;
		}
	}

	.more-main {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 2vw;
	}

	.more-chose {
		margin: 0 auto;
		margin-top: 20rpx;
		// width: 98vw;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;

		width: 100vw;
		margin-right: 4.1vw;
		// justify-content: space-between; 
		// background-color: #f7f7f7;
	}

	.chose-item {
		margin: 2.3vw;
		// width: 14.5vw;
		// height: 14.5vw;

		.image {
			width: 14.5vw;
			height: 14.5vw;
		}
	}
</style>
