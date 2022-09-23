<template>
	<view style="width: 100vw;background-color: white;">
		<view class="status_bar">
			<view class="border">

			</view>
		</view>
		<view class="top-title">
			国家政务服务平台(试运行)
			<view class="right-icon">
				<view class="application">
					<image src="@/static/government/tihuan.png" mode=""></image>
				</view>
				<view class="application-right">
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
		<view class="gov-header">
			<view class="userPosInfo">
				<view class="left-info">
					<view class="province item" @click="toChoseCity">
						{{gCity}}
					</view>
					<view class="spe" @click="toChoseCity">

					</view>
					<view class="temp item" style="display: flex;">
						<image class="yun" src="@/static/government/yun.png" mode=""></image>
						25℃
					</view>
				</view>
				<view class="right-info">
					<view class="header" @click="toMyInfo">
						<image src="@/static/image/header.png" mode=""></image>
					</view>
					<view class="user-name">
						Hi,**帅
					</view>
				</view>
			</view>
			<view class="search">
				<uni-icons class="search-icon" type="search" size="26" color="#6F6F6F"></uni-icons>
				<input type="text">
				<view class="search-btn">
					<text class="spe">|</text> 搜索
				</view>
			</view>
		</view>

		<view class="content">
			<!-- <image> -->
			<!-- <image src="@/static/government/service.png" class="gov-service"></image> -->
			<view class="slider-top" style="position: relative;">
				<swiper :current="index" :disable-touch="false" style="height: 20vh;margin-top: 5rpx;" circular
					:indicator-dots="false" :autoplay="true" :interval="15000">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item,index) in topSliderList" :key="index">
						<image style="width: 100%;height: 100%;" :src="item" mode="widthFix"></image>
					</swiper-item>
				</swiper>
				<view disable-touch="false" class="app-line" style="position: absolute;bottom: 4.5vh;z-index: 999;">
					<view v-for="(item,i) in topSliderList.length" :key="i"
						:class="index===i ? 'line-item line-item-active' : 'line-item'"></view>
				</view>
			</view>
			<view class="app-container" style="margin-top: -3.5vh;">
				<view class="app-wrapper" :style="sliderStyle">
					<view class="app-item" v-for="(item, index) in appLists" :key="index">
						<image :src="item" style="height: 100%; width: 100%;"></image>
					</view>
				</view>
				<view class="app-line">
					<view :class="!flag ? 'line-item line-item-active' : 'line-item'"></view>
					<view :class="flag ? 'line-item line-item-active' : 'line-item'"></view>
				</view>
			</view>
			<image src="@/static/government/life.png" class="gov-life"></image>
			<view class="certificate">
				<view class="certificate-header">
					<text class="certificate-title">我的证照</text>
					<text class="certificate-all" @click="jumpToAll">全部 ></text>
				</view>
				<image src="@/static/government/my-certificate.png" class="certificate-item"></image>
			</view>
			<view class="prefecture">
				<view class="prefecture-header">
					<text class="prefecture-title">专区</text>
					<text class="prefecture-all">全部 ></text>
				</view>
				<view class="item-wrapper">
					<image v-for="(item, index) in serviceList" :key="index" :src="item" class="item"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				gCity: '江苏',
				flag: false,
				sliderStyle: {
					transform: 'translateX(0)'
				},
				topSliderList: [
					require("@/static/government/slider.png"),
					require("@/static/government/tian.png"),
					require("@/static/government/y.png"),
					require("@/static/government/w.png"),
					require("@/static/government/q.png"),
					require("@/static/government/o.png"),
				],
				appLists: [
					require('@/static/government/edu.png'),
					require('@/static/government/yphoon.png'),
					require('@/static/government/health.png'),
					require('@/static/government/institution.png'),
					require('@/static/government/level.png'),
					require('@/static/government/money.png'),
					require('@/static/government/money-loan.png'),
					require('@/static/government/nucleic.png'),
					require('@/static/government/person.png'),
					require('@/static/government/scan.png'),
					require('@/static/government/weather.png'),
					require('@/static/government/vaccinum.png'),
					require('@/static/government/info-search.png'),
					require('@/static/government/internet.png'),
					require('@/static/government/big-data.png'),
					require('@/static/government/medical-info.png'),
				],
				serviceList: [
					require('@/static/government/exam.png'),
					require('@/static/government/job.png'),
					require('@/static/government/food-chain.png'),
					require('@/static/government/small-enterprise.png')
				]
			}
		},
		onShow() {
			this.gCity = uni.getStorageSync("pro") || "江苏"
		},
		mounted() {
			setInterval(() => {
				if (this.index == this.topSliderList.length - 1) this.index = 0
				else this.index++
			}, 2000)
			setInterval(() => {
				this.sliderStyle = {
					transform: !this.flag ? 'translateX(-93vw)' : 'translateX(0)'
				}
				this.flag = !this.flag
			}, 10000)
		},
		methods: {
			toChoseCity() {
				uni.navigateTo({
					url: "/pages/component/CCityChose/CCityChose"
				})
			},
			jumpToAll() {
				uni.navigateTo({
					url: "/pages/component/extUI/extUI"
				})
			},
			toMyInfo() {
				uni.navigateTo({
					url: "/pages/component/MyInfo/MyInfo"
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
		background-color: #D81706;
		border-bottom: #D81706;

		.border {
			position: absolute;
			display: inline-block;
			bottom: -2rpx;
			left: 0;
			width: 100vw;
			height: 10rpx;
			z-index: 999;
			background-color: #D81706;
		}
	}

	.application {
		position: absolute;
		top: 35rpx;

		image {
			width: 50rpx;
			height: 50rpx;
		}
	}

	.application-right {
		position: absolute;
		right: 4rpx;
		top: 35rpx;
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

	.top-title {
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
		background-color: #D81706;

		.right-icon {
			position: absolute;
			top: 30rpx;
			right: 10rpx;
			width: 24vw;
		}
	}

	.gov-header {
		position: relative;
		width: 102%;
		margin-left: -2rpx;
		height: 488rpx;
		margin-top: -2rpx;
		// background-color: red;
		color: #FDFDFD;
		font-size: 32rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background: url('@/static/government/header.png');
		background-size: 100% 100%;
		margin-bottom: 20rpx;

		// background-color: white;
	}

	.search {
		display: flex;
		position: absolute;
		bottom: 0rpx;
		width: 100vw;
		z-index: 10;
		justify-content: center;
		// margin: 0 auto;

		.search-btn {
			position: absolute;
			right: 80rpx;
			top: 20rpx;
			color: red;

			.spe {
				padding-right: 15rpx;
				// font-size: 80rpx;
			}
		}

		.search-icon {
			position: absolute;
			top: 20rpx;
			left: 30rpx;
			z-index: 999;
			// background-color: #0493F3;
		}

		input {
			margin-right: 60rpx;
			padding-left: 40rpx;
			width: 75vh;
			height: 88rpx;
			background-color: white;
			border-radius: 6rpx;
			box-shadow: 1rpx 2rpx 0 4rpx rgba(0, 0, 0, .1);
			color: #6f6f6f !important;
			box-sizing: border-box;
		}
	}

	.userPosInfo {
		margin-top: 40rpx;
		align-items: center;
		display: flex;
		justify-content: space-between;
		height: 6vh;

		.left-info {
			position: relative;
			display: flex;
			width: 44vw;
			height: 100%;
			align-items: center;
			box-sizing: border-box;

			.province {
				position: relative;
				width: 34rpx;
				margin-right: 30rpx;
				text-align: right;
				// background-color: blue;
				white-space: nowrap;
				overflow: hidden;
				box-sizing: border-box;
				// display: flex;
				// align-items: center;


			}

			.spe {
				width: 4rpx;
				height: 32%;
				margin: 8rpx 70rpx 0 30rpx;
				background-color: #F78C7E;
				position: relative;

				&::before {
					position: absolute;
					// margin: 0 10rpx;
					left: -39rpx;
					top: 9rpx;
					display: inline-block;
					content: '';
					border-top: 12rpx solid #fff;
					border-left: 12rpx solid transparent;
					border-bottom: 12rpx solid transparent;
					border-right: 12rpx solid transparent;
				}
			}

			.yun {
				position: absolute;
				right: 110rpx;
				bottom: 34rpx;
				width: 40rpx;
				height: 40rpx;
			}

			.item {

				width: 50%;
			}
		}

		.right-info {
			align-items: center;
			display: flex;
			justify-content: flex-end;
			width: 40vw;



			.user-name {
				margin-left: 20rpx;
			}

			.header {
				margin-top: 15rpx;
			}

			image {
				width: 60rpx;
				height: 60rpx;
				border: 2px solid #fff;
				border-radius: 50%;
				margin-bottom: 10rpx;
			}
		}
	}

	.content {
		width: 100vw;
		min-height: 100%;
		background-color: #fff;
		position: relative;
		// top: -7.5vh;
		padding: 1vh 3vw;
		box-sizing: border-box;

		.gov-slider {
			width: 94vw;
			height: 171rpx;
		}

		.gov-service {
			width: 94vw;
			height: 136rpx;
			margin-top: 10rpx;
		}

		.app-container {
			width: calc(94vw - 30rpx);
			border: 1px solid #F0F0F0;
			border-radius: 10rpx;
			padding: 20rpx 15rpx;
			margin-top: 15rpx;
			overflow: hidden;
		}

		.app-wrapper {
			width: calc(184vw);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			transition: all .3s;

			.app-item {
				flex-basis: 22vw;
				margin: 15rpx 0;
				height: 180rpx;
			}
		}

		.app-line {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;

			.line-item {
				height: 8rpx;
				width: 12rpx;
				background-color: #E8E6E7;
				margin-right: 10rpx;
			}

			.line-item-active {
				background-color: #0493F3;
				width: 24rpx;
			}
		}

		.gov-life {
			width: 94vw;
			height: 150rpx;
			margin-top: 24rpx;
		}

		.certificate {
			width: 94vw;
			height: 300rpx;
			margin-top: 5rpx;

			.certificate-header {
				height: 80rpx;
				display: flex;
				justify-content: space-between;

				.certificate-title {
					color: #313131;
					font-size: 40rpx;
					font-weight: bold;
				}

				.certificate-all {
					color: darkred;
					font-size: 30rpx;
					position: relative;
					top: 10rpx;
					right: 10rpx;
				}
			}

			.certificate-item {
				width: 100%;
				height: 230rpx;
			}
		}

		.prefecture {
			width: 94vw;
			height: 470rpx;
			margin-top: 24rpx;

			.prefecture-header {
				height: 60rpx;
				display: flex;
				justify-content: space-between;

				.prefecture-title {
					color: #313131;
					font-size: 40rpx;
					font-weight: bold;
				}

				.prefecture-all {
					color: darkred;
					font-size: 30rpx;
					position: relative;
					top: 10rpx;
					right: 10rpx;
				}
			}

			.item-wrapper {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.item {
					flex-basis: 47%;
					height: 190rpx;
					margin-top: 18rpx;
				}
			}
		}
	}
</style>
