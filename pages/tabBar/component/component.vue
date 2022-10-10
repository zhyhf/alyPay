<template>
	<view class="container" :style="wrapperStyle">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/finance-left-icon.png" class="f-icon1" style="width: 48rpx;"></image>
			<view class="input-wrapper">
				<input type="text" class="input" @focus="focus">
				<uni-icons class="search" type="search" size="22" color="#ccc"></uni-icons>
			</view>
			<image src="@/static/image/finance-right-icon.png" @click="jumpToLicai" class="f-icon"></image>
		</view>
		<view class="info-container image">
			<image src="@/static/image/extend.png" mode="widthFix" style="width: 100%;"></image>
			<image src="@/static/image/arrow.png" class="arrow" :style="arrowStyle" @click.stop="extend"></image>
		</view>
		<view class="move-content" :style="contentStyle" @click="jump">
			<view class="content">
				<view class="fn-wrapper">
					<view class="fn-item" v-for="(item, index) in list" :key="index">
						<image :src="item.img" mode="widthFix" class="img"></image>
						  <text style="margin-left: 0.4vw;margin-top:1vw;font-size: 25rpx;">{{item.text}}</text>
					</view>
				</view>
			</view>
			<view style="width: 100%; position: relative;">
				<image src="@/static/image/f2.png" mode="widthFix" class="detail"></image>
				<button style="background-color: #1B76FB;
					width: 84%;
					margin: 30rpx 60rpx 0;
					color: #fff;
					position: absolute;
					bottom: 108rpx;">
					<text>立即领取</text>
				</button>
			     <view>
					<text style="color: #9A9693;font-size: 22rpx;position: absolute;bottom: 80rpx;letter-spacing: 1rpx;">支持体验基金或兑换其他福利</text>
				 </view>
			</view>
			<view class="good-wrapper">
				<view class="good-header">
					<text class="good-title">理财有好货</text>
					<view class="good-radio">
						<view :class="activeIndex === index ? 'radio-item active' : 'radio-item'" v-for="(item, index) in goods" :key="index" @click.stop="changeIndex(index)">{{ item }}</view>
					</view>
				</view>
				<view class="good-content">
					<text class="content-title">{{ contentList[activeIndex].title }}</text>
					<text class="content-subtitle">{{ contentList[activeIndex].subTitle }}</text>
					<view class="content-detail">
						<view class="detail-item">
							<text class="special hit">{{ contentList[activeIndex].text1 }}</text>
							<text class="special-text">{{ contentList[activeIndex].text2 }}</text>
						</view>
						<view class="detail-item">
							<text class="special">{{ contentList[activeIndex].text3 }}</text>
							<text class="special-text">{{ contentList[activeIndex].text4 }}</text>
						</view>
					</view>
					<button class="btn">
						<text>立即体验</text>
						<image src="@/static/image/right-arrow.png" class="right-arrow"></image>
					</button>
				</view>
			</view>
		</view>
		
		<my-tab-bar></my-tab-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						text:'余额宝',
						img:require('@/static/image/licai1.png')
					},
					{
						text:'稳健理财',
						img:require('@/static/image/licai2.png')
					},
					{
						text:'基金',
						img:require('@/static/image/licai3.png')
					},
					{
						text:'黄金',
						img:require('@/static/image/licai4.png')
					},
					{
						text:'股票',
						img:require('@/static/image/licai5.png')
					},
					{
						text:'券商理财',
						img:require('@/static/image/licai6.png')
					},
					{
						text:'保险',
						img:require('@/static/image/licai7.png')
					},
					{
						text:'帮你投',
						img:require('@/static/image/licai9.png')
					},
					{
						text:'养老金',
						img:require('@/static/image/licai8.png')
					},
					{
						text:'更多',
						img:require('@/static/image/more1.png')
					},
				],
				goods: [
					'新客优选',
					'当下热点',
					'保险好品'
				],
				activeIndex: 0,
				contentList: [
					{
						title: '易生福专属养老金',
						subTitle: '国家政策指导',
						text1: '5.35%',
						text2: '结算利率',
						text3: '灵活',
						text4: '随时可加投'
					},
					{
						title: '闲钱稳健理财好选择',
						subTitle: '闲钱稳健理财好选择',
						text1: '3.99%',
						text2: '近一年涨跌幅',
						text3: '30天',
						text4: '产品期限'
					},
					{
						title: '积蓄金年金',
						subTitle: '稳健增值固定领取',
						text1: '255%',
						text2: '最高领投入',
						text3: '固定领取',
						text4: '金额写进合同'
					}
				],
				arrowStyle: {
					top: '120rpx',
					transform: 'translateX(-50%) rotate(0deg)'
					// transform: 'translateX(-50%) rotate(180deg)'
				},
				flag: true,
				contentStyle: {
					transform: 'translateY(-505rpx)'
				},
				wrapperStyle: {
					height: '1550rpx'
				}
			}
		},
		methods: {
			changeIndex(index) {
				this.activeIndex = index
			},
			focus() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/search/search'
				})
			},
			// 跳转loading
			jumpToLicai(){
				uni.navigateTo({
					url: '/pages/component/licaiLoading/licaiLoading'
				})
			},
			extend() {
				this.arrowStyle = this.flag ? {
					top: '610rpx',
					transform: 'translateX(-50%) rotate(180deg)'
				} : {
					top: '120rpx',
					transform: 'translateX(-50%) rotate(0deg)'
				},
				this.contentStyle = this.flag ? {
					transform: 'translateY(0rpx)'
				} : {
					transform: 'translateY(-505rpx)'
				},
				this.wrapperStyle = this.flag ? {
					height: 'auto'
				} : {
					height: '1550rpx'
				}
				this.flag = !this.flag
			},
			jump() {
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100vw;
		position: relative;
		padding-bottom: 120rpx;
		height: 1550rpx;
		overflow: hidden;
		.status_bar {
			width: 100%;
			height: var(--status-bar-height);
			background-color: #0C7DFF;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
		}
		.header {
			display: flex;
			width: 100vw;
			height: 60rpx;
			align-items: center;
			padding: 20rpx 0;
			background-color: #0C7DFF;
			position: fixed;
			top: var(--status-bar-height);
			left: 0;
			z-index: 99;
			.f-icon1 {
				display: inline-block;
				height: 60rpx;
				margin: 0 26rpx;
			}
			.f-icon {
				display: inline-block;
				width: 60rpx;
				height: 60rpx;
				margin: 0 20rpx;
			}
			.input-wrapper {
				flex: 1;
				position: relative;
				.input {
					border-radius: 12rpx;
					background-color: #fbfbfb;
					height: 60rpx;
				}
				.search {
					width: 36rpx;
					height: 36rpx;
					position: absolute;
					left: 10rpx;
					top: 8rpx;
				}
			}
		}
		.info-container {
			width: 100%;
			position: relative;
			.arrow {
				transition: all .3s;
				position: absolute;
				top: 120rpx;
				left: 50%;
				transform: translateX(-50%) rotate(180deg);
				width: 24rpx;
				height: 20rpx;
				z-index: 999;
			}
		}
		.move-content {
			width: 100%;
			transform: translateY(-510rpx);
			background-color: #efeff4;
			transition: all .3s;
		}
		.content {
			.fn-wrapper {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-around;
				// padding-top: 10rpx;
				padding: 20rpx 0;
				.fn-item {
					width: 20%;
					margin: 10rpx 0;
					display: grid;
					text-align: center;
					.img {
						width: 43%;
						margin-left: 6.6vw;
						margin-right: 4.5vw;
					}
				}
			}
		}
		.detail {
			width: 95vw;
			margin-left: 2.5vw;
		}
		.good-wrapper {
			width: calc(95vw - 20rpx);
			margin-left: 2.5vw;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 25rpx 10rpx;
			margin-top: 18rpx;
			margin-bottom: 16rpx;
			.good-header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.good-title {
					font-size: 34rpx;
					font-weight: 500;
					color: #333;
					margin-left: 20rpx;
				}
				.good-radio {
					display: flex;
					.radio-item {
						font-size: 24rpx;
						padding: 6rpx 20rpx;
						margin: 0 10rpx;
						border: 1rpx solid #C9C9C9;
						border-radius: 30rpx;
						color: #969696;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.active {
						color: #1B76FB;
						background-color: #E8F2FE;
						border-color: transparent;
					}
				}
			}
			.good-content {
				.content-title {
					display: block;
					font-size: 36rpx;
					color: #373737;
					text-align: center;
					margin-top: 30rpx;
				}
				.content-subtitle {
					display: block;
					font-size: 24rpx;
					color: #9B9B9B;
					text-align: center;
				}
				.content-detail {
					// margin-top: 20rpx;
					display: flex;
					margin: 20rpx 90rpx;
					.detail-item {
						flex: 1;
						text-align: center;
						.special {
							display: block;
							font-size: 38rpx;
							color: #373737;
						}
						.special-text {
							display: block;
							font-size: 24rpx;
							color: #9B9B9B;
						}
						.hit {
							color: #D1423C
						}
					}
				}
				.btn {
					background-color: #1B76FB;
					margin: 30rpx 20rpx 0;
					color: #fff;
					.right-arrow {
						width: 30rpx;
						height: 30rpx;
						position: relative;
						top: 2rpx;
						left: 14rpx;
					}
				}
			}
		}
		.image {
			margin-top: calc(90rpx + var(--status-bar-height));
		}
	}
</style>
