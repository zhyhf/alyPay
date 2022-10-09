<template>
	<view class="setting-container">
		<view class="top-header">
			<view class="back" @click="back">
				<uni-icons type="left" size="28"></uni-icons>
			</view>
			<view class="text">
				设置
			</view>
		</view>
		<view class="content-item" style="margin:20rpx 20rpx 20rpx;">
			<uni-list style="border-radius: 20rpx;">
				<uni-list-item v-for="(item, index) in topList"
					style="align-items:center;border-radius: 20rpx;height:100rpx;" :title="item.title" showArrow
					link :thumb="item.icon" :to="item.navigatePath" />
			</uni-list>
		</view>
		<view class="middle-top" style="margin:10rpx 20rpx;">
			<uni-list style="border-radius: 20rpx;">
				<uni-list-item v-for="(item, index) in middleTopList"
					style="align-items:center;border-radius: 20rpx;height:100rpx;" :title="item.title" showArrow
					link :thumb="item.icon" :to="item.navigatePath" />
			</uni-list>
		</view>
		<view class="content-item" style="margin:10rpx 20rpx;">
			<uni-list style="border-radius: 20rpx;">
				<uni-list-item v-for="(item, index) in bottomList"
					style="align-items:center;border-radius: 20rpx;height:106rpx;" :title="item.title" showArrow
					link :thumb="item.icon" :to="item.navigatePath" />
			</uni-list>
		</view>
		<view class="middle-bodttom" style="margin: 10rpx 20rpx;">
			<uni-list style="border-radius: 20rpx;">
				<uni-list-item v-for="(item, index) in bList"
					style="align-items:center;border-radius: 20rpx;height:106rpx;" :title="item.title" showArrow
					link :thumb="item.icon" :to="item.navigatePath" />
			</uni-list>
		</view>
		<view class="login-other login" style="margin: 10rpx 20rpx;text-align: center;">
			登录其他账号
		</view>
		<view class="login-out login" style="margin: 0 20rpx; text-align: center;">
			退出登录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [{
						title: '账号与安全',
						icon: require('@/static/mine/setting/1.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '支付设置',
						icon: require('@/static/mine/setting/2.png'),
						navigatePath: '/pages/component/loading/loading'
					}
				],
				middleTopList:[
					{
						title: '长辈模式',
						icon: require('@/static/mine/setting/3.png'),
						rightText: '未开启',
						navigatePath: '/pages/component/loading/loading'
					},
				],
				bottomList:[
					    {
							title: '新消息通知',
							icon: require('@/static/mine/setting/4.png'),
							navigatePath: '/pages/component/loading/loading'
						},
						{
							title: '功能管理',
							icon: require('@/static/mine/setting/5.png'),
							navigatePath: '/pages/component/loading/loading'
						},
						{
							title: '皮肤中心',
							icon: require('@/static/mine/setting/6.png'),
							navigatePath: '/pages/component/loading/loading'
						},
						{
							title: '隐私',
							icon: require('@/static/mine/setting/7.png'),
							navigatePath: '/pages/component/loading/loading'
						},
						{
							title: '通用',
							icon: require('@/static/mine/setting/8.png'),
							navigatePath: '/pages/component/loading/loading'
						},
				],
				bList:[
					{
						title: '反馈与投诉',
						icon: require('@/static/mine/setting/9.png'),
						navigatePath: '/pages/component/loading/loading'
					},
					{
						title: '关于',
						icon: require('@/static/mine/setting/10.png'),
						rightText:'版本号 10.2.90',
						navigatePath: '/pages/component/loading/loading'
					}
				]
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-list-item__content-title{
		font-size: 34rpx;
	}
	/deep/ .uni-list-item__extra-text{
		font-size: 32rpx;
	}
	
	// /deep/.uni-list-item__icon-img {
	// 	margin-right: 20rpx !important;
	// }
	
	// /deep/.uni-list-item__content-title {
	// 	font-size: 38rpx !important;
	// }
	
	/deep/ .uni-list--border-bottom {
		height: 0px !important;
	}
	
	/deep/ .uni-list:after {
		height: 0px !important;
	}
	
	/deep/ .uni-list-item__icon {
		margin-top: 0rpx;
	}
	
	/deep/ .uni-list-item__extra-text {
		margin-top: 2px;
	}
	
	/deep/ .uniui-arrowright::before {
		margin-bottom:18rpx !important
	}
	.login {
		background-color: #fff;
		line-height: 80rpx;
		font-size: 32rpx;
		border-radius: 20rpx;
	}
	.top-header {
		display: flex;
		align-items: center;
		padding-top: var(--status-bar-height);
		.text {
			font-size: 38rpx;
			margin-left: 20rpx;
		}
	}
</style>
