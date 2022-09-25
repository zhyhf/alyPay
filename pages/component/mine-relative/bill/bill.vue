<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<view class="search">
				<image src="@/static/image/back.png" class="img left"></image>
				<view class="search-wrapper">
					<input type="text" class="search-input">
					<image src="@/static/image/search-icon.png" class="search-icon"></image>
				</view>
				<image src="@/static/mine/more.png" class="img right"></image>
			</view>
			<view class="tabs">
				<text
					v-for="(item, index) in tabs"
					:key="index"
					:class="activeIndex === index ? 'tab-item tab-active' : 'tab-item'"
					@click="changeTab(index)"
				>
				{{ item }}
				<text class="sub-icon" v-if="index === tabs.length - 1">▼</text>
				</text>
				
			</view>
		</view>
		
		<view class="content">
			<view class="bg-wrapper">
				<image src="@/static/mine/bill-bg.png" mode="widthFix" style="width: 100%;"></image>
				<view class="bill">
					<picker mode="date" fields="month" :value="date" @change="bindDateChange" style="margin-bottom: 10rpx;">
						<view>
							<text class="month">{{parseInt(date.split('-')[1])}}</text>
							<text class="yue">月</text>
							<text class="triangle">▼</text>
						</view>
					</picker>
					<view class="detail">
						<text class="detail-item">{{ '支出 ¥12,042.19'}}</text>
						<text class="detail-item">{{ '收入 ¥ 0.00'}}</text>
					</view>
					<text class="analysis">收支分析 ></text>
				</view>
			</view>
			<image src="@/static/mine/bill-detail-item.png" style="width: 100%;" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ['全部', '服务中', '待评价', '筛选'],
				activeIndex: 0,
				date: this.getCurrentMonth()
			}
		},
		methods: {
			bindDateChange(e) {
				this.date = e.target.value
				console.log(this.date)
			},
			getCurrentMonth () {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				month = month > 9 ? month : '0' + month
				return `${year}-${month}`
			},
			changeTab(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 100vw;
		background-color: #F5F5F5;
		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #fff;
			position: fixed;
			left: 0;
		}
		.header {
			background-color: #fff;
			width: 100vw;
			position: fixed;
			top: var(--status-bar-height);
			left: 0;
			
			.search {
				display: flex;
				align-items: center;
				margin-bottom: 30rpx;
				.img {
					width: 36rpx;
					height: 36rpx;
					margin: 0 26rpx;
				}
				.left {
					margin-right: 34rpx;
				}
				.right {
					margin-left: 34rpx;
				}
				.search-wrapper {
					flex: 1;
					position: relative;
					.search-input {
						width: 100%;
						background-color: #F5F5F5;
						border-radius: 10rpx;
						height: 60rpx;
					}
					.search-icon {
						width: 34rpx;
						height: 34rpx;
						position: absolute;
						left: 20rpx;
						top: 16rpx;
					}
				}
			}
			.tabs {
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 20rpx 0;
				.tab-item {
					font-size: 32rpx;
					position: relative;
					.sub-icon {
						position: absolute;
						font-size: 20rpx;
						right: -30rpx;
						top: 50%;
						transform: translateY(-50%);
					}
					&:last-child {
						margin-right: 30rpx;
					}
				}
				.tab-active {
					color: #213CC9;
					font-weight: 500;
				}
			}
		}
		.content {
			width: 100vw;
			background-color: #F5F5F5;
			height: 100vh;
			padding-top: calc(var(--status-bar-height) + 180rpx);
			.bg-wrapper {
				width: 100%;
				position: relative;
				.bill {
					position: absolute;
					bottom: 40rpx;
					.detail {
						margin-left: 23rpx;
						margin-bottom: 20rpx;
						display: flex;
						.detail-item {
							margin-right: 30rpx;
						}
					}
					.analysis {
						display: block;
						margin-left: 23rpx;
					}
				}
			}
		}
	}
.month {
	font-size: 60rpx;
	font-weight: bold;
	display: inline-block;
	margin-left: 20rpx;
	margin-right: 10rpx;
}
.yue {
	display: inline-block;
	font-size: 34rpx;
	margin-right: 4rpx;
}
.triangle {
	font-size: 24rpx;
}
</style>
