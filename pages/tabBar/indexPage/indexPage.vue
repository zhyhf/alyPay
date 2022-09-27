<template>
	<view>
		<view class="uni-center">
			<view class="top-header">
				<view class="left-text" @click="toCity">
					<view class="t-text">
						<text class="city">{{city}}</text>
						<view class="down">
							<image src="../../../static/image/down.png" mode=""></image>
						</view>
					</view>
					<view class="b-text">
						{{weather}} {{wendu}}℃
					</view>
				</view>
				<view class="text-input">
					<input @input="changValue" style="border: 1px solid #ccc;padding-right: 40rpx;" @click="focus" />
					<view class="btn" @click="search">
						搜索
					</view>
				</view>
				<view class="add" @click="showList = !showList">
					<image :src="showList ? close : add" mode="aspectFill"></image>
					<view class="list" v-if="showList">
						<view class="sanjiao">
						</view>
						<view class="sys item" @click="scanInfo">
							<image src="/static/addControl/b.png" mode=""></image>
							<text class="item-t">
								扫一扫
							</text>
						</view>
						<view class="ewm item" @click="shoufukuan">
							<image src="/static/addControl/a.png" mode=""></image>
							<text class="item-t">
								二维码收款
							</text>
						</view>
						<view class="mp item" @click="toMyCard">
							<image src="/static/addControl/c.png" mode=""></image>
							<text class="item-t">
								我的名片
							</text>
						</view>
						<view class="zl item" @click="toIntelligence">
							<image src="/static/addControl/d.png" mode=""></image>
							<text class="item-t">
								智能助理
							</text>
						</view>

					</view>
					<view v-else></view>
				</view>
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
		<view class="more-main">
			<view class="more-chose">
				<view class="chose-item" @click="jump">
					<image mode="scaleToFill" class="image" src="../../../static/image/shenghuo1.png">
					</image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/yundong.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/jiangkang.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/kuaidi.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/shimin.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" @click="toTAccounts" class="image"
						src="../../../static/image/zhuanzhang.png">
					</image>
				</view>
				<view class="chose-item">
					<image @click="toInvestPage" mode="scaleToFill" class="image" src="../../../static/image/phone.png">
					</image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/jiebei.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/movie.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/takeout.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/gaode.png"></image>
				</view>
				<view class="chose-item" @click="jumpToForest">
					<image mode="scaleToFill" class="image" src="../../../static/image/forest.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" style="width: 13.5vw;"
						src="../../../static/image/zhima-credit.png"></image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" style="width: 15.5vw;" src="../../../static/image/wode.png">
					</image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="b-guanggao curMsg">
				<image src="../../../static/image/cMsg.png" mode="widthFix" @click="toMessageBox"></image>
			</view>
			<view class="b-guanggao" @click.stop="jumpToLoading">
				<swiper style="width: 100%;height:200rpx" circular :autoplay="true" :interval="4000">
					<swiper-item style="width: 100%;">
						<image src="@/static/info-card.gif" style="width: 100%;" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/info-card2.gif" style="width: 100%;" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>
			<image src="@/static/image/profit.gif" mode="widthFix" style="width: 100%; margin: 20rpx 0;"
				@click="jumpToLoading"></image>
			<view class="b-guanggao" @click.stop="jumpToLoading">
				<image src="../../../static/image/guanggao.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao" @click="jumpToLoading">
				<image src="../../../static/image/g2.png" mode="widthFix"></image>
			</view>
			<!-- <view class="b-guanggao" @click="toPandemicPage">
				<image src="../../../static/image/g3.png" mode="widthFix"></image>
			</view> -->
			<view class="b-guanggao" @click="jumpToLoading">
				<image src="@/static/image/food.png" mode="widthFix"></image>
			</view>
			<view class="latest-info" @click="toUsagePage">
				<view class="b-image">
					<image src="../../../static/image/msg.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		onShow() {
			this.city = uni.getStorageSync('city') || this.city
			this.showList = false
			uni.request({
				url: 'http://wthrcdn.etouch.cn/weather_mini?city=南京',
				method: 'GET',
				success: res => {
					this.weather = res.data.data.forecast[0].type
					this.wendu = res.data.data.wendu
				},
				fail: () => {
					this.openmsg("警告", "天气接口获取失败")
				},
				complete: () => {}
			});
		},
		data() {
			return {
				wendu: '25',
				weather: '多云',
				close: require("@/static/addControl/close.png"),
				add: require("@/static/icons/add.png"),
				showList: false,
				searchValue: '',
				city: '南京'
			}
		},
		mounted() {
			this.searchValue = ''
			uni.clearStorage()
		},
		methods: {
			jumpToForest() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/antForest/antForest'
				})
			},
			toUsagePage() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/usage/usage'
				})
			},
			jumpToLoading() {
				uni.navigateTo({
					url: '/pages/component/loading/loading'
				})
			},
			toTAccounts() {
				uni.navigateTo({
					url: "/pages/component/TransferAccounts/TransferAccounts"
				})
			},
			toIntelligence() {
				this.showList = false
				uni.navigateTo({
					url: "/pages/component/Intelligence/Intelligence"
				})
			},
			toMyCard() {
				this.showList = false
				uni.navigateTo({
					url: "/pages/component/MyBusCard/MyBusCard"
				})
			},
			toCity() {
				uni.navigateTo({
					url: "/pages/component/ChooseCity/ChooseCity"
				})
			},
			shoufukuan() {
				this.showList = false
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
			toInvestPage() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/investCenter/investCenter'
				});
			},
			changValue(e) {
				this.searchValue = e.detail.value
			},
			focus() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/search/search'
				})
			},
			search() {
				// if (this.searchValue.length <= 0 || this.searchValue.includes("国家"))
				// 	uni.navigateTo({
				// 		url: '/pages/component/SearchInfo/SearchInfo?text=111'
				// 	})
				// uni.showToast({

				// })
			},
			scanInfo() {

				uni.scanCode({
					onlyFromCamera: true,
					success(res) {
						console.log("扫描成功")
						this.showList = false
					},
					fail() {
						this.showList = false
					},
				})
			},
			jump() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/lifePayment/lifePayment'
				})
			},
			toMessageBox() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/latestMessage/latestMessage'
				})
			},
			toPandemicPage() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/pandemic/pandemic'
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
		padding-bottom: 0rpx;
		margin-top: 80rpx;
		padding-top: 90rpx;
		width: 100vw;
		height: 134rpx;
		display: flex;
		background-color: #0C7DFF;
		justify-content: space-around;

		image {
			width: 95rpx;
			height: 105rpx;
		}
	}

	.top-header {
		width: 100vw;
		padding-top: var(--status-bar-height);
		padding-bottom: 10rpx;
		display: flex;
		background-color: #0C7DFF;
		box-sizing: border-box;
		z-index: 99;
		position: fixed;
		top: 0rpx;
		left: 0;

		.add {
			position: relative;
			height: 100%;
			margin-top: 20rpx;

			image {
				width: 47rpx;
				height: 47rpx;
			}


			.sys {
				image {
					// width: 10rpx;
					// height: 10rpx;
				}
			}


			.list {
				position: absolute;
				color: white !important;
				font-size: 30rpx;
				right: 34rpx;
				top: 80rpx;
				z-index: 999;
				width: 36vw;
				height: 30vh;
				border-radius: 16rpx;
				background-color: black;
				padding-left: 20rpx;

				.sanjiao {
					position: absolute;
					right: 10rpx;
					top: -26rpx;
					border-bottom: 15rpx solid black;
					border-right: 15rpx solid transparent;
					border-top: 15rpx solid transparent;
					border-left: 15rpx solid transparent;

				}

				.item {
					display: flex;
					align-items: center;
					width: 100%;
					height: 7.2vh;

				}

				.item-t {
					margin: 0 20rpx;
				}

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}


		}

		.b-text {
			// padding-top: 1rpx;
			font-size: 20rpx;
			// margin-right: -3rpx;
			letter-spacing: 4rpx;
			color: #7DCAFF;
		}

		.t-text {
			display: flex;
			width: 24vw;
			margin-top: 3rpx;
			// justify-content: flex-end;
			padding-left: 36rpx;
			padding-right: 35rpx;
			font-size: 32rpx;
			letter-spacing: 12rpx;

			.city {
				width: 48%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				letter-spacing: 4rpx;
			}

			.down {
				margin-top: -2rpx;

				image {
					width: 20rpx;
					height: 18rpx;
				}
			}
		}

		.left-text {
			color: white;
			// flex: 2;
			width: 24vw;
			box-sizing: border-box;
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
			flex: 1.2;
		}
	}

	.more-main {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 2vw;
		padding-right: 2vw;
		margin-top: 14rpx;
	}

	.more-chose {
		// margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		width: 100vw;
		// margin-right: 2.1vw;
	}

	.chose-item {
		.image {
			margin-top: 1.2vw;
			margin-left: 3.8vw;
			width: 14.5vw;
			height: 14.5vw;
		}
	}
</style>
