<template>
	<view class="container">
		<view class="header-wrapper">
			<image class="back" src="@/static/mine/back.png" @click="back"></image>
			<image src="@/static/mine/member-header-top.png" class="member-header"></image>
			<view class="activity-wrapper">
				<view class="activity-item" v-for="(item, index) in activities" :key="index">
					<image class="activity-image" :src="item"></image>
				</view>
			</view>
			<image src="@/static/mine/arrow-up.png" class="arrow-up" @click="show" :style="arrowStyle"></image>
		</view>
		<image src="@/static/mine/member-header-bottom.png" class="member-header-bottom"></image>
		<view class="member-content" :style="contentStyle">
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
			<image
				v-if="tabIndex === index"
				class="detail"
				v-for="(item, index) in detailList"
				:key="index"
				:src="item.img"
				:style="{ height: item.height }"
				></image>
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
				],
				showFlag: true,
				detailList: [
					{
						img: require('@/static/mine/all.png'),
						height: '1720rpx'
					},
					{
						img: require('@/static/mine/recommend-detail.png'),
						height: '2200rpx'
					},
					{
						img: require('@/static/mine/special-detail.png'),
						height: '1900rpx'
					},
					{
						img: require('@/static/mine/outgoing-detail.png'),
						height: '1800rpx'
					},
					{
						img: require('@/static/mine/entertainment-detail.png'),
						height: '2000rpx'
					},
					{
						img: require('@/static/mine/food-detail.png'),
						height: '2200rpx'
					},
					{
						img: require('@/static/mine/daily-detail.png'),
						height: '2200rpx'
					}
				]
			}
		},
		methods: {
			ontabtap(index) {
				this.tabIndex = index
			},
			show() {
				this.showFlag = !this.showFlag
			}
		},
		computed: {
			arrowStyle() {
				return this.showFlag ? {
					transition: 'all 0.4s',
					transform: 'translateY(0) rotate(180deg)'
				}: {
					transition: 'all 0.4s',
					transform: 'translateY(670rpx) rotate(0deg)'
				}
			},
			contentStyle() {
				return this.showFlag ? {
					transition: 'all 0.4s',
					transform: 'translateY(-700rpx)'
				}: {
					transition: 'all 0.4s',
					transform: 'translateY(-37rpx)'
				}
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		height: 2820rpx;
	}
	.header-wrapper {
		width: 100vw;
		position: relative;
		.back {
			position: absolute;
			top: 10rpx;
			left: 20rpx;
			z-index: 99;
			width: 25rpx;
			height: 40rpx;
		}
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
			}
		}
		.arrow-up {
			position: absolute;
			bottom: 5rpx;
			width: 25rpx;
			height: 20rpx;
			left: 50%;
			transform: translateX(-50%);
			z-index: 99;
		}
	}
	.member-header-bottom {
		width: 100vw;
		height: 700rpx;
		position: relative;
		top: -12rpx;
	}
	.member-content {
		width: calc(100vw - 50rpx);
		border-top-left-radius: 35rpx;
		border-top-right-radius: 35rpx;
		padding: 20rpx 25rpx;
		background-color: #F5F5F5;
		transform: translateY(-700rpx);
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
				border-bottom: 2px solid #213CC9;
			}
			.uni-tab-item-title {
			    color: #555;
			    font-size: 30rpx;
			    height: 80rpx;
			    line-height: 80rpx;
			    flex-wrap: nowrap;
			}
			
			.uni-tab-item-title-active {
			    color: #213CC9;
			}
		}
		.line {
			width: 100vw;
			height: 2rpx;
			background-color: #e6e6e6;
			transform: translateX(-25rpx);
		}
		.detail {
			width: 100%;
			height: 1720rpx;
			margin-top: 30rpx;
		}
	}

</style>
