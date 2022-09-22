<template>
	<view>
		<view class="header-wrapper">
			<image src="@/static/mine/member-header.png" class="member-header"></image>
			<view class="activity-wrapper">
				<view class="activity-item" v-for="(item, index) in activities" :key="index">
					<image class="activity-image" :src="item"></image>
				</view>
			</view>
		</view>
		<view class="member-content">
			<image src="@/static/mine/member-info.png" class="member-info"></image>
			<view class="tab-container">
			    <view
					v-for="(tab,index) in tabBars"
					:key="tab.id"
					:class="tabIndex === index ? 'uni-tab-item uni-tab-item-active' : 'uni-tab-item'"
					@click="ontabtap(index)">
			        <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
			    </view>
			</view>
			<view class="line"></view>
			<image class="detail" src="@/static/mine/all.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
				    name: '全部',
				    id: 'all'
				}, {
				    name: '推荐',
				    id: 'recommend'
				}, {
				    name: '特色',
				    id: 'special'
				}, {
				    name: '出行',
				    id: 'outgoing'
				}, {
				    name: '娱乐',
				    id: 'entertainment'
				}, {
				    name: '美食',
				    id: 'food'
				}, {
					name: '日常',
					id: 'daily'
				}],
				activities: [
					require("@/static/mine/market.png"),
					require("@/static/mine/priority.png"),
					require("@/static/mine/phone-money.png"),
					require("@/static/mine/video-member.png"),
				]
			}
		},
		methods: {
			ontabtap(index) {
				this.tabIndex = index
			},
		}
	}
</script>

<style scoped lang="scss">
	.header-wrapper {
		width: 100vw;
		position: relative;
		.member-header {
			width: 100vw;
			height: 380rpx;
		}
		.activity-wrapper {
			width: 100vw;
			height: 80rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: absolute;
			bottom: 30rpx;
			.activity-item {
				flex: 1;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.activity-image {
					width: 63%;
					height: 70rpx;
				}
				&:first-child {
					.activity-image {
						width: 72.5%;
						height: 73rpx;
						// transform: translateX(-3rpx) scale(1.07);
						margin-top: 3rpx;
						margin-left: 14rpx;
					}
				}
			}
		}
	}
	.member-content {
		width: calc(100vw - 50rpx);
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 20rpx 25rpx;
		background-color: #fff;
		.member-info {
			width: 100%;
			height: 550rpx;
		}
		.tab-container {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.uni-tab-item {
			    flex: 1;
				text-align: center;
				margin: 0 10rpx;
			}
			.uni-tab-item-active {
				border-bottom: 2px solid #007AFF;
			}
			.uni-tab-item-title {
			    color: #555;
			    font-size: 30rpx;
			    height: 80rpx;
			    line-height: 80rpx;
			    flex-wrap: nowrap;
			}
			
			.uni-tab-item-title-active {
			    color: #007AFF;
			}
		}
		.line {
			width: 100vw;
			height: 2rpx;
			background-color: lightgray;
			transform: translateX(-25rpx);
		}
		.detail {
			width: 100%;
			height: 1720rpx;
			margin-top: 30rpx;
		}
	}

</style>
