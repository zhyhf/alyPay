<template>
	<view class="card-bag-page">
		<view class="top-tab">
			<view @click="currentIndex = index" :class="{'tab-item':true,active:currentIndex==index}"
				v-for="(item,index) in tabArr" :key="index">
				{{item}}
			</view>
		</view>
		<view class="bottom-item" v-if="currentIndex == 0">
			<view class="total">
				共1张
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/youhui.png" mode=""></image>
			</view>
		</view>
		<view class="bottom-item" v-if="currentIndex == 1">
			<view class="total">
				共1张
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/huiyuan.png" mode=""></image>
			</view>
		</view>
		<view class="b-item" style="background-color: transparent;" v-if="currentIndex == 2">
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
				<image src="@/static/cardBag/shen.png" mode=""></image>
			</view>
			<view class="item-bg">
				<image src="@/static/cardBag/huiyuan.png" mode=""></image>
			</view>
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
		}
	}
</script>

<style lang="scss" scoped>
	.top-tab {
		display: flex;
		margin-top: 40rpx;
		height: 40rpx;
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
		margin: 40rpx auto;
		width: 95vw;
		box-sizing: border-box;

		.can-use {
			height: 34vh;

			image {
				height: 100%;
				width: 100%;
			}

		}

		.piao {
			margin-top: 20rpx;
			height: 25vh;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.bottom-item {
		margin: 40rpx auto;
		background-color: #fff;
		width: 95vw;
		padding: 24rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		box-shadow: 2rpx 2rpx 1rpx 2rpx rgba(0, 0, 0, .1);
		border-radius: 18rpx;
		color: rgba(0, 0, 0, .5);


		image {
			margin-top: 18rpx;
			width: 100%;
			height: 15vh;
		}

	}
</style>
