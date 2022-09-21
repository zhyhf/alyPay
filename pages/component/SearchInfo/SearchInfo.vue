<template>
	<view class="search-info">
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		        </view>
		<view class="top-input">
			<view class="back" @click="back">
				< </view>
					<view class="middle-input">
						<uni-icons size="20" class="search-icon" type="search"></uni-icons>
						<input style="border: 1px solid lightblue;" type="text" placeholder="国家政务服务平台">
					</view>
					<view class="more">

					</view>
			</view>
		<view class="search-result" @click="toCenter">
			<image src="../../../static/searchRes.png" mode="widthFix"></image>
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
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toCenter(){
				uni.navigateTo({
					url:"/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	    .status_bar {
	        height: var(--status-bar-height);
	        width: 100%;
	    }

	.top-input {
		display: flex;
		margin-top: 30rpx;
		padding: 0 20rpx;
		.back {
			margin-right: 20rpx;
			font-size: 50rpx;
			// flex:1;
		}

		.middle-input {
			position: relative;
			.search-icon {
				position: absolute;
				left:10rpx;
				top:10rpx;
				
			}
			input {
				padding: 0 20rpx;
				padding-left: 55rpx;
				width: 70vw;
				border-radius: 14rpx;
				height: 60rpx;
			}

			// flex: 5;
		}

		.more {
			// flex:1;
		}
	}
	.search-result {
		// margin-top: 20rpx;
		width: 94vw;
		margin: 0 auto;
		image {
			margin-top: 4vh;
			width: 100%;
		}
	}
</style>
