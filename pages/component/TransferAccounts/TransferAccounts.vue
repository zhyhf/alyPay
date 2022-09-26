<template>
	<view class="tA-container">
		<view class="tA-bg">
			<image src="../../../static/travel/bg.png" mode="widthFix"></image>
		</view>
		<view class="tA-main">
			<view class="status_bar">
				<!-- 占位 -->
			</view>
			<view class="top-title">
				转账
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
					<uni-icons class="search-icon" type="search" size="24" color="#646464"></uni-icons>
					<input class="search" type="text">
				</view>
				<view class="tA-choose">
					<view class="top-choose">
						<view class="alypay item" @click="toLoading">
							<image src="@/static/Taccount/icon/1.png" mode="widthFix"></image>
						</view>
						<view class="bank item" @click="toLoading">
							<image src="@/static/Taccount/icon/2.png" mode="widthFix"></image>
						</view>
						<view class="red item" @click="toLoading">
							<image src="@/static/Taccount/icon/3.png" mode="widthFix"></image>
						</view>
						<view class="log item" @click="toLoading">
							<image src="@/static/Taccount/icon/4.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="more">
						<uni-icons type="bottom" size="18"></uni-icons>
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
									<image :src="item.url" mode=""></image>
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
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

	.tA-bg {
		position: fixed;
		top: -7vh;
		left: 0;
		width: 100vw;

		image {
			width: 100%;

		}
	}

	.tA-main {
		position: absolute;
		top: 0;
		left: 0;
	}

	.top-title {
		// border-bottom: 1px solid yellow;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 32rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		padding-top: var(--status-bar-height);
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: #1777FF;
		// border-bottom: 1px solid yellowgreen;

		.right-icon {
			position: absolute;
			top: 65rpx;
			right: 10rpx;
			width: 24vw;
		}
	}

	.application-right {
		position: absolute;
		right: 4rpx;
		// top: 35rpx;
		width: 15vw;

		.more {
			position: absolute;
			right: 66rpx;
			top: 5rpx;
			width: 30rpx;
			height: 30rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.close {
			position: absolute;
			right: 10rpx;
			top: 5rpx;
			width: 30rpx;
			height: 30rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.bg {
			width: 120rpx;
			height: 50rpx;
		}
	}

	.tA-main {
		margin-top: 74rpx;
		height: 100vh;

		.tA-search {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 100vw;

			.search-icon {
				position: absolute;
				left: 30rpx;
				top: 8rpx;
			}

			.search {
				width: 95vw;
				height: 75rpx;
				border-radius: 16rpx;
				background-color: white;
			}
		}
	}

	.tA-choose {
		.top-choose {
			margin: 30rpx auto;
			margin-bottom: 0;
			display: flex;
			justify-content: space-around;
			width: 95vw;
			background-color: white;
			border-radius: 16rpx;
			padding-bottom: 10rpx;
			padding-top: 20rpx;
		}

		.more {
			width: 95vw;
			margin: 0 auto;
			margin-top: -8rpx;
			height: 60rpx;
			background-color: #fff;
			border-bottom-left-radius: 16rpx;
			border-bottom-right-radius: 16rpx;
			text-align: center;
		}

		image {
			width: 140rpx;
			height: 130rpx;
		}
	}

	.tA-bottom {
		margin: 30rpx auto;
		width: 95vw;
		border-radius: 16rpx;
		background-color: white;

		.top-tab {
			display: flex;
			width: 100%;
			padding: 20rpx;
			padding-bottom: 10rpx;
			border-bottom: 2rpx solid #E5E5E5;
			font-size: 30rpx;
			color: #ccc;
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
		padding-left: 10rpx;
		// height: 126rpx;

		// border-bottom: 1px solid #ccc;
		.right-info {
			height: 100%;
			display: flex;
			flex: 1;
			padding: 25rpx 0;
			// line-height: 20rpx;
			margin-left: 30rpx;
			flex-direction: column;
			justify-content: space-around;
			border-bottom: 2rpx solid #F7F7F7;
		}

		.phone {
			color: #ccc;
			font-weight: 700;
			margin-top: 16rpx;
		}

		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
