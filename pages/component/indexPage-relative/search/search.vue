<template>
	<view>
		<view class="header"></view>
		<view class="wrapper">
			<view class="search">
				<image src="@/static/image/search-back.png" class="back-icon" @click="back"></image>
				<input v-model="text" type="text" auto-focus class="search-input" >
				<text class="cancel" @click="search">搜索</text>
				<image src="@/static/image/search-icon.png" class="search-icon"></image>
				<image src="@/static/image/search-clear.png" class="clear-icon" @click="clear"></image>
			</view>
			<view v-show="text.length > 0" class="search-res">
				<image src="@/static/image/search-result.png" class="search-image" @click="jump"></image>
				<view class="search-list">
					<view class="search-item" v-for="(item, index) in serachList" :key="index">
						<image src="@/static/image/search-icon.png" class="search-icon"></image>
						<text class="serach-title">{{ item.title }}</text>
						<view class="line"></view>
					</view>
				</view>
			</view>
			<view v-show="text.length === 0" class="history-wrapper">
				<text class="history">生活缴费</text>
				<text class="history">生活缴费电费</text>
				<text class="history">防疫出行政策查询</text>
			</view>
			<view v-show="text.length === 0" class="search-history">
				<text class="search-history-title">搜索历史</text>
				<text class="search-history-card" @click="jump">国家政务服务平台</text>
			</view>
			<view v-show="text.length === 0" class="discover">
				<text class="discover-title">搜索发现</text>
				<view class="discover-container">
					<view class="yuanshen">
						<view class="left">
							<view class="title">
								<image src="@/static/image/fire.png" class="title-image"></image>
								<text class="title-text">限时兑换40原神原石</text>
							</view>
							<text class="note">还有原神周边等你抽</text>
						</view>
						<image src="@/static/image/yuanshen.gif" class="yuanshen-icon"></image>
					</view>
					<view class="line"></view>
					<view class="list-item" v-for="(item, index) in list">
						<view class="left">
							<image src="@/static/image/circle.png" class="title-image"></image>
							<text class="title">{{ item.title }}</text>
							<text class="note">{{ item.note }}</text>
						</view>
						<image v-if="item.hot" src="@/static/image/hot.png" class="hot-image"></image>
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
				list: [
					{
						title: '麦当劳',
						note: '300万+人最近搜索',
						hot: true
					},
					{
						title: '美味不用等',
						note: '美食小程序',
						hot: false
					},
					{
						title: '我的社保查询',
						note: '500万+人最近搜索',
						hot: true
					}
				],
				text: '',
				serachList: [
					{
						title: '国家政府服务平台'
					},
					{
						title: '国家开发银行生源地助学贷款'
					},
					{
						title: '国家防疫信息码'
					},
					{
						title: '国家平台健康码'
					},
					{
						title: '国家税务局'
					}
				]
			}
		},
		computed: {
			headerStyle() {
				return this.text.length > 0 ? {
					backgroundColor: '#fbfbfb'
				}  : {}
			}
		},
		methods: {
			search() {
				uni.navigateTo({
					url: '/pages/component/SearchInfo/SearchInfo?text=111'
				})
			},
			jump() {
				uni.navigateTo({
					url: '/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter'
				})
			},
			clear() {
				this.text = ''
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #F5F5F5;
	}
.wrapper {
	padding: 30rpx 2.5vw;
	background-color: #F5F5F5;
	.header {
		height: var(--status-bar-height);
		width: 100%;
		background-color: red;
	}
	.search {
		display: flex;
		align-items: center;
		position: relative;
		.search-input {
			flex: 1;
			border: 1px solid #213CC9;
			border-radius: 10rpx;
			height: 40rpx;
			padding: 8rpx 24rpx 8rpx 64rpx;
		}
		.cancel {
			margin-left: 24rpx;
			color: #333;
			font-size: 36rpx;
		}
		.search-icon {
			width: 36rpx;
			height: 36rpx;
			position: absolute;
			left: 60rpx;
			top: 14rpx;
		}
		.clear-icon {
			width: 24rpx;
			height: 24rpx;
			position: absolute;
			right: 110rpx;
			top: 20rpx;
		}
		.back-icon {
			width: 25rpx;
			height: 36rpx;
			margin-right: 20rpx;
		}
	}
	.search-res {
		width: 100%;
		background-color: #f5f5f5;
		.search-image {
			width: 100%;
			height: 166rpx;
			padding: 20rpx 0 5rpx;
		}
		.search-list {
			width: 100vw;
			height: 100vh;
			margin-left: -2.5vw;
			background-color: #fff;
			.search-item {
				padding: 25rpx 36rpx;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				position: relative;
				.search-icon {
					width: 30rpx;
					height: 30rpx;
					margin-right: 16rpx;
				}
				.serach-title {
					font-size: 33rpx;
					color: #333;
				}
				.line {
					width: 94vw;
					height: 1rpx;
					background-color: #EDEDED;
					position: absolute;
					left: 3vw;
					bottom: 0;
				}
			}
		}
	}
	.history-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 34rpx;
		.history {
			height: 40rpx;
			padding: 10rpx 16rpx;
			border-radius: 12rpx;
			background-color: #FBFBFB;
			margin-right: 16rpx;
			color: #333;
		}
	}
	.search-history {
		margin: 40rpx 0 0 6rpx;
		.search-history-title {
			display: block;
			color: #343434;
			font-size: 32rpx;
			font-weight: 500;
		}
		.search-history-card {
			display: inline-block;
			margin-top: 15rpx;
			height: 40rpx;
			padding: 10rpx 16rpx;
			border-radius: 12rpx;
			background-color: #FBFBFB;
			color: #333;
		}
	}
	.discover {
		margin: 40rpx 0 0 6rpx;
		.discover-title {
			display: block;
			color: #343434;
			font-size: 32rpx;
			font-weight: 500;
		}
		.discover-container {
			background-color: #FBFBFB;
			border-radius: 12rpx;
			padding: 10rpx 20rpx;
			margin-top: 15rpx;
			.yuanshen {
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				position: relative;
				.left {
					.title {
						display: flex;
						align-items: center;
						.title-image {
							width: 28rpx;
							height: 28rpx;
							margin-right: 20rpx;
						}
						.title-text {
							font-size: 30rpx;
							color: #333;
						}
					}
					.note {
						font-size: 26rpx;
						color: #ccc;
						display: inline-block;
						margin-left: 48rpx;
						margin-top: 6rpx;
						color: #9a9a9a;
						font-weight: normal;
					}
				}
				.yuanshen-icon {
					position: absolute;
					right: 0;
					top: 0;
					width: 160rpx;
					height: 110rpx;
				}
			}
			.line {
				height: 1rpx;
				width: 100%;
				background-color: #EDEDED;
				margin-bottom: 15rpx;
			}
			.list-item {
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				&:last-child {
					padding-bottom: 30rpx;
				}
				.left {
					display: flex;
					align-items: center;
					.title-image {
						width: 20rpx;
						height: 20rpx;
						margin-right: 28rpx;
					}
					.title {
						display: inline-block;
						margin-right: 20rpx;
						font-size: 30rpx;
						color: #333;
					}
					.note {
						font-size: 26rpx;
						color: #9a9a9a;
						font-weight: normal;
					}
				}
				.hot-image {
					width: 34rpx;
					height: 34rpx;
				}
			}
		}
	}
}
</style>
