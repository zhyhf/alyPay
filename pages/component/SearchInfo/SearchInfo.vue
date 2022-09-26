<template>
	<view class="search-info">
		<view class="status_bar">
		 </view>
		<view class="top-input">
			<view class="search">
				<image src="@/static/image/search-back.png" class="back-icon" @click="back"></image>
				<input v-model="text" type="text" class="search-input" >
				<image src="@/static/image/search-icon.png" class="search-icon" @click.stop></image>
				<text class="more-dots">...</text>
			</view>
		</view>
		<image src="@/static/loading4.gif" class="loading" mode="widthFix" v-show="loading"></image>
		<view class="tab-container" v-show="!loading">
			<text
				ref="tabItem"
				v-for="(item, index) in tabs"
				:class="activeIndex === index ? 'tab-item-active tab-item': 'tab-item'"
				@click="changeIndex(index)"
			>{{ item }}</text>
		</view>
		<view v-show="activeIndex !== 0 && !loading" class="loading-wrapper">
			<image src="@/static/loading4.gif" class="loading" mode="widthFix"></image>
		</view>
		<view v-show="activeIndex === 0 && !loading" class="search-result">
			<image src="../../../static/searchRes.png" mode="widthFix" @click="toCenter" class="img2"></image>
			
			<view class="title">
				<view class="left">
					<text class="hightlight">国家政务服务平台</text>
					<text class="default"> - 生活号动态</text>
				</view>
				<view class="right">
					<text class="all" @click="toLoading">全部</text>
					<image src="@/static/image/info-right-arrow.png" class="right-icon"></image>
				</view>
			</view>
			
			<image src="@/static/image/search-res2.png" mode="widthFix" class="img2"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'searchInfo',
		onLaunch(props) {
			console.log(props)
		},
		data() {
			return {
				text: '国家政务服务平台',
				activeIndex: 0,
				tabs: [
					'全部',
					'小程序',
					'生活号',
					'理财',
					'市民服务'
				],
				loading: true
			};
		},
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 2000)
		},
		methods: {
			toLoading() {
				const title = '生活号动态'
				uni.navigateTo({
					url: `/pages/component/loading/loading?title=${title}`
				})
			},
			changeIndex(index) {
				this.activeIndex = index
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			toCenter() {
				uni.navigateTo({
					url: "/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.loading {
		width: 180rpx;
		position: absolute;
		left: 50%;
		top: 260rpx;
		transform: translate3d(-50%, 0, 0);
	}
	.top-input {
		display: flex;
		margin-top: 30rpx;
		padding: 0 20rpx;
		.search {
			width: 100%;
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
			.search-icon {
				width: 36rpx;
				height: 36rpx;
				position: absolute;
				left: 60rpx;
				top: 14rpx;
			}
			.back-icon {
				width: 25rpx;
				height: 36rpx;
				margin-right: 20rpx;
			}
			.more-dots {
				display: inline-block;
				margin-left: 26rpx;
				font-size: 38rpx;
				color: #333;
				position: relative;
				top: -50%;
				transform: translateY(50%);
				font-weight: 400;
			}
		}
	}
	
	.tab-container {
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.tab-item {
			font-size: 32rpx;
			font-weight: normal;
			display: inline-block;
			padding: 15rpx 0;
			color: #333333;
		}
		.tab-item-active {
			font-weight: 500;
			border-bottom: 4rpx solid #213CC9;
		}
	}
	.loading-wrapper {
		width: 100vw;
		height: 1050rpx;
		position: relative;
		.loading {
			width: 180rpx;
			position: absolute;
			left: 50%;
			top: 150rpx;
			transform: translate3d(-50%, 0, 0);
		}
	}
	
	.search-result {
		// margin-top: 20rpx;
		width: 94vw;
		margin: 0 auto;

		image {
			margin-top: 4vh;
			width: 100%;
		}
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			// margin-top: 20rpx;
			.hightlight {
				color: #213CC9;
				font-size: 36rpx;
				font-weight: 500;
			}
			.default {
				font-size: 36rpx;
				color: #333;
				font-weight: 500;
			}
			.right {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.all {
					color: #a5a5a5;
					font-size: 30rpx;
					margin-right: 6rpx;
				}
				.right-icon {
					width: 20rpx;
					height: 20rpx;
					position: relative;
					top: -24rpx;
				}
			}
		}
		.img2 {
			position: relative;
			top: -22rpx;
		}
	}
</style>
