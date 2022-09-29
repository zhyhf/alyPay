<template>
	<view class="travel">
		<view class="bg">
		</view>
		<view class="sanjiao">
			<image src="../../../static/travel/bg.png" mode="widthFix"></image>
		</view>
		<view class="travel-choose">
			<view class=" sel-box">
				<view class="top-status-bar">
					<view class="icon">
						<uni-icons color="white" @click="back" type="left" size="24"></uni-icons>
						<text class="txt">出行·南京</text>
					</view>
					<view class="right-text">
						管理
					</view>
				</view>
				<view class="travel-select">
					<view @click="changeTab(index)" class="travel-item" :key="index"
						v-for="(item,index) in travelSelArr">
						<view :class="{'travel-icon':true,'active-icon':currentIndex == index}">
							<image :src="currentIndex == index ? item.active : item.default" mode="widthFix"></image>
						</view>
						<!-- <view class="travel-text">
						{{item.text}}
					</view> -->
					</view>

				</view>

			</view>
			<!-- 打车 -->
			<view class="travel-map taxi" v-if="travelSelArr[currentIndex].type == 'taxi'">
				<map class="map" name=""></map>
				<view class="map-bottom">
					<image src="@/static/travel/cab1.png" mode="widthFix"></image>
					<image src="@/static/travel/cab2.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 公交 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == 'bus'">
				<image style="width: 94vw;margin-left: 3vw;" src="../../../static/travel/bu.png" mode="widthFix">
				</image>
			</view>
			<!-- 地铁 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == 'subway'">
				<image style="width: 94vw;margin-left: 3vw;" src="../../../static/travel/su.png" mode="widthFix">
				</image>
			</view>
			<!-- 12306 -->
			<view class="travel-map taxi" v-if="travelSelArr[currentIndex].type == '12306'">
				<Purchase></Purchase>
			</view>
			<!-- 机票 -->
			<view class="travel-map taxi" v-if="travelSelArr[currentIndex].type == 'ticket'">
				<!-- <image style="width: 100vw;" src="../../../static/travel/ti.png" mode="widthFix">
				</image> -->
				<Ticket></Ticket>
			</view>
			<!-- 骑行 -->
			<view class="travel-map taxi" v-if="travelSelArr[currentIndex].type == 'cycling'">
				<Cycle></Cycle>
			</view>
		</view>
	</view>
</template>

<script>
	import Cycle from './components/Cycle.vue'
	import Ticket from './components/ticket.vue'
	import Purchase from './components/purchase.vue'
	export default {
		components: {
			Cycle,
			Ticket,
			Purchase
		},
		data() {
			return {
				currentIndex: 2,
				currPos: {
					lon: 118.3832,
					lat: 32.42
				},
				travelSelArr: [{
						default: require("../../../static/travel/Bus.png"),
						active: require("../../../static/travel/Bus2.png"),
						type: 'bus'
					},
					{
						default: require("../../../static/travel/Subway.png"),
						active: require("../../../static/travel/Subway2.png"),
						type: 'subway'
					},
					{

						default: require("../../../static/travel/Taxi.png"),
						active: require("../../../static/travel/Taxi2.png"),
						type: 'taxi'
					},
					{
						default: require("../../../static/travel/12306.png"),
						active: require("../../../static/travel/123062.png"),
						type: '12306'
					},
					{
						default: require("../../../static/travel/Ticket.png"),
						active: require("../../../static/travel/Ticket2.png"),
						type: 'ticket'
					},
					{
						default: require("../../../static/travel/Cycling.png"),
						active: require("../../../static/travel/Cycling2.png"),
						type: 'cycling'
					}
				]
			};
		},
		methods: {
			changeTab(i) {
				this.currentIndex = i
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	$pageWidth:94vw;

	.top-status-bar {
		display: flex;
		align-items: center;
		width: 100vw;
		justify-content: space-between;
		color: white;
		font-size: 32rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		padding-top: var(--status-bar-height);
		background-color: #0C7DFF;

		.icon {
			display: flex;
			align-items: center;

			.txt {
				margin-left: 20rpx;
				font-weight: 500;
				font-size: 38rpx;
			}
		}
		.right-text {
			font-size: 28rpx;
			font-weight: normal;
		}
	}

	.sel-box {
		position: fixed !important;
		top: 0 !important;
		left: 0 !important;
		z-index: 9999999;
	}

	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 22vh;
		// transform: skew(0deg, 50deg);
		background-color: #0C7DFF;
	}

	.sanjiao {
		width: 100vw;
		position: absolute;
		left: 0;
		top: -20rpx;

		image {
			width: 100vw;
		}

		// transform: scale(1.3);
		// background-color: #0C7DFF;
	}

	.travel {
		display: flex;
		width: 100vw;
	}

	.taxi {
		margin: 0 auto;
		// margin-top: 100rpx !important;
		width: $pageWidth;
	}

	.travel-choose {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		width: 100vw;
		margin: 0 auto;
		color: rgba(0, 0, 0, .4);
		font-weight: 600;
		overflow-y: auto;
	}

	.travel-select {
		flex-direction: row;
		display: flex;
		z-index: 999;
		justify-content: space-between;
		position: fixed;
		// height: 20vh;
		width: calc(100vw - 40rpx);
		padding-top: 20rpx;
		margin: 0 20rpx;
		background-color: #0C7DFF;

		.travel-item {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background-color: #0C7DFF;
		}

		.active-icon {
			padding-top: 10rpx;
		}

		.travel-icon {
			width: 95rpx;
			height: 130rpx;
			margin-bottom: 20rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.travel-map {
		margin-top: 40rpx;
		width: $pageWidth;
		border-radius: 20rpx;
		overflow: hidden;
		padding-top: 280rpx;
		position: relative;

		.map {
			width: 100%;
			height: 37vh;
			border-radius: 20rpx;
		}

		.map-bottom {
			width: 100%;

			image {
				border-radius: 20rpx;
				width: $pageWidth;
			}
		}
	}
</style>
