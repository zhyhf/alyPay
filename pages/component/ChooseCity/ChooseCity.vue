<template>
	<view class="city-sel">
		<view class="top-header">
			<uni-icons @click="back" type="left" color="white" size="24" class="left"></uni-icons>
			<view class="txt">
				南京
			</view>
		</view>
		<view class="current">
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
		<view class="city-list">
			<!-- <view class="mask" v-if="maskFlag" @touchmove="getHeight">

			</view> -->
			<t-index-address @select="select">
			</t-index-address>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				maskFlag: true,
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
				]
			};
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getHeight() {
				const query = uni.createSelectorQuery()
				query.select('.city-list').boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(function(res) {
					console.log(res)
					if (res[0].top <= 20) this.maskFlag = false
					// res[1].scrollTop // 显示区域的竖直滚动位置
				})
			},
			SelectCity(item) {
				uni.setStorageSync('city', item)
				uni.navigateBack({
					delta: 1
				})
			},
			select(data) {
				let {
					name,
					lat,
					lng,
					province
				} = data
				this.SelectCity(name)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.top-header {
		padding-top: var(--status-bar-height);
		display: flex;
		align-items: center;
		font-size: 32rpx;
		margin-bottom: 30rpx;
		height: 80rpx;
		color: white;
		background-color: #1777FF;

		.txt {
			margin: 0 auto;
		}
	}

	.city-list {
		position: relative;
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		// background-color: red;
		z-index: 9999999;
		background-color: transparent;
	}

	.city-sel {
		width: 100vw;
		// padding: 20rpx;
		box-sizing: border-box;
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

		.current-text {
			color: #ccc;
			font-weight: 700;
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
