<template>
	<view class="tA-container">
		<view class="tA-main">
			<view class="top-title">
				<text class="txt">
					转账
				</text>
				<view class="right-icon">
					<view class="application-right" @click="back">
						<image class="bg" src="@/static/government/bg.png" mode=""></image>
						<view class="more">
							<image src="@/static/government/more.png" mode=""></image>
						</view>
						<view class="close">
							<image src="@/static/government/close.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="tA-main">
				<view class="tA-search">
					<uni-icons class="search-icon" type="search" size="20" color="#ccc"></uni-icons>
					<input class="search" placeholder-style="color:#999999" type="text"
						placeholder="输入手机号、银行卡号、联系人姓名转账">
				</view>
				<view class="tA-choose">
					<view :class="{'top-choose':true,active:!moreFlag}">
						<view class="fixed-height">
							<view class="alypay" @click="toLoading" :key="index" v-for="(item,index) in chooseImg">
								<image :src="item" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<view class="more" @click="moreFlag = !moreFlag">
						<uni-icons :type="moreFlag?'top':'bottom'" size="18" color="#979797"></uni-icons>
					</view>
				</view>
				<view class="tA-bottom">
					<view class="top-tab">
						<view class="cur" @click="changTab(0)">
							<text :class="{tab:true,active:tabIndex == 0}">
								最近
							</text>
						</view>
						<view class="contacts" @click="changTab(1)">
							<text :class="{tab:true,active:tabIndex == 1}">
								联系人
							</text>
						</view>
					</view>
					<view class="bto-list">
						<view class="left-list">
							<template v-for="(item,index) in leftImgs">
								<view @click="toTransferPage(item)" class="list-item"
									v-if="!(tabIndex == 0 && index == 0)" :key="index">
									<image :src="item.url" mode="widthFix"></image>
									<view class="right-info">
										<view class="text">
											{{item.name}}
										</view>
										<view class="phone">
											{{item.phone}}
										</view>
									</view>
								</view>
							</template>
						</view>

					</view>
				</view>
				<view class="no-more">
					没有更多啦~
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				moreFlag: false,
				chooseImg: [
					require('@/static/Taccount/icon/1.png'),
					require('@/static/Taccount/icon/2.png'),
					require('@/static/Taccount/icon/3.png'),
					require('@/static/Taccount/icon/4.png'),
					require('@/static/Taccount/icon/5.png'),
					require('@/static/Taccount/icon/6.png'),
					require('@/static/Taccount/icon/7.png'),
					require('@/static/Taccount/icon/8.png'),
					require('@/static/Taccount/icon/9.png'),
					require('@/static/Taccount/icon/10.png'),
					require('@/static/Taccount/icon/11.png'),
					require('@/static/Taccount/icon/12.png'),
					require('@/static/Taccount/icon/13.png'),
					require('@/static/Taccount/icon/14.png'),
					require('@/static/Taccount/icon/15.png'),
					require('@/static/Taccount/icon/16.png'),
				],
				leftImgs: [{
						url: require('@/static/Taccount/contact/a.png'),
						name: "张劲华(**华)",
						phone: '189******07'
					}, {
						url: require('@/static/Taccount/contact/b.png'),
						name: "孔婷婷(孔婷婷)",
						phone: "186******33"
					},
					{
						url: require('@/static/Taccount/contact/c.png'),
						name: "王磊(王磊)",
						phone: '916***@qq.com'
					}
				]
			};
		},
		methods: {
			toLoading() {
				uni.navigateTo({
					url: "/pages/component/loading/loading"
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			changTab(index) {
				this.tabIndex = index
			},
			toTransferPage(item) {
				uni.navigateTo({
					url: `/pages/component/transferPage/transferPage?url=${item.url}&name=${item.name}&phone=${item.phone}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		position: relative;
		height: var(--status-bar-height);
		width: 100%;
		background-color: #1777FF;
	}

	// .tA-bg {
	// 	position: absolute;
	// 	top: -7vh;
	// 	left: 0;
	// 	width: 100vw;

	// 	image {
	// 		width: 100%;

	// 	}
	// }
	.tA-container {
		position: relative;
	}

	.tA-main {
		position: absolute;
		top: -20rpx;
		left: 0;
		padding-top: var(--status-bar-height);
		background-image: url(../../../static/travel/bg.png);
		background-size: 100% 480rpx;
		background-repeat: no-repeat;
		background-position: 0 -135rpx;
		box-sizing: border-box;
	}

	.top-title {
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 34rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		padding-top: var(--status-bar-height);
		box-sizing: border-box;
		height: 140rpx;
		-webkit-font-smoothing: antialiased;
		background-color: #1777FF;

		// border: 1px solid yellowgreen;

		.txt {
			margin-top: 14rpx;
			padding-top: 10rpx;
		}

		.right-icon {
			position: absolute;
			top: 65rpx;
			right: 10rpx;
			width: 24vw;
		}
	}

	.application-right {
		position: absolute;
		right: 50rpx;
		// top: 35rpx;
		width: 15vw;

		.more {
			position: absolute;
			left: 25rpx;
			top: 8rpx;
			width: 43rpx;
			height: 43rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.close {
			position: absolute;
			left: 94rpx;
			top: 7rpx;
			width: 43rpx;
			height: 43rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.bg {
			width: 150rpx;
			height: 57rpx;
		}
	}

	.tA-main {
		margin-top: 63rpx;
		height: 100vh;

		.tA-search {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100vw;

			.search-icon {
				position: absolute;
				left: 39rpx;
				top: 22rpx;
			}

			.search {
				width: 95vw;
				height: 75rpx;
				border-radius: 16rpx;
				background-color: white;
				padding-left: 65rpx;
				box-sizing: border-box;

			}
		}
	}

	.tA-choose {
		.top-choose {
			margin: 30rpx auto;
			margin-bottom: 0;
			width: 95vw;
			height: 550rpx;
			background-color: white;
			border-radius: 16rpx;
			padding: 20rpx 30rpx 10rpx 30rpx;
			transition: all .2s;
			box-sizing: border-box;
		}

		.fixed-height {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			height: 550rpx;
			box-sizing: border-box;
		}

		.active {
			height: 155rpx;
			overflow: hidden;
		}

		.more {
			width: 95vw;
			padding: 0 30rpx;
			margin: 0 auto;
			margin-top: -8rpx;
			height: 50rpx;
			background-color: #fff;
			border-bottom-left-radius: 16rpx;
			border-bottom-right-radius: 16rpx;
			text-align: center;
			box-sizing: border-box;
			// background-color: red;
		}

		image {
			margin: 0 19rpx;
			// margin-bottom: -30rpx;
			width: 108rpx;
			// height: 106rpx;
			// border: 1px solid red;
		}
	}

	.tA-bottom {
		margin: 30rpx auto;
		margin-bottom: 10rpx;
		width: 95vw;
		border-radius: 16rpx;
		background-color: white;

		.top-tab {
			display: flex;
			width: 100%;
			padding: 20rpx;
			padding-left: 30rpx;
			padding-bottom: 10rpx;
			border-bottom: 2rpx solid #E5E5E5;
			font-size: 30rpx;
			color: #969696;
			height: 100%;
			box-sizing: border-box;

			.tab {
				// width: 16vw;
				display: inline-block;
				margin-right: 60rpx;
				line-height: 100%;
				height: 100%;
			}

			.active {
				font-weight: 700;
				color: #1777FF;
				border-bottom: 6rpx solid #1777FF;
			}
		}
	}

	.bto-list {
		padding-bottom: 25rpx;
	}

	.list-item {
		display: flex;
		align-items: center;
		padding-left: 30rpx;
		// height: 126rpx;

		// border-bottom: 1px solid #ccc;
		.right-info {
			height: 70%;
			display: flex;
			flex: 1;
			padding: 15rpx 0;
			// line-height: 20rpx;
			margin-left: 30rpx;
			flex-direction: column;
			justify-content: space-around;
			border-bottom: 2rpx solid #F7F7F7;
		}

		.phone {
			color: #989898;
			font-weight: 500;
			margin-top: 16rpx;
		}

		image {
			width: 90rpx;
			height: 90rpx;
		}
	}

	.no-more {
		text-align: center;
		color: #a3a3a3;
		font-size: 24rpx;
	}
</style>
