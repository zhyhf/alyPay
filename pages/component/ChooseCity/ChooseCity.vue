<template>
	<view class="city-sel">
		<view class="top_contanier">
			<view class="top-header">
				<uni-icons @click="back" type="left" color="white" size="24" class="left"></uni-icons>
				<view class="txt">
					南京
				</view>
			</view>
			<view class="degree">
				<view class="left">
					<text class="left-degree">22°</text>
					<image src="@/static/image/cloudy.png" class="left-weather"></image>
					<text class="weather-detail"> {{'多云 空气 优'}}</text>
				</view>
				<view class="right" @click="jump">未来24小时预报 ></view>
			</view>
			<text class="hint">天气数据来自中国气象局</text>
			<view class="future-wrapper">
				<view class="weather-item" v-for="(item, index) in futureWeather" :key="index">
					<text class="time">{{ item.title }}</text>
					<image src="@/static/image/cloudy.png" class="weather"></image>
					<text class="future-degree">{{ item.degree }}</text>
				</view>
			</view>
		</view>
		<view class="city-wrapper">
			<view class="input-wrapper">
				<input type="text" class="input-text" placeholder="输入城市名、拼音和首字母查询">
				<image src="@/static/image/search-icon.png" class="search-icon"></image>
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
				],
				futureWeather: [
					{
						title: '今天',
						degree: '27/19°'
					},
					{
						title: '',
						degree: '24/18°'
					},
					{
						title: '',
						degree: '28/21°'
					},
					{
						title: '',
						degree: '30/23°'
					},
					{
						title: '',
						degree: '33/25°'
					}
				]
			};
		},
		created() {
			const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
			let day = new Date().getDay()
			for (let i = 1; i <= 4; i++) {
				day = (day + 1) % 7
				this.$set(this.futureWeather[i], 'title', weeks[day])
			}
		},
		methods: {
			jump() {
				const title = '未来24小时预报'
				uni.navigateTo({
					url: `/pages/component/loading/loading?type=1&title=${title}`
				})
			},
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
	.top_contanier{
		background-image:url(@/static/weather.gif) ;
		height: 380rpx;
		background-size: 100% 100%;
	}
	.top-header {
		padding-top: var(--status-bar-height);
		display: flex;
		align-items: center;
		font-size: 32rpx;
		height: 80rpx;
		color: white;
		.txt {
			margin: 0 auto;
		}
	}
	
	.degree {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin-left: 30rpx;
			.left-degree {
				font-size: 60rpx;
				font-weight: 400;
				color: #DDFDFF;
				margin-right: 10rpx;
			}
			.left-weather {
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;
				margin-top: 16rpx;
			}
			.weather-detail {
				color: #DDFDFF;
				margin-top: 16rpx;
				font-size: 27rpx;
			}
		}
		.right {
			color: #DDFDFF;
			margin-right: 30rpx;
			margin-top: 12rpx;
			font-size: 27rpx;
		}
	}
	.hint {
		display: block;
		color: #87CDFF;
		font-size: 18rpx;
		margin-left: -6rpx;
		margin-top: -6rpx;
		transform: scale(0.9);
	}
	.future-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		.weather-item {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.time {
				color: #87CDFF;
			}
			.weather {
				width: 40rpx;
				height: 40rpx;
				margin: 6rpx 0;
			}
			.future-degree {
				color: #DDFDFF;
			}
		}
	}
	
	.city-wrapper {
		background: #fff;
		border-radius: 20rpx;
		margin-top: -16rpx;
		padding-top: 20rpx;
		.input-wrapper {
			width: 100%;
			margin-bottom: 20rpx;
			position: relative;
			.input-text {
				width: calc(94% - 70rpx);
				margin-left: 3%;
				border-radius: 16rpx;
				height: 60rpx;
				background-color: #f6f6f6;
				padding-left: 70rpx;
			}
			.search-icon {
				position: absolute;
				left: 6%;
				top: 13rpx;
				width: 36rpx;
				height: 36rpx;
			}
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
