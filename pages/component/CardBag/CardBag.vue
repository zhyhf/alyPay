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
			 <strong><view class="bottom-item" v-if="currentIndex == 0">
			<view class="total">
				共1张
			</view>
			<view class="item-bg">
				<image style="height: 21vh;" src="@/static/cardBag/wy.png" mode=""></image>
			</view>
		</view>
		<view class="bottom-item" v-if="currentIndex == 1">
			<view class="total">
				共1张
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/wh.png" style="height: 21vh;" mode=""></image>
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
				全部证件
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/s.png" mode=""></image>
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/h.png" mode=""></image>
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/y.png" mode=""></image>
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/sf.png" mode=""></image>
			</view>
		</view></strong>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				tabArr: [
					"优惠卷",
					"会员卡",
					"票",
					"证件"
				]
			};
		},
		methods: {
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
	.bottomCont{
		position:absolute;
		top: 150px;
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
	}

	.tab-item {
		// transition: all .3s;
	}

	.active {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: blue;
		font-weight: 700;
		font-size: 34rpx;

		&::after {
			display: block;
			margin-top: 10rpx;
			content: '';
			width: 70rpx;
			height: 2px;
			background-color: blue;
		}
	}

	.b-item {
		margin: 0rpx auto;
		// margin-top: 220rpx;
		width: 95vw;
		box-sizing: border-box;

		.can-use {
			height: 30vh;
            margin-top: 10rpx;
			image {
				height: 100%;
				width: 100%;
			}

		}

		.piao {
			margin-top: 20rpx;
			height: 20vh;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.bottom-item {
		margin: 0rpx auto;
		background-color: #fff;
		// margin-top: 220rpx;
		width: 95vw;
		padding: 24rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		box-shadow: 2rpx 2rpx 1rpx 2rpx rgba(0, 0, 0, .1);
		border-radius: 18rpx;
		color: rgba(0, 0, 0, .5);


		image {
			margin-top: 30rpx;
			width: 100%;
			height: 18vh;
		}

	}
</style>
