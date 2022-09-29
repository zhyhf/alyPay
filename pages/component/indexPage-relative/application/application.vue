<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back"></image>
			<text class="title">应用中心</text>
			<view class="header-right">
				<text class="right-text">管理</text>
				<uni-icons class="right-icon" type="search" size="25" color="#ccc"></uni-icons>
			</view>
		</view>
		
		<view class="card index-page" :style="indexStyle">
			<view class="right">
				<text class="right-text">已经收起13个首页应用</text>
				<image class="arrow" src="@/static/mine/arrow-up.png" @click="click" :style="arrowStyle"></image>
			</view>
			<text class="card-title">{{ indexPageList.title }}</text>
			<view class="content">
				<view class="content-item" v-for="(icon, i) in indexPageList.app" :key="i">
					<image :src="icon" class="icon" mode="widthFix" style="width: 74%; margin-left: 13%;"></image>
				</view>
			</view>
		</view>
		
		<view v-for="(item, index) in list" :key="index" class="card">
			<text class="card-title">{{ item.title }}</text>
			<view class="content">
				<view class="content-item" v-for="(icon, i) in item.app" :key="i">
					<image :src="icon" class="icon" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				indexStyle: {
					height: '85rpx'
				},
				arrowStyle: {
					transform: 'rotate(180deg)'
				},
				indexPageList: {
					title: '首页应用',
					app: [
						require('@/static/image/shenghuo1.png'),
						require('@/static/image/yundong.png'),
						require('@/static/image/jiangkang.png'),
						require('@/static/image/kuaidi.png'),
						require('@/static/image/shimin.png'),
						require('@/static/image/zhuanzhang.png'),
						require('@/static/image/phone.png'),
						require('@/static/image/jiebei.png'),
						require('@/static/image/movie.png'),
						require('@/static/image/takeout.png'),
						require('@/static/image/gaode.png'),
						require('@/static/image/forest.png'),
						require('@/static/image/zhima-credit.png')
					]
				},
				list: [
					{
						title: '便民生活',
						app: [
							require('@/static/more/icon1.png'),
							require('@/static/more/icon2.png'),
							require('@/static/more/icon3.png'),
							require('@/static/more/icon4.png'),
							require('@/static/more/icon5.png'),
							require('@/static/more/icon6.png'),
							require('@/static/more/icon7.png'),
							require('@/static/more/icon8.png'),
							require('@/static/more/icon9.png'),
							require('@/static/more/icon10.png'),
							require('@/static/more/icon11.png'),
							require('@/static/more/icon12.png'),
							require('@/static/more/icon13.png'),
							require('@/static/more/icon14.png'),
							require('@/static/more/icon15.png'),
							require('@/static/more/icon16.png'),
							require('@/static/more/icon17.png')
						]
					},
					{
						title: '购物娱乐',
						app: [
							require('@/static/more/icon18.png'),
							require('@/static/more/icon19.png'),
							require('@/static/more/icon20.png'),
							require('@/static/more/icon21.png'),
							require('@/static/more/icon22.png'),
							require('@/static/more/icon23.png'),
							require('@/static/more/icon24.png'),
							require('@/static/more/icon25.png'),
							require('@/static/more/icon26.png')
						]
					},
					{
						title: '财富管理',
						app: [
							require('@/static/more/icon27.png'),
							require('@/static/more/icon28.png'),
							require('@/static/more/icon29.png'),
							require('@/static/more/icon30.png'),
							require('@/static/more/icon31.png'),
							require('@/static/more/icon32.png'),
							require('@/static/more/icon33.png'),
							require('@/static/more/icon34.png'),
							require('@/static/more/icon35.png'),
							require('@/static/more/icon36.png'),
							require('@/static/more/icon37.png'),
							require('@/static/more/icon38.png'),
							require('@/static/more/icon39.png'),
							require('@/static/more/icon40.png')
						]
					},
					{
						title: '教育公益',
						app: [
							require('@/static/more/icon41.png'),
							require('@/static/more/icon42.png'),
							require('@/static/more/icon43.png'),
							require('@/static/more/icon44.png'),
							require('@/static/more/icon45.png'),
							require('@/static/more/icon46.png'),
							require('@/static/more/icon47.png'),
							require('@/static/more/icon48.png'),
							require('@/static/more/icon49.png')
						]
					}
				]
			}
		},
		methods: {
			click() {
				this.indexStyle = this.flag ? {
					height: 'auto'
				} : {
					height: '85rpx'
				},
				this.arrowStyle = this.flag ? {
					transform: 'rotate(0)'
				} : {
					transform: 'rotate(180deg)'
				}
				this.flag = !this.flag
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 100%;
		.status_bar {
			width: 100%;
			height: var(--status-bar-height);
		}
		.header {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			.back {
				position: absolute;
				left: 20rpx;
				top: 10rpx;
				width: 34rpx;
				height: 34rpx;
			}
			.title {
				font-size: 38rpx;
				font-weight: 500;
			}
			.header-right {
				position: absolute;
				right: 20rpx;
				top: 0;
				.right-text {
					color: #3675DC;
					margin-right: 20rpx;
					font-size: 34rpx;position: relative;
					top: -4rpx;
				}
			}
		}
		.card {
			margin: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			.card-title {
				font-size: 34rpx;
				font-weight: 500;
				display: inline-block;
				margin: 20rpx;
			}
			.content {
				display: flex;
				flex-wrap: wrap;
				.content-item {
					width: 20%;
					.icon {
						width: 86%;
						// margin-left: 7%;
						margin: 6rpx 0 6rpx 7%;
					}
				}
			}
		}
		.index-page {
			position: relative;
			overflow: hidden;
			height: 85rpx;
			transition: all .3s;
			.right {
				display: flex;
				align-items: center;
				position: absolute;
				right: 24rpx;
				top: 24rpx;
				.right-text {
					color: #9B9B9B;
				}
				.arrow {
					transform: rotate(180deg);
					width: 15rpx;
					height: 15rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
</style>
