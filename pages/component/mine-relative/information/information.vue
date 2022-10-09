<template>
	<view>
		<view class="top-header">
				<uni-icons @click="back" type="left" color="#000" size="24" class="left"></uni-icons>
				<view class="txt">
					个人信息
				</view>
				<view class="right-ke" style="text-align: right;" @click="toService">
					<image style="width: 45rpx;height: 45rpx;" src="/static/mine/kefu2.png" mode="widthFix"></image>
				</view>
		</view>
		<uni-list style="padding-top:150rpx;">
			<uni-list-item title="头像" link clickable @click="clickAvatar">
				<template v-slot:footer>
					<image class="slot-image" src="/static/mine/avatar.png" style="width: 70rpx; height: 70rpx;">
					</image>
				</template>
			</uni-list-item>

			<uni-list-item v-for="(item, index) in topList" :title="item.title" showArrow link
				:rightText="item.rightText ? item.rightText : ''" :to="item.navigatePath"></uni-list-item>
		</uni-list>

		<view class="indentity-intro">
			<text class="identity-title">身份信息</text>
			<text class="identity-text">根据相关法律法规要求，请保持身份信息完善，以便使用支付宝支付相关功能</text>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in middleList" :title="item.title" :showArrow="item.showArrow" clickable @click="click(index)"
				:rightText="item.rightText ? item.rightText : ''" :to="item.navigatePath"></uni-list-item>
		</uni-list>

		<uni-list class="bottom-block">
			<uni-list-item v-for="(item, index) in bottomList" :title="item.title" link :to="item.navigatePath"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				topList: [{
						title: '昵称',
						rightText: '未设置',
						navigatePath: '/pages/component/mine-relative/name/name'
					},
					{
						title: '支付宝账号',
						rightText: '186******31',
						navigatePath: '/pages/component/mine-relative/account/account'
					},
					{
						title: '我的主页',
						icon: require('@/static/mine/huabei.png'),
						navigatePath: '/pages/component/mine-relative/myHomePage/myHomePage'
					}
				],
				middleList: [{
						title: '实名认证',
						rightText: '已认证(**帅)',
						showArrow: false
					},
					{
						title: '身份基本信息',
						rightText: '已完善',
						showArrow: true,
						navigatePath: '/pages/component/mine-relative/baseInfo/baseInfo'
					},
					{
						title: '证件照片',
						rightText: '已上传',
						showArrow: true
					},
					{
						title: '人像验证',
						rightText: '已经验证',
						showArrow: false
					},
					{
						title: '变更姓名或证件号',
						showArrow: true,
						navigatePath: '/pages/component/mine-relative/modify/modify'
					}
				],
				bottomList: [{
						title: '我的车辆',
						navigatePath: '/pages/component/mine-relative/car/car'
					},
					{
						title: '更多',
						navigatePath: '/pages/component/mine-relative/more/more'
					}
				]
			}
		},
		computed: {
			...mapState(['userName'])
		},
		mounted() {
			this.topList[0].rightText = this.userName.length > 0 ? this.userName : '未设置'
		},
		watch: {
			userName(val) {
				this.topList[0].rightText = val
			}
		},
		methods: {
			toService(){
				uni.navigateTo({
					url:'/pages/component/customerServer/customerServer'
				})
			},
			clickAvatar() {
				uni.navigateTo({
					url: '/pages/component/mine-relative/avatar/avatar'
				})
			},
			click(index) {
				if (index === 2) {
					uni.showModal({
						content: '你已经成功上传证件照片。如果没有更换过证件，无需重新上传。',
						confirmText: '上传新证件',
						cancelText: '暂不上传',
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
	/deep/ .uni-list-item__content{
		margin-top: 8rpx;
	}
	/deep/ .uni-list-item__content-title{
		font-size: 34rpx;
	}
	/deep/ .uni-list-item__extra-text{
		font-size: 32rpx;
	}
	/deep/ .uni-list:after{
		height: 0px;
	}
	/deep/ .uni-icon-wrapper{
		margin-top: -4rpx;
	}
	/deep/ .uni-list-item__container{
		padding: 28rpx 30rpx;
	}
	.top-header {
		position: fixed;
		width: 100vw;
		top: 0;
		left: 0;
		padding-top: calc(var(--status-bar-height) + 12rpx);
		display: flex;
		align-items: center;
		font-size: 32rpx;
		padding-bottom: 30rpx;
		color: #000;
		background-color: #F5F5F5;
		padding-left: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		z-index: 9999;

		.left-icon {
			display: flex;
			align-items: center;
		}

		.txt {
			font-size: 36rpx;
			text-align: center;
			margin: 0 auto;
		}
	}

	.indentity-intro {
		width: calc(100vw - 60rpx);
		height: 155rpx;
		background-color: #fff;
		padding: 0 30rpx;
		padding-top: 15rpx;
		margin-top: 28rpx;

		.identity-title {
			display: block;
			font-size: 34rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
		}

		.identity-text {
			color: #999
		}
	}

	.bottom-block {
		margin: 28rpx 0;
	}
</style>
