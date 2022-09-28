<template>
	<view class="cycle">
		<view class="map-main">
			<view class="top-tab">
				<view :style="tabStyle" class="cur-choose">

				</view>
				<view class="choose-box">
					<view class="share" @click="changeTab(1)">
						共享单车
					</view>
					<view class="elev" @click="changeTab(2)">
						我的电动车
					</view>
				</view>
			</view>
			<view class="map-contain">
				<map class="map" name=""></map>
			</view>
			<button @click="scan" class="saoma">扫码开锁</button>
			<!-- <view class="bottom-bg">
				<image src="../../../../static/travel/cy.png" mode="widthFix"></image>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabStyle: {
					left: 0,
					top: 0,
				}
			}
		},
		methods: {
			scan() {
				uni.scanCode({
					success(res) {
						console.log(res)
					}
				})
			},
			changeTab(tab) {
				if (tab == 1) {
					this.tabStyle = {
						left: 0,
						borderTopLeftRadius: '20rpx',
						borderTopRightRadius: 0
					}
				} else {
					this.tabStyle = {
						left: "50%",
						borderTopLeftRadius: 0,
						borderTopRightRadius: '20rpx'
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$pageWidth:92vw;

	.map-main {
		padding-bottom: 20rpx;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}

	.top-tab {
		position: relative;
		width: $pageWidth;

		background-color: #F6F6F6;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: normal;
		font-size: 30rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		color: #000000;

		.cur-choose {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 50%;
			background-color: #fff;
			transition: all .3s;
			font-weight: 500;
			border-top-left-radius: 20rpx;
		}

		.choose-box {
			position: absolute;
			display: flex;
			text-align: center;
			z-index: 20;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.share {
			width: 50%;
		}

		.elev {
			width: 50%;
		}
	}

	.map-contain {
		width: 100%;
		position: relative;
		height: 45vh;

		.map {
			position: absolute !important;
			top: 0;
			left: 0;
			width: 100%;
			height: 45vh;
		}
	}

	.saoma {
		margin-top: 30rpx;
		width: 95%;
		margin-bottom: 30rpx;
		background-color: #0C7DFF;
		color: white;
	}

	.bottom-bg {
		width: 100vw;

		image {
			width: $pageWidth;
		}
	}
</style>
