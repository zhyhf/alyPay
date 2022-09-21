<template>
	<view>
		<image src="@/static/government/header.png" class="gov-header" @click="toMyInfo"></image>
		<view class="content">
			<image src="@/static/government/slider.png" class="gov-slider">
			<image src="@/static/government/service.png" class="gov-service"></image>
			<view class="app-container">
				<view class="app-wrapper" :style="sliderStyle">
					<view
						class="app-item"
						v-for="(item, index) in appLists"
						:key="index"
					>
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
					<image
						v-for="(item, index) in serviceList"
						:key="index"
						:src="item"
						class="item"
					></image>
				</view>
			</view>
		</view>
     </view>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				sliderStyle: {
					transform: 'translateX(0)'
				},
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
		mounted() {
			setInterval(() => {
				this.sliderStyle = {
					transform: !this.flag ? 'translateX(-93vw)' : 'translateX(0)'
				}
				this.flag = !this.flag
			},5000)
		},
		methods: {
			jumpToAll() {
				uni.navigateTo({
					url: "/pages/component/extUI/extUI"
			     })
			},
			toMyInfo(){
				uni.navigateTo({
					url:"/pages/component/MyInfo/MyInfo"
				})
			}
		}
	  }
</script>

<style lang="scss" scoped>
	.gov-header{
		width: 100vw;
		height: 488rpx;
	}
	.content {
		width: 100vw;
		min-height: 100%;
		background-color: #fff;
		position: relative;
		top: -7.5vh;
		padding: 1vh 3vw;
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