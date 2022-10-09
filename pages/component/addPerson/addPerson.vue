<template>
	<view class="add-container">
		<view class="top-header">
			<view class="back" @click="back">
				<uni-icons type="left" size="28"></uni-icons>
			</view>
			<view class="text" @click="back">
				添加朋友
			</view>
		</view>
		<view class="search-input">
			<uni-icons class="search" type="search" size="20" color="#6f6f6f"></uni-icons>
			<input @focus="gotoSearch" type="text" placeholder="支付宝号/手机号/邮箱">
		</view>
		<view class="main-container" style="">
			<view class="item b-distance" @click="toLoading">
				<view class="left">
					<image src="/static/message/card.png" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="left-text">
						<view class="top-text">
							我的名片
						</view>
						<view class="bottom-text">
							扫一扫加我好友，还可以分享到微信
						</view>
					</view>
					<view class="right-arrow">
						<uni-icons type="right" size="28" color="rgba(0,0,0,.2)"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class="item b-distance" @click="toLoading">
				<view class="left">
					<image src="/static/message//phone.png" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="left-text">
						<view class="top-text">
							手机联系人
						</view>
						<view class="bottom-text">
							添加或邀请通讯录中的朋友
						</view>
					</view>
					<view class="right-arrow">
						<uni-icons type="right" size="28" color="rgba(0,0,0,.2)"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class="item" @click="scanInfo">
				<view class="left">
					<image src="/static/message/shao.png" mode="widthFix"></image>
				</view>
				<view class="right" style="border-bottom: 1rpx solid rgba(0, 0, 0, .08);height: 100%;">
					<view class="left-text">
						<view class="top-text">
							扫一扫
						</view>
						<view class="bottom-text">
							扫描二维码添加朋友
						</view>
					</view>
					<view class="right-arrow">
						<uni-icons type="right" size="28" color="rgba(0,0,0,.2)"></uni-icons>
					</view>
				</view>
			</view>
			<view class="item b-distance" @click="toLoading">
				<view class="left">
					<image src="/static/message/qun.png" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="left-text">
						<view class="top-text">
							面对面建群
						</view>
						<view class="bottom-text">
							与身边的朋友进入同一个群聊
						</view>
					</view>
					<view class="right-arrow">
						<uni-icons type="right" size="28" color="rgba(0,0,0,.2)"></uni-icons>
					</view>
				</view>
			</view>
			
			<view class="item" @click="toLoading">
				<view class="left">
					<image src="/static/message/live.png" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="left-text">
						<view class="top-text">
							生活号
						</view>
						<view class="bottom-text">
							获取更多咨询和服务
						</view>
					</view>
					<view class="right-arrow">
						<uni-icons type="right" size="28" color="rgba(0,0,0,.2)"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			gotoSearch(){
				uni.navigateTo({
					url:"/pages/component/searchPerson/searchPerson"
				})
			},
			scanInfo() {
			
				uni.scanCode({
					onlyFromCamera: true,
					success(res) {
						console.log("扫描成功")
						this.showList = false
					},
					fail() {
						this.showList = false
					},
				})
			},
			toLoading(){
				uni.navigateTo({
					url:'/pages/component/loading/loading'
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.b-distance {
	margin-bottom: 30rpx;
}
.item {
	display: flex;
	align-items: center;
	padding-left:20rpx;
	height: 160rpx;
	// padding-left: ;
	background-color: white;
	.right-arrow {
		margin-right: 20rpx;
	}
	.left {
		image {
			width: 81rpx;
		}
	}
	.right {
		flex: 1;
		display: flex;
		padding-left: 20rpx;
		justify-content: space-between;
		align-items: center;
	}
	.left-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: -10rpx;	
		.top-text {
			font-size: 36rpx;
			margin-bottom: 10rpx;
			
		}
		.bottom-text {
			font-size: 28rpx;
			color: #6f6f6f;
		}
	}
}
.top-header {
		display: flex;
		align-items: center;
		padding-top:calc(var(--status-bar-height) + 10rpx);
		background-color: white;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		.text {
			font-size: 38rpx;
			margin-left: 20rpx;
		}
	}
	.search-input {
		position: relative;
		margin: 30rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		padding:10rpx 20rpx;
		box-sizing: border-box;
		// line-height: 100rpx;
		height: 100rpx;
		background-color: #fff;
		.search {
			position: absolute;
			top: 28rpx;
			left: 39rpx;
		}
		input {
			padding: 10rpx;
			padding-left: 65rpx;
			border-radius: 16rpx;
			width: 100%;
			// border: 1rpx solid red;
			background-color: rgba(0, 0, 0, .06);
		}
	}
</style>
