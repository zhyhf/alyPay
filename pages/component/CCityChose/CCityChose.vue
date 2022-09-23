<template>
	<view class="province">
		<view class="cur-pos">
			<view class="top-title">
				定位/最近访问
			</view>
			<view class="choose">
				<view @click="chosePro(item)" class="c-item" v-for="(item,index) in cArr" :key="index">
					{{item}}
				</view>
			</view>
		</view>
		<view class="choose-province">
			<view class="top-title" style="padding-left: 35rpx;">
				选择省 (市)
			</view>
			<view class="out-box">
				<view @click="chosePro(item)" class="p-item" v-for="(item,index) in province" :key="index">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				province: [
					"北京市",
					"天津市",
					"河北省",
					"陕西省",
					"内蒙古自治区",
					"辽宁省",
					"吉林省",
					"黑龙江省",
					"上海市",
					"江苏省",
					"浙江省",
					"安徽省",
					"福建省",
					"江西省",
					"山东省",
					"河南省",
					"湖北省",
					"湖南省",
					"广东省",
					"广西壮族自治区",
					"海南省",
					"重庆市",
					"四川省",
					"贵州省",
					"云南省",
					"西藏自治区",
					"陕西省",
					"甘肃省",
					"青海省",
					"宁夏回族自治区",
					"新疆维吾尔自治区",
					"香港特别行政区",
					"澳门特别行政区",
					"台湾省"
				],
				cArr: [
					"江苏省",
					"北京市"
				]
			};
		},
		methods: {
			chosePro(value) {
				uni.setStorageSync("pro", value)
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-title {
		color: #A6A6A6;
	}

	.cur-pos {
		padding: 35rpx;


		.choose {
			display: flex;
			padding-top: 20rpx;

			.c-item {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 25rpx;
				width: 160rpx;
				height: 60rpx;
				border-radius: 14rpx;
				background-color: #fff;
			}
		}
	}

	.choose-province {
		padding-bottom: 20rpx;

		.out-box {
			// display: flex;
			// justify-content: center;
			width: 100vw;
			// height: 5vh;
			background-color: white;
		}

		.p-item {
			width: 92vw;
			height: 6vh;
			padding-left: 6rpx;
			font-size: 32rpx;
			line-height: 6vh;
			margin: 0 auto;
			border-bottom: 1px solid #ccc;
		}
	}
</style>
