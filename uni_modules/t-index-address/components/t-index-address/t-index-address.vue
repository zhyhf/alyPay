<template>
	<view class="t-index-address">
		<scroll-view class="t-index-address__scroll-view" :scroll-into-view="scrollview" :scroll-y="scrollY"
			:enable-flex="true">
			<view class="current" :style="contentStyle">
				<view class="current-text">
					定位 / 最近访问
				</view>
				<view class="current-item">
					<view style="display: flex;align-items: center;justify-content: center;" class="item"
						@click="SelectCity(item)" v-for="(item,index) in currentArr" :key="index">
						<text v-if="index == 0 ">
							<image style="width: 25rpx; height: 30rpx;margin: 18rpx 10rpx 0 0;" src="@/static/icons/bp.png"
								mode=""></image>
						</text>
						{{item}}
					</view>
				</view>
			</view>
			<view class="hot-city current">
				<view class="current-text">
					热门城市
				</view>
				<view class="current-item">
					<view class="item" @click="SelectCity(item)" v-for="(item,index) in hotArr" :key="index">
						{{item}}
					</view>
				</view>
			</view>

			<view :id="group.initial" v-for="group in cityList" :key="group.initial">
				<view class="t-index-address__anchor">
					<text>{{ group.initial }}</text>
				</view>
				<view class="t-index-address__list">
					<view class="t-index-address__cell" v-for="(city, index) in group.list" :key="index"
						@click="$emit('select', city)">
						<text>{{ city.name }}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view :style="sideBarStyle" class="t-index-address__sidebar">
			<view class="t-index-address__index" v-for="group in cityList" :key="group.initial"
				@touchstart.stop.prevent="onTouchMove(group.initial)" @touchend.stop.prevent="onTouchStop"
				@touchcancel.stop.prevent="onTouchStop">
				<span>{{ group.initial }}</span>
			</view>
		</view>
		<view class="t-index-address__alert" v-if="touchmove">
			<text>{{ activeIndex }}</text>
		</view>
	</view>
</template>

<script>
	import cityList from "./cities.json";

	export default {
		data() {
			return {
				scrollview: "A",
				cityList: [],
				activeIndex: "A",
				touchmove: false,
				hotArr: [
					'杭州',
					"北京",
					"上海",
					"广州",
					"深圳",
					"成都",
					"重庆",
					"天津"
				],
				currentArr: [
					'南京',
					"杭州",
					"滁州"
				],
				sideBarStyle: {
					opacity: 0,
					transition: 'all 0.3s'
				},
				contentStyle: {}
			};
		},
		watch: {
			activeIndex(value) {
				this.scrollview = value;
			},
			scrollY(value) {
				this.sideBarStyle = {
					opacity: value ? 1 : 0,
					transition: 'all 0.6s'
				}
				this.contentStyle = {
					marginTop: value ? '80rpx' : 0
				}
			}
		},
		props: {
			scrollY: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			initCityList() {
				this.cityList = cityList;
			},
			onTouchMove(index) {
				this.activeIndex = index;
				this.touchmove = true;
			},
			onTouchStop() {
				this.touchmove = false;
			},
		},
		mounted() {
			this.initCityList();
		},
	};
</script>

<style lang="scss" scoped>
	.t-index-address {
		height: 100%;

		&__scroll-view {
			width: 100%;
			height: 100%;
			max-height: 100vh;
		}

		&__anchor {
			padding: 15rpx 30rpx;
			width: 100%;
			font-size: 28rpx;
			font-weight: 500;
			color: #606266;
			background-color: rgb(245, 245, 245);
		}

		&__list {
			padding: 0 70rpx 0 30rpx;
		}

		&__cell {
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 1rpx solid #f2f2f2;

			&:last-child {
				border: none;
			}
		}

		&__sidebar {
			position: fixed;
			top: 50%;
			right: 0;
			transform: translateY(-50%);
			z-index: 99;
		}

		&__index {
			padding: 10rpx 20rpx;
			font-size: 22rpx;
			font-weight: 500;
			line-height: 1;
		}

		&__alert {
			position: fixed;
			top: 50%;
			right: 90rpx;
			z-index: 99;
			margin-top: -60rpx;
			width: 120rpx;
			height: 120rpx;
			font-size: 50rpx;
			color: #fff;
			border-radius: 24rpx;
			background-color: rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.hot-city {
		padding: 0 20rpx;

		.current-item {
			flex-wrap: wrap !important;
			justify-content: space-between;
			padding-right: 30rpx;
		}
	}

	.current {
		padding-left: 22rpx;
	     // margin-top: 26rpx;
		.current-text {
			color: #ccc;
			font-weight: 500;
		}

		.current-item {
			margin-top: 30rpx;
			display: flex;
			padding-bottom: 4rpx;

			.item {
				width: 18vw;
				margin-bottom: 30rpx;
				background-color: white;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				margin-right: 20rpx;
				border-radius: 10rpx;
				box-shadow: 0 0 0 4rpx rgba(0, 0, 0, .1);
			}
		}
	}
</style>
