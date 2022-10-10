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
						<image src="@/static/government/more.png"></image>
					</view>
					<view class="shuxian"></view>
					<view class="close">
						<image src="@/static/government/close.png" @click='back' mode=""></image>
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
						{{wendu}}℃
					</view>
				</view>
				<view class="right-info" @click="toMyInfo">
					<view class="header">
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
				<view class="search-btn" @click="jump">
					<text class="spe">|</text> 搜索
				</view>
			</view>
		</view>

		<view class="content">
			<view class="slider-top" style="position: relative;">
				<swiper :current="index" :disable-touch="false" style="height: 178rpx;margin-top: 2rpx;" circular
					:indicator-dots="false" :autoplay="true" :interval="15000">
					<swiper-item style="width: 100%;height: 100%;" v-for="(item,index) in topSliderList" :key="index"
						@click="jump">
						<image style="width: 100%;height: 100%;" :src="item" mode="widthFix"></image>
					</swiper-item>
				</swiper>
				<view disable-touch="false" class="app-line" style="position: absolute;bottom: 1.5vh;z-index: 999;">
					<view v-for="(item,i) in topSliderList.length" :key="i"
						:class="index===i ? 'line-item line-item-active' : 'line-item'"></view>
				</view>
			</view>
			<image src="@/static/government/service.png" class="gov-service" mode="widthFix" @click="jump"></image>
			<view class="app-container" style="margin-top: 0.4vh;">
				<view class="app-wrapper" :style="sliderStyle">
					<view class="app-item" v-for="(item, index) in appLists" :key="index" @click="jump">
						<image :src="item" style="height: 100%; width: 100%;"></image>
					</view>
				</view>
				<view class="app-line">
					<view :class="!flag ? 'line-item line-item-active' : 'line-item'"></view>
					<view :class="flag ? 'line-item line-item-active' : 'line-item'"></view>
				</view>
			</view>
			<image src="@/static/government/life.png" class="gov-life" @click="jump"></image>
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
					<text class="prefecture-all" @click="jump('主题专区')">全部 ></text>
				</view>

					<view class="swiper-bottom">
						<swiper :current="bottomIndex" :circular="true" :disable-touch="false" style="height: 660rpx;margin-top: 2rpx;" 
							:indicator-dots="false" :autoplay="false">
							<swiper-item style="width: 100%;height: 100%;" 
								@click="jump">
								<view class="item-wrapper">		
								<image v-for="(item, index) in serviceList" :key="index" :src="item.img" class="item"
									@click="jump(item.title)"></image>
								</view>
							</swiper-item>
							<swiper-item style="width: 100%;height: 100%;"  
								@click="jump">
								<view class="item-wrapper">		
								<image v-for="(item, index) in serviceList2" :key="index" :src="item.img" class="item"
									@click="jump(item.title)"></image>
								</view>
							</swiper-item>	
						</swiper>
						<view disable-touch="false" class="app-line" style="position: absolute;bottom: 1.5vh;z-index: 999;">
							<view v-for="(item,bi) in 2" :key="bi"
								:class="bottomIndex== bi ? 'line-item line-item-active' : 'line-item'"></view>
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
				bottomIndex:0,
				wendu: '25',
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
					require('@/static/government/1.png'),
					require('@/static/government/2.png'),
					require('@/static/government/3.png'),
					require('@/static/government/4.png'),
					require('@/static/government/5.png'),
					require('@/static/government/6.png'),
					require('@/static/government/7.png'),
					require('@/static/government/8.png'),
					require('@/static/government/9.png'),
					require('@/static/government/10.png'),
					require('@/static/government/11.png'),
					require('@/static/government/12.png'),
					require('@/static/government/13.png'),
					require('@/static/government/14.png'),
					require('@/static/government/15.png'),
					require('@/static/government/16.png'),
					require('@/static/government/17.png'),
					require('@/static/government/18.png'),
					require('@/static/government/19.png'),
					require('@/static/government/20.png'),
					require('@/static/government/21.png'),
					require('@/static/government/22.png'),
					require('@/static/government/23.png'),
					require('@/static/government/24.png'),
				],
				serviceList2:[
					{
						img: require('@/static/government/c.png'),
					},
					{
						img: require('@/static/government/d.png'),
					},
					{
							img: require('@/static/government/exam.png'),
							title: '教育考试服务专区'
						},
						{
							img: require('@/static/government/small-enterprise.png'),
							title: '小微企业和个体工商户服务专栏'
						},
						
				],
				serviceList: [{
						img: require('@/static/government/exam.png'),
						title: '教育考试服务专区'
					},
					{
						img: require('@/static/government/job.png'),
						title: '就业服务专栏'
					},
					{
						img: require('@/static/government/food-chain.png'),
						title: '冷链食品追溯服务专区'
					},
					{
						img: require('@/static/government/small-enterprise.png'),
						title: '小微企业和个体工商户服务专栏'
					},
					{
						img: require('@/static/government/a.png'),
					},
					{
						img: require('@/static/government/b.png'),
					},
				]
			}
		},
		onShow() {
			this.gCity = uni.getStorageSync("pro") || "江苏省"
			uni.request({
				url: 'http://wthrcdn.etouch.cn/weather_mini?city=南京',
				method: 'GET',
				success: res => {
					this.wendu = res.data.data.wendu
				},
				fail: () => {
					this.openmsg("警告", "天气接口获取失败")
				},
				complete: () => {}
			});

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
			setInterval(() => {
				if (this.bottomIndex == 1) this.bottomIndex = 0
				else this.bottomIndex++
			}, 2000)
		},
		methods: {
			back(){
				uni.navigateBack()
			},
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
			jump(title) {
				uni.navigateTo({
					url: `/pages/component/loading/loading?type=1${typeof title === 'string' ? `&title=${title}` : ''}`
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
	.swiper-bottom {
		position: relative;
	}
	.status_bar {
		position: relative;
		height: var(--status-bar-height);
		width: 100%;
		background-color: #DE1B09;
		border: none;
		// border-bottom: #DB1A06;

		.border {
			position: absolute;
			display: inline-block;
			bottom: -2rpx;
			left: 0;
			width: 100vw;
			height: 10rpx;
			z-index: 999;
			background-color: #DE1B09;
		}
	}

	.application {
		position: absolute;
		top: 32rpx;
		right: 152rpx;

		image {
			width: 57rpx;
			height: 57rpx;
		}
	}

	.application-right {
		position: absolute;
		right: 2rpx;
		top: 35rpx;
		width: 19vw;

		.more {
			position: absolute;
			right: 84rpx;
			top: -9rpx;
			width: 40rpx;
			height: 10rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.shuxian{
			position: absolute;
			right: 70rpx;
			top: 12rpx;
			width: 0.05px;
			height: 30rpx;
			background-color: #efeff4;
		}

		.close {
			position: absolute;
			right: 20rpx;
			top: 5rpx;
			width: 34rpx;
			height: 34rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.bg {
			width: 140rpx;
			height: 54rpx;
		}
	}

	.top-title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 36rpx;
		font-weight: 500;
		letter-spacing: 1rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 65rpx;
		padding-bottom: 35rpx;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: #D81706;

		.right-icon {
			position: absolute;
			top: 30rpx;
			right: 16rpx;
			width: 26vw;
		}
	}

	.gov-header {
		position: relative;
		width: 100%;
		margin-left: -2rpx;
		height: 496rpx;
		margin-top: -70rpx;
		// background-color: red;
		color: #FDFDFD;
		font-size: 32rpx;
		font-weight: 500;
		letter-spacing: 0px;
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
			color: #B52C1C;

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
			box-shadow: 1rpx 2rpx 0 4rpx rgba(241, 241, 241, .5);
			color: #6f6f6f !important;
			box-sizing: border-box;
		}
	}

	.userPosInfo {
		margin-top: 130rpx;
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
				margin-left: 18rpx;
				font-size: 28rpx;
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
			width: 100%;
			position: relative;
			top: 28rpx;
			// width: 94vw;
			// height: 136rpx;
			// margin-top: 10rpx;
		}

		.app-container {
			width: calc(94vw - 30rpx);
			border: 1px solid #F0F0F0;
			border-radius: 10rpx;
			padding: 20rpx 15rpx;
			margin-top: 15rpx;
			overflow: hidden;
			position: relative;
			top: 26rpx;
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
			margin-top: 46rpx;
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
					font-weight: 500;
				}

				.certificate-all {
					color: #B12217;
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
					font-weight: 500;
				}

				.prefecture-all {
					color: #B12217;
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
