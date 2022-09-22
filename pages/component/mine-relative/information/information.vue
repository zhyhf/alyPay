<template>
	<view>
		<uni-list>
			<uni-list-item
				title="头像"
				link
			>
				<template v-slot:footer>
					<image class="slot-image" src="/static/mine/avatar.png" style="width: 70rpx; height: 70rpx;"></image>
				</template>
			</uni-list-item>
			
			<uni-list-item v-for="(item, index) in topList"
				:title="item.title"
				showArrow
				link
				:rightText="item.rightText ? item.rightText : ''"
			></uni-list-item>
		</uni-list>
		
		<view class="indentity-intro">
			<text class="identity-title">身份信息</text>
			<text class="identity-text">根据相关法律法规要求，请保持身份信息完善，以便使用支付宝支付相关功能</text>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in middleList"
				:title="item.title"
				:showArrow="item.showArrow"
				clickable
				:rightText="item.rightText ? item.rightText : ''"
			></uni-list-item>
		</uni-list>
		
		<uni-list class="bottom-block">
			<uni-list-item v-for="(item, index) in bottomList"
				:title="item.title"
				link
			></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [
					{
						title: '昵称',
						rightText: '未设置'
					},
					{
						title: '支付宝账号',
						rightText: '186******31'
					},
					{
						title: '我的主页',
						icon: require('@/static/mine/huabei.png')
					}
				],
				middleList: [
					{
						title: '实名认证',
						rightText: '已认证(**帅)',
						showArrow: true
					},
					{
						title: '身份基本信息',
						rightText: '已完善',
						showArrow: true
					},
					{
						title: '认证照片',
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
						showArrow: true
					}
				],
				bottomList: [
					{
						title: '我的车辆'
					},
					{
						title: '更多'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.indentity-intro {
		width: calc(100vw - 60rpx);
		height: 155rpx;
		background-color: #fff;
		padding: 0 30rpx;
		padding-top: 15rpx;
		margin-top: 20rpx;
		.identity-title {
			display: block;
			font-size: 30rpx;
			font-weight: bold;
			margin-bottom: 10rpx;
		}
		.identity-text {
			color: #999
		}
	}
	.bottom-block {
		margin: 20rpx 0;
	}
</style>
