<template>
	<view style="min-height: 100vh;">
		<view class="top-header">
			<view class="left-info">
				<uni-icons type="left" color="black" size="26" @click="back"></uni-icons>
				<view class="txt">
					添加证照
				</view>
			</view>
			<view class="right-info">
				<view class="left-img">
					<image @click="toLoading" style="width: 56rpx; height: 56rpx;margin-right: 12rpx;" src="@/static/government/p1.png" mode=""></image>
				</view>
				<view class="right-img" style="position: relative;margin-right: 16rpx;">
					<image @click="toLoading" style="width: 142rpx; height: 56rpx;" class="bg" src="@/static/government/p2.png" mode="">
					</image>
					<view class="more" @click="toLoading">
						<image src="@/static/government/moreBlack.png"></image>
					</view>
					<view class="close" @click="back">
						<image src="@/static/government/closeBlack.png"></image>
					</view>
				</view>
			</view>
			<view class="header-wrapper" style="width: 100vw;">
				<text class="header-text">请选择要添加的证照</text>
			</view>
		</view>

		<view class="category-wrapper" style="margin-top: 224rpx;">
			<text class="category-title">常用证件</text>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in casualList" style="height: 65rpx;" class="list" :title="item.title"
				showArrow link :thumb="item.url" thumb-size="medium" @click="show(index)" />
		</uni-list>
		<view class="category-wrapper">
			<text class="category-title">交通行驶</text>
		</view>
		<uni-list>
			<uni-list-item style="height: 74rpx;" class="list" v-for="(item, index) in trafficList" :title="item.title"
				to="/pages/me/copyright/copyright" link :thumb="item.url" thumb-size="medium" @click="show" />
		</uni-list>
		<uni-popup ref="popup" background-color="#fff">
			<view class="popup-title">
				提示
			</view>
			<view class="popup-content">
				<text>
					暂未在国家政务服务平台找到您证照数据,您可联系地方证照颁发部门核实证照数据上传情况。或点击下方“我要纠错”进行证照缺失登记，等待处理
				</text>
			</view>
			<view class="button-info">
				<view class="btn" @click="close">知道了</view>
				<view class="btn" @click="confirm" style="font-weight: bold;">我要纠错</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				casualList: [{
						title: '学位证书',
						url: require('@/static/government/certificate.png')
					},
					{
						title: '学历证书',
						url: require('@/static/government/degree.png')
					},
					{
						title: '中华人民共和国机动车驾驶证',
						url: require('@/static/government/license.png')
					},
					{
						title: '中华人民共和国居民身份证',
						url: require('@/static/government/identity.png')
					},
					{
						title: '居民户口簿',
						url: require('@/static/government/household.png')
					},
					{
						title: '中华人民共和国机动车行驶证',
						url: require('@/static/government/xingshi.png')
					},
					{
						title: '中华人民共和国社会保障卡',
						url: require('@/static/government/social.png')
					},
					{
						title: '居住证',
						url: require('@/static/government/live.png')
					},
					{
						title: '中华人民共和国结婚证',
						url: require('@/static/government/marriage.png')
					},
					{
						title: '中华人民共和国离婚证',
						url: require('@/static/government/divorce.png')
					},
					{
						title: '出生医学证明',
						url: require('@/static/government/born.png')
					},
				],
				trafficList: [{
						title: '中华人民共和国道路运输证',
						url: require('@/static/government/transport.png')
					},
					{
						title: '道路运输从业人员从业资格证',
						url: require('@/static/government/quality.png')
					},
					{
						title: '网络预约出租车驾驶员证',
						url: require('@/static/government/car.png')
					},
					{
						title: '中华人民共和国机动车登记证书',
						url: require('@/static/government/register.png')
					},
					{
						title: '巡游出租汽车驾驶员证',
						url: require('@/static/government/taxi.png')
					}
				],
				index: 0
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toLoading(){
				uni.navigateTo({
					url:'/pages/component/loading/loading'
				})
			},
			show(index) {
				this.index = index
				if (index === 3 || index === 4) {
					uni.setStorageSync('selectIndex', index)
					uni.navigateTo({
						url: `/pages/component/relativeCertificate/relativeCertificate`
					})
				} else {
					this.$refs.popup.open()
				}
			},
			close() {
				this.$refs.popup.close()
			},
			confirm() {
				if (this.index === 8 || this.index === 9) {
					uni.navigateTo({
						url: '/pages/component/collectError/collectError'
					})
					uni.setStorageSync('selectMarried', this.index)
				}
				this.$refs.popup.close()
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-list-item__content-title{
		margin-top: 18rpx;
	}
	.more{
		position: absolute;
		top: 2rpx;
		left: 16rpx;
		width: 36rpx;
		height: 10rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.close {
		position: absolute;
		right: 20rpx;
		top: 9rpx;
		width: 34rpx;
		height: 34rpx;
	
		image {
			width: 100%;
			height: 100%;
		}
	}
	.top-header {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: var(--status-bar-height);
		padding-bottom: 20rpx;
		z-index: 9999;
		background-color: white;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.left-info {
			display: flex;
			font-size: 34rpx;
			align-items: center;

			.txt {
				margin-left: 20rpx;
			}
		}

		.right-info {
			display: flex;
			flex-direction: row;
			margin-right: 6rpx;
		}
	}

	::v-deep .uni-popup__wrapper {
		width: 600rpx !important;
		min-height: 300rpx !important;
		padding-right: 0;
		position: relative;
		border-radius: 20rpx;
		overflow: hidden;
		background-color: #ffffff;

		.popup-title {
			text-align: center;
			margin-top: 28rpx;
			font-size: 36rpx;
			font-weight: bold;
		}

		.popup-content {
			text-align: center;
			width: 90%;
			padding: 28rpx;
		}

		.button-info {
			width: 100%;
			height: 80rpx;
			display: flex;

			.btn {
				width: 50%;
				border-top: 1px solid lightgray;
				border-radius: 0 !important;
				outline: none;
				display: flex;
				justify-content: center;
				align-items: center;
				color: rgb(77, 117, 208);
			}

			.btn:first-child {
				border-right: 1px solid lightgray;
			}

			.uni-btn {
				flex-basis: 50%;
				font-size: 33rpx;
				background-color: #fff;

				&:first-child {
					// border-bottom-left-radius: 20rpx;
					color: rgb(77, 117, 208);
					// border-right: 1px solid lightgray;
				}

				// &:last-child{
				// 	border-bottom-right-radius: 20rpx;
				// 	color: rgb(77, 117, 208);
				// 	font-weight: bold;
				// }
				// &:after{
				// 	border: none;
				// 	// border-radius: 0rpx;
				// 	border-top: 1px solid lightgray;
				// }
			}

		}
	}

	.header-wrapper {
		margin-top: 46rpx;
		margin-left: 27rpx;

		.header-text {
			font-size: 32rpx;
			font-weight: 400;
		}
	}

	.list {
		margin-bottom: 20rpx;
	}

	.category-wrapper {
		padding-top: 15rpx;
		// margin-left: 27rpx;
		padding-left: 27rpx;
		padding-bottom: 10rpx;
		background-color: white;
		box-sizing: border-box;
		width: 100vw;

		.category-title {
			font-size: 32rpx;
			font-weight: bold;
		}
	}
</style>
