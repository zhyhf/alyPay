<template>
	<view>
		<image src="@/static/government/header.png" class="gov-header" @click="toMyInfo"></image>
		<view class="content">
			<image src="@/static/government/slider.png" class="gov-slider">
			<image src="@/static/government/service.png" class="gov-service"></image>
			<view class="app-wrapper">
				<view
					class="app-item"
					v-for="(item, index) in appLists"
					:key="index"
				>
					<image :src="item" style="height: 100%; width: 100%;"></image>
				</view>
			</view>
			<image src="@/static/government/life.png" class="gov-life"></image>
			<view class="certificate">
				<view class="certificate-header">
					<text class="certificate-title">我的证照</text>
					<text class="certificate-all" @click="jumpToAll">全部 ></text>
				</view>
				<image src="@/static/government/society.png" class="certificate-item"></image>
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
					require('@/static/government/vaccinum.png')
				],
				serviceList: [
					require('@/static/government/exam.png'),
					require('@/static/government/job.png'),
					require('@/static/government/food-chain.png'),
					require('@/static/government/small-enterprise.png')
				]
			}
		},
		methods: {
			jumpToAll() {
				// uni.navigateTo({
				// 	url: "/pages/component/myCertificates/myCertificates"
				// })
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
			height: 13.5vh;
		}
		.gov-service {
			width: 94vw;
			height: 10.5vh;
			margin-top: 10rpx;
		}
		.app-wrapper {
			width: calc(94vw - 30rpx);
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			border: 1px solid lightgrey;
			border-radius: 10rpx;
			padding: 20rpx 15rpx;
			margin-top: 15rpx;
			.app-item {
				flex-basis: 23%;
				height: 175rpx;
			}
		}
		.gov-life {
			width: 94vw;
			height: 150rpx;
			margin-top: 15rpx;
		}
		.certificate {
			width: 94vw;
			height: 300rpx;
			margin-top: 5rpx;
			// background-color: black;
			.certificate-header {
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				.certificate-title {
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
				height: 220rpx;
			}
		}
		.prefecture {
			width: 94vw;
			height: 470rpx;
			margin-top: 15rpx;
			.prefecture-header {
				height: 60rpx;
				display: flex;
				justify-content: space-between;
				.prefecture-title {
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
					margin-top: 10rpx;
				}
			}
		}
	}
</style>