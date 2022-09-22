<template>
	<view class="travel">
		<view class="bg">
		</view>
		<view class="sanjiao">
			<image src="../../../static/travel/bg.png" mode="widthFix"></image>
		</view>
		<view class="travel-choose">
			<view class="travel-select">
				<view @click="changeTab(index)" class="travel-item" :key="index" v-for="(item,index) in travelSelArr">
					<view :class="{'travel-icon':true,'active-icon':currentIndex == index}">
						<image :src="currentIndex == index ? item.active : item.default" mode="widthFix"></image>
					</view>
					<!-- <view class="travel-text">
						{{item.text}}
					</view> -->
				</view>

			</view>
			<!-- 打车 -->
			<view class="travel-map taxi" v-if="travelSelArr[currentIndex].type == 'taxi'">
				<map class="map" name=""></map>
				<view class="map-bottom">
					<image src="../../../static/travel/ta.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 公交 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == 'bus'">
				<image style="width: 100vw;" src="../../../static/travel/bu.png" mode="widthFix">
				</image>
			</view>
			<!-- 地铁 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == 'subway'">
				<image style="width: 100vw;" src="../../../static/travel/su.png" mode="widthFix">
				</image>
			</view>
			<!-- 12306 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == '12306'">
				<image style="width: 100vw;" src="../../../static/travel/ti.png" mode="widthFix">
				</image>
			</view>
			<!-- 机票 -->
			<view style="width: 100vw;" class="travel-map" v-if="travelSelArr[currentIndex].type == 'ticket'">
				<image style="width: 100vw;" src="../../../static/travel/ti.png" mode="widthFix">
				</image>
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
	export default {
		components: {
			Cycle
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	$pageWidth:92vw;

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
		top: 6vh;

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
		width: 100vw;
		background-color: #1777FF;

		.travel-item {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background-color: #1777FF;
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
		margin-top: 30rpx;
		width: $pageWidth;
		border-radius: 20rpx;
		overflow: hidden;
		padding-top: 180rpx;

		.map {
			width: 100%;
			height: 45vh;
			border-radius: 20rpx;
		}

		.map-bottom {
			width: 100%;

			image {
				width: $pageWidth;
			}
		}
	}
</style>
