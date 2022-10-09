<template>
	<view class="chat-container">
			<view class="top-header">
				<view class="back" @click="back">
					<uni-icons type="left" size="28"></uni-icons>
				</view>
				<view class="text">
					选择群类型
				</view>
			</view>
			<view class="group-title">
				<text class="group-txt">普通群</text>
			</view>
			<view class="content-item" style="">
				<uni-list>
					<uni-list-item v-for="(item, index) in topList"
						style="align-items:center;border-radius: 20rpx;height:100rpx;" :title="item.title" showArrow
						link :thumb="item.icon" :to="item.navigatePath" />
				</uni-list>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topList: [{
						title: '立即建群',
						icon: require('@/static/message/add.png'),
						navigatePath: '/pages/component/loading/loading'
					},
				],
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-list-item__content-title{
		font-size: 30rpx;
	}
	/deep/ .uni-list-item__extra-text{
		font-size: 30rpx;
	}
	
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
	
	/deep/ .uniui-arrowright:before {
		margin-top: -2rpx !important
	}
 .top-header {
		display: flex;
		align-items: center;
		padding-top: var(--status-bar-height);
		background-color: white;
		.text {
			font-size: 38rpx;
			margin-left: 20rpx;
		}
	}
.group-txt {
	padding: 15rpx 0 15rpx 25rpx;
	color: #6f6f6f;
}
</style>
