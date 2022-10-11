<template>
	<view class="healthCode-container">
		<view class="top-title">
			健康码 · 南京
		<!-- 	<view class="right-icon">
				<view class="application-right">
					<image class="bg" src="@/static/government/bg.png" mode="widthFix"></image>
					<view class="more" @click="toLoading">
						<image src="@/static/government/more.png" mode="widthFix"></image>
					</view>
					<view class="shuxian"></view>
					<view class="close" @click="back">
						<image src="@/static/government/close.png" @click='back' mode="widthFix"></image>
					</view>
				</view>
			</view> -->
			<view class="right-icon">
				<view class="application-right" @click="back">
					<image class="bg" src="@/static/government/bg1.png" mode=""></image>
					<view class="more">
						<image src="@/static/government/more.png" mode=""></image>
					</view>
					<view class="close">
						<image src="@/static/government/close.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-top">
			
		</view>
		<view class="health-code-main">
			<view class="code-tabbar">
				<view v-for="(item,index) in tabBar" :key="index" :class="{item:true,active:index == currentIndex}" @click="currentIndex = index">
					{{item}}
					<view class="line" v-show="currentIndex == index">
						
					</view>
				</view>
			</view>
			<view class="main-container">
				<image :src="imageList[currentIndex]" mode="widthFix"></image>
			</view>
			<button @click="toLoading" class="btn">立即查看</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:0,
				tabBar:[
					"苏康码",
					"国家平台健康码"
				],
				imageList:[
					require('@/static/healthCode/h.png'),
					require('@/static/healthCode/ch.png')
				]
			};
		},
		methods:{
			back(){
				uni.switchTab({
					url:'/pages/tabBar/indexPage/indexPage'
				})
			},
			toLoading(){
				uni.navigateTo({
					url:"/pages/component/loading3/loading3"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn {
		width: 85%;
		background-color: #1777FF;
		color: white;
		margin-bottom: 3.4vh;
		margin-top: 10rpx;
	}
	.main-container {
		padding-top: 24rpx;
		image {
			width: 100%;
		}
	}
	.health-code-main {
		position: fixed;
		top:190rpx;
		z-index: 999;
		left: 50%;
		transform: translateX(-50%);
		background-color: #fff;
		border-radius: 18rpx;
		width: 92%;
		// height: 55vh;
		.code-tabbar {
			margin-top: 60rpx;
			display: flex;
			justify-content: space-around;
			font-size: 36rpx;
			border-bottom: 1rpx solid rgba(0, 0, 0, .05);
		}
		.active {
				color: #1777FF !important;
			}
		.item {
			display: flex;
			flex-direction: column;
			// justify-content: center;
			align-items: center;
			.line {
				margin-top: 20rpx;
				width: 60rpx;
				height: 6rpx;
				border-radius: 16rpx;
				background-color: #1777FF;
			}
		}
		
	}
	.bg-top {
	   position: absolute;
	   top: -30%;	
	   width: 160vw;
	   height: 120vw;
	   margin-left: -30vw;
	   border-radius: 50%;
	   background:linear-gradient(to bottom , #1777FF 100%, #fff 0% );
	   filter:blur(10px);
	
	}
	.application {
		position: absolute;
		top: 32rpx;
		right: 152rpx;
		image {
			width: 57rpx;
			height: 57rpx;
		}
	}
	
	.application-right {
		.more {
			position: absolute;
			left: 25rpx;
			top: -3rpx;
			width: 40rpx;
			height: 10rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
		.close {
			position: absolute;
			left: 110rpx;
			top: 14rpx;
			width: 40rpx;
			height: 40rpx;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	
		.bg {
			width: 170rpx;
			height: 66rpx;
		}
	}
	.top-title {
		position:fixed;
		// top: 0;
		// left: 0;
		width: 100vw;
		z-index: 999999;
		color: #FDFDFD;
		font-size: 36rpx;
		font-weight: 500;
		letter-spacing: 1rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 65rpx;
		padding-bottom: 35rpx;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		background-color: #1777FF;
	
		.right-icon {
			position: absolute;
			top: 65rpx;
			right: 15rpx;
			width: 24vw;
		}
	}
</style>
