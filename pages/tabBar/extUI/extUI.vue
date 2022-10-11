<template>
	<view class="container">
		<view class="status_bar"></view>
		<view class="header">
			<view class="detail">
				<text class="text">消息</text>
				<image src="@/static/image/broom.png" class="broom"></image>
			</view>
			<image @click="toLoading" src="@/static/image/address-book.png" class="img book"></image>
			<image src="@/static/image/add.png" class="img" @click="showList = !showList"></image>
			<view class="list" v-if="showList">
				<view class="sanjiao">
				</view>
				<view class="sys item" @click="toGroup">
					<image src="/static/message/group.png" mode=""></image>
					<text class="item-t">
						发起群聊
					</text>
				</view>
				<view class="ewm item" @click="toAdd">
					<image src="/static/message/addP.png" mode=""></image>
					<text class="item-t">
						添加朋友
					</text>
				</view>
				<view class="zl item" @click="scanInfo">
					<image src="/static/addControl/b.png" mode=""></image>
					<text class="item-t">
						扫一扫
					</text>
				</view>
			
			</view>
		</view>
		<view class="heaeder-input">
			<image src="@/static/image/search-outline.png" mode="widthFix" class="search-icon"></image>
			<!-- <uni-icons class="search" type="search" size="23" color="#ccc"></uni-icons> -->
			<input @click="focus" type="text" class="input" placeholder="搜索你的好友、最近转账联系人等">
		</view>
		<image @click="jump" src="@/static/image/message1.png" mode="widthFix" class="message1"></image>
		<image @click="jump" src="@/static/image/message2.png" mode="widthFix" class="message2"></image>
		<my-tab-bar></my-tab-bar>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showList:false
			}
		},
		onShow() {
			this.showList = false
		},
		methods: {
			focus() {
				uni.navigateTo({
					url: '/pages/component/indexPage-relative/search/search'
				})
			},
			toLoading(){
				uni.navigateTo({
					url:'/pages/component/loading/loading'
				})
			},
			toAdd(){
				this.showList = false
				uni.navigateTo({
					url:"/pages/component/addPerson/addPerson"
				})
			},
			toGroup(){
				this.showList = false
				uni.navigateTo({
					url:"/pages/component/groupChat/groupChat"
				})
			},
			jump() {
				this.showList = false
				uni.navigateTo({
					url: '/pages/component/loading/loading?type=1'
				})
			},
			scanInfo() {	
				this.showList = false
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
		}
	}
</script>

<style lang="scss" scoped>
	.search-icon {
		position: absolute;
		top: 40rpx;
		left: 43rpx;
		z-index: 999;
		width: 40rpx;
		// background-color: #0493F3;
	}
	.list {
		position: absolute;
		color: white !important;
		font-size: 30rpx;
		right: 46rpx;
		top: 86rpx;
		z-index: 999 !important;
		width: 34vw;
		// height: 22vh;
		padding-bottom: 20rpx;
		padding-top: 10rpx;
		border-radius: 16rpx;
		background-color: black;
		padding-left: 20rpx;
	
		.sanjiao {
			position: absolute;
			right: 10rpx;
			top: -26rpx;
			z-index: 999 !important;
			border-bottom: 15rpx solid black;
			border-right: 15rpx solid transparent;
			border-top: 15rpx solid transparent;
			border-left: 15rpx solid transparent;
	
		}
	
		.item {
			margin-left: 20rpx;
			display: flex;
			align-items: center;
			// justify-content: center;
			width: 80%;
			height: 6.8vh;
	
		}
	
		.item-t {
			margin: 0 20rpx;
		}
	
		image {
			width: 40rpx;
			height: 40rpx;
		}
	}
	
.container {
	width: 100vw;
	/deep/ .uni-input-placeholder{
		color:#9A9A9A;
		padding-left: 84rpx;
		font-size: 30rpx;
	}
	.search {
		position: absolute;
		left: 40rpx;
		top: 38rpx;
	}
	position: relative;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		background-color:  #3974f6;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
	}
	.header {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		background-color:  #3974f6;
		padding-left: 3vw;
		padding-bottom: 26rpx;
		padding-top: 20rpx;
		z-index: 99999;
		.detail {
			display: flex;
			margin-top: 5rpx;
			.text {
				font-size: 38rpx;
				color: #fff;
				font-weight: 500;
			}
			.broom{
				width: 46rpx;
				height: 46rpx;
				margin-left: 18rpx;
				margin-top: 9rpx;
			}
		}
		.img {
			position: absolute;
			width: 47rpx;
			height: 47rpx;
			right: 45rpx;
		}
		.book {
			right:125rpx;
		}
	}
	.heaeder-input {
		width: 100vw;
		background-color: #3974f6;
		padding: 30rpx 0 26rpx 0;
		margin-top: 10rpx;
		position: fixed;
		top: calc(84rpx + var(--status-bar-height));
		left: 0; 
		z-index: 99;
		.input {
			width: 95vw;
			height: 60rpx;
			margin-left: 2.5vw;
			border-radius: 15rpx;
			background-color: #fbfbfb;
		}
	}
	.message1 {
		width: 100%;
		margin-top: calc(196rpx + var(--status-bar-height));;
	}
	.message2 {
		width: 100%;
		margin-top: 20rpx;
	}
}
</style>
