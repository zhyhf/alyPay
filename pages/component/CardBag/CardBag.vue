<template>
	<view class="card-bag-page">
		<view class="top-container">
			<view class="top-status-bar">
				<view class="icon">
					<uni-icons color="black" @click="back" type="left" size="24"></uni-icons>
					<text class="txt">卡包</text>
				</view>
			</view>
			<view class="top-tab">
				<view @click="currentIndex = index" :class="{'tab-item':true,active:currentIndex==index}"
					v-for="(item,index) in tabArr" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="bottomCont">
			<strong>
				<view class="bottom-item" v-if="currentIndex == 0">
					<!-- 					<view class="total">
						共1张
					</view> -->
					<view class="item-bg">
						<image style="height: 20vh;" src="@/static/cardBag/wy.png" mode=""></image>
					</view>
				</view>
				<view class="bottom-item" v-if="currentIndex == 1">
					<!-- <view class="total">
						共1张
					</view> -->
					<view class="item-bg">
						<image src="@/static/cardBag/wh.png" style="height: 20vh;" mode=""></image>
					</view>
				</view>
				<view class="b-item " style="background-color: transparent;" v-if="currentIndex == 2">
					<view class="can-use">
						<image src="@/static/cardBag/keyong.png" mode=""></image>
					</view>
					<view class="piao">
						<image src="@/static/cardBag/fapiao.png" mode=""></image>
					</view>
				</view>
				<view class="bottom-item" v-if="currentIndex == 3">
					<view class="total">
						<text class="all">
							全部证件
						</text>
						<text class="add" @click="toLoading(9)">
							添加 | 管理
						</text>
					</view>
					<view @click="toLoading(index)" class="item-bg" v-for="(item,index) in certificates" :key="index">
						<image :src="item" mode="widthFix"></image>
					</view>
				</view>
			</strong>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				certificates: [
					require('@/static/cardBag/1.png'),
					require('@/static/cardBag/2.png'),
					require('@/static/cardBag/3.png'),
					require('@/static/cardBag/4.png'),
					require('@/static/cardBag/5.png'),
					require('@/static/cardBag/6.png'),
					require('@/static/cardBag/7.png'),
					require('@/static/cardBag/8.png'),
					require('@/static/cardBag/9.png'),
					// require('@/static/cardBag/10.png'),
					require('@/static/cardBag/11.png'),
					require('@/static/cardBag/12.png'),
					require('@/static/cardBag/13.png'),
					require('@/static/cardBag/14.png'),
					require('@/static/cardBag/15.png'),
				],
				currentIndex: 0,
				tabArr: [
					"优惠劵",
					"会员卡",
					"票",
					"证件"
				]
			};
		},
		methods: {
			toLoading(index) {
				if (index != 0 && index != 1 && index != 2) {
					uni.navigateTo({
						url: '/pages/component/loading/loading'
					})
				}
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
	.top-container {
		position: fixed;
		padding-top: var(--status-bar-height);
		top: 0;
		left: 0;
		z-index: 99999;
		padding-bottom: 30rpx;
		background-color: #fff;
	}

	.bottomCont {
		position: absolute;
		top: 120px;
		left: 50%;
		width: 1000px;
		margin-left: -500px;
	}

	.top-status-bar {
		display: flex;
		align-items: center;
		width: 100vw;
		justify-content: space-between;
		color: black;
		font-size: 32rpx;
		box-sizing: border-box;
		padding: 0 20rpx;

		background-color: white;

		.icon {
			display: flex;
			align-items: center;

			.txt {
				font-size: 34rpx;
				margin-left: 20rpx;
			}
		}
	}

	.top-tab {
		display: flex;
		margin-top: 40rpx;
		justify-content: space-around;
		font-size: 30rpx;
		font-weight: 400;
		padding: 0 35rpx;
		width: 100vw;
		box-sizing: border-box;
	}

	.tab-item {
		width: 25vw;
		text-align: center;
		// transition: all .3s;
	}

	.active {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #0C7FFE;
		font-weight: 700;
		font-size: 34rpx;
		margin-bottom: 6rpx;

		&::after {
			display: block;
			margin-top: 10rpx;
			content: '';
			width: 70rpx;
			height: 2px;
			background-color: #0C7FFE;
		}
	}

	.b-item {
		margin: 0rpx auto;
		// margin-top: 220rpx;
		width: 95vw;
		box-sizing: border-box;

		.can-use {
			height: 32vh;
			margin-top: 10rpx;

			image {
				height: 100%;
				width: 100%;
			}

		}

		.piao {
			margin-top: 20rpx;
			height: 21vh;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.bottom-item {
		margin: 0rpx auto;
		background-color: #fff;
		font-weight: 400;
		// margin-top: 220rpx;
		width: 95vw;
		padding: 24rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		box-shadow: 2rpx 2rpx 1rpx 2rpx rgba(0, 0, 0, .1);
		border-radius: 18rpx;
		color: rgba(0, 0, 0, .6);

		.total {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.add {
				color: rgba(0, 0, 0, .3);
				font-size: 28rpx;
			}
		}

		image {
			margin-top: 30rpx;
			width: 100%;
			height: 18vh;
		}

	}
</style>
