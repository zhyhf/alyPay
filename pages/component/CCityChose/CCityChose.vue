<template>
	<view class="province">
		<view class="top-header">
			<view class="left-icon">
				<uni-icons @click="back" type="left" color="black" size="24" class="left"></uni-icons>
				<text class="txt">国家政务服务平台(试运行)</text>
			</view>
			<view class="right-icon">
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
		<view class="cur-pos">
			<view class="top-title">
				定位/最近访问
			</view>
			<view class="choose">
				<view @click="chosePro(item)" class="c-item" v-for="(item,index) in cArr" :key="index">
					<image v-if="index==0" style="width: 25rpx; height: 30rpx;margin: 0rpx 10rpx 0 0;"
						src="@/static/icons/rp.png" mode=""></image>
					{{item}}
				</view>
			</view>
		</view>
		<view class="choose-province">
			<view class="top-title" style="padding-left: 35rpx;">
				选择省 (市)
			</view>
			<view class="out-box">
				<view @click="chosePro(item)" class="p-item" v-for="(item,index) in province" :key="index">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				province: [
					"北京市",
					"天津市",
					"河北省",
					"陕西省",
					"内蒙古自治区",
					"辽宁省",
					"吉林省",
					"黑龙江省",
					"上海市",
					"江苏省",
					"浙江省",
					"安徽省",
					"福建省",
					"江西省",
					"山东省",
					"河南省",
					"湖北省",
					"湖南省",
					"广东省",
					"广西壮族自治区",
					"海南省",
					"重庆市",
					"四川省",
					"贵州省",
					"云南省",
					"西藏自治区",
					"陕西省",
					"甘肃省",
					"青海省",
					"宁夏回族自治区",
					"新疆维吾尔自治区",
					"香港特别行政区",
					"澳门特别行政区",
					"台湾省"
				],
				cArr: [
					"江苏省",
					"北京市"
				]
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			chosePro(value) {
				uni.setStorageSync("pro", value)
				uni.navigateBack({
					delta: 1
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

	.top-header {
		// border-bottom: 1px solid yellow;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999999;
		color: black;
		font-size: 32rpx;
		font-weight: 500;
		letter-spacing: 6rpx;
		padding: 30rpx;
		padding-top: var(--status-bar-height);
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: white;

		// border-bottom: 1px solid yellowgreen;
		.left-icon {
			display: flex;

		}

		.right-icon {
			position: absolute;
			top: 67rpx;
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
			top: -5rpx;
			width: 32rpx;
			height: 6rpx;

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
		color: #A6A6A6;
	}

	.cur-pos {
		padding: 35rpx;
		margin-top: 160rpx;

		.choose {
			display: flex;
			padding-top: 20rpx;

			.c-item {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 25rpx;
				width: 160rpx;
				height: 60rpx;
				border-radius: 14rpx;
				background-color: #fff;
			}
		}
	}

	.choose-province {
		padding-bottom: 20rpx;

		.out-box {
			// display: flex;
			// justify-content: center;
			width: 100vw;
			// height: 5vh;
			background-color: white;
		}

		.top-title {
			margin-bottom: 20rpx;
		}

		.p-item {
			width: 92vw;
			height: 6vh;
			padding-left: 6rpx;
			font-size: 32rpx;
			line-height: 6vh;
			margin: 0 auto;
			border-bottom: 1px solid #F0F0F0;
		}
	}
</style>
