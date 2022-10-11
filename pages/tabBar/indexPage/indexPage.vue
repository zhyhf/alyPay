<template>
	<view style="position: relative;padding-bottom: 120rpx">
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
						{{weather}} {{wendu}}
					</view>
				</view>
				<view class="text-input">
					<uni-icons class="search" type="search" size="22" color="#ccc"></uni-icons>
					<input @input="changValue" style="padding-right: 40rpx;" @click="focus" />
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
					<image mode="scaleToFill" class="image" src="../../../static/image/sh1.png">
					</image>
					<text style="font-size: 25rpx;margin-left: 0.4vw;margin-top:1vw;margin-top">生活缴费</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/yund1.png"></image>
					<text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">运动</text>
				</view>
				<view class="chose-item" @click="toHealthCode">
					<image mode="scaleToFill" class="image" src="../../../static/image/jiankang1.png"></image>
				    <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">健康码</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/mk1.png"></image>
				     <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">我的快递</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/sm1.png"></image>
				    <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">市民中心</text>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" @click="toTAccounts" class="image"
						src="../../../static/image/zhang1.png">
					</image>
					 <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">转账</text>
				</view>
				<view class="chose-item">
					<image @click="toInvestPage" mode="scaleToFill" class="image" src="../../../static/image/cz1.png">
						 <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">充值中心</text>
					</image>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/jieb1.png"></image>
					 <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">借呗</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/dianying1.png"></image>
				    <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">电影演出</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/ele1.png"></image>
				     <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">饿了么</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/gaode1.png"></image>
				      <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">高德打车</text>
				</view>
				<view class="chose-item" @click="jumpToForest">
					<image mode="scaleToFill" class="image" src="../../../static/image/mayi1.png"></image>
				     <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">蚂蚁森林</text>
				</view>
				<view class="chose-item" @click="jumpToLoading">
					<image mode="scaleToFill" class="image" src="../../../static/image/zmx1.png"></image>
					<text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">芝麻信用</text>
				</view>
				<view class="chose-item" @click="jumpToMine">
					<image mode="scaleToFill" class="image" src="../../../static/image/wx1.png">
					</image>
                   <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">我的小程序</text>
				</view>
				<view class="chose-item" @click="jumpToMore">
					<image mode="scaleToFill" style="width:8.8vw;height:8.8vw" class="image" src="../../../static/image/more1.png"></image>
				    <text style="font-size: 25rpx;margin-top: 0.5vw;">更多</text>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="b-guanggao curMsg">
				<image src="../../../static/image/cMsg.png" mode="widthFix" @click="toMessageBox"></image>
			</view>
			<view class="b-guanggao" @click.stop="jumpToLoading">
				<swiper style="width: 100%;height:180rpx" circular :autoplay="true" :interval="4000">
					<swiper-item style="width: 100%;">
						<image src="@/static/info-card.gif" style="width: 100%;" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image src="@/static/info-card2.gif" style="width: 100%;" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="b-guanggao">
				<image src="@/static/image/consume-title.png" mode="widthFix" style="width: 60%;"></image>
				<view class="consume-box" @click="jumpToLoading">
					<image src="@/static/image/consume1.gif" mode="widthFix" class="consume-item"></image>
					<image src="@/static/image/consume2.gif" mode="widthFix" class="consume-item"></image>
				</view>
			</view>
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
			<view class="latest-info" @click="jumpToLoading">
				<view class="b-image">
					<image src="../../../static/image/msg.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<my-tab-bar></my-tab-bar>
	</view>
</template>
<script>
	// import MyTabBar from '@/components/myTabBar/myTabBar.vue'
	export default {
		// components: {
		// 	MyTabBar
		// },
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			this.city = uni.getStorageSync('city') || this.city
			this.showList = false
			// uni.request({
			// 	url: 'http://wthrcdn.etouch.cn/weather_mini?city=南京',
			// 	method: 'GET',
			// 	success: res => {
			// 		this.weather = res.data.data.forecast[0].type
			// 		this.wendu = res.data.data.wendu
			// 		console.log(this.wendu)
			// 	},
			// 	fail: () => {
			// 		// this.openmsg("警告", "天气接口获取失败")
			// 	},
			// 	complete: () => {}
			// });
			
		},
		data() {
			return {
				weatherArr:['10℃','11℃','13℃','14℃','15℃','16℃','17℃','18℃','19℃','20℃'],
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
			let weather = uni.getStorageSync('weather')
			let currentHour = new Date().getHours()
			if(weather && (currentHour - JSON.parse(weather).time<1))return
			let index =~~(Math.random()*(this.weatherArr.length))
			this.wendu = this.weatherArr[index]
			uni.setStorageSync('weather',JSON.stringify({
				time:new Date().getHours(),
				wendu:this.wendu
			})) 
		},
		methods: {
			toHealthCode(){
				uni.navigateTo({
					url:"/pages/component/healthCode/healthCode"
				})
			},
			jumpToMine() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/mine/mine'
				})
			},
			jumpToMore() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/application/application'
				})
			},
			jumpToForest() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/antForest/antForest'
				})
			},
			toUsagePage() {
				uni.switchTab({
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
					url: '/pages/component/indexPage-relative/latestMessage/loading'
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
	
	.consume-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.consume-item {
			width: 48.5%;
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
			width: 90rpx;
			height: 100rpx;
		}
	}

	.top-header {
		width: 102vw;
		padding-top: var(--status-bar-height);
		padding-bottom: 10rpx;
		display: flex;
		background-color: #0C7DFF;
		box-sizing: border-box;
		z-index: 99;
		position: fixed;
		top: 0rpx;
		left: -12rpx;
		.add {
			position: relative;
			height: 100%;
			margin-top: 18rpx;
			image {
				width: 45rpx;
				height: 45rpx;
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
				// height: vh;
				padding-bottom: 20rpx;
				padding-top: 10rpx;
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
					height: 90rpx;

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
			padding-left: 35rpx;
			padding-right: 33rpx;
			font-size: 34rpx;
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
					width: 18rpx;
					height: 16rpx;
				}
			}
		}

		.left-text {
			color: white;
			width: 25vw;
			box-sizing: border-box;
		}

		.text-input {
			position: relative;
			margin-top: 10rpx;
			display: flex;
			align-items: center;
			position: relative;
			height: 65rpx;
			overflow: hidden;
			border-radius: 12rpx;
			flex: 5;

			.search {
				position: absolute;
				left: 18rpx;
				top: 13rpx;
			}

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
		margin-top: 10rpx;
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
		display: grid;
		text-align: center;
		margin-bottom: 2vw;
		.image {
			margin-top: 3vw;
			margin-left: 6vw;
			margin-right: 5vw;
			width: 8vw;
			height: 8vw;
		}
	}
</style>
