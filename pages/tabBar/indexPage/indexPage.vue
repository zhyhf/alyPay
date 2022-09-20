<template>
	<view >
		<view class="uni-center">
			<view class="top-header">
				<view class="left-text">
					<view class="t-text">
						南京
					</view>
					<view class="b-text">
						多云23℃
					</view>
				</view>
				<view class="text-input">
					<input style="border: 1px solid #ccc;" placeholder="健康码,展示绿码" />
					<view class="btn">
					
					</view>
				</view>
				<view class="add">
					
				</view>
			</view>
			<view class="gongneng">
				<view class="g-item">
					<image src="../../../static/image/shao.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item">
					<image src="../../../static/image/shoufukuan.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item">
					<image src="../../../static/image/chuxing.png" mode="scaleToFill"></image>
				</view>
				<view class="g-item">
					<image src="../../../static/image/kabao.png" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="more-main">
			<view class="more-chose">
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/ele.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/dianying.png"></image>
				</view>

				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/ele.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/jiangkang.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/kuaidi.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/shimin.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/shimin.png"></image>
				</view>
				<view class="chose-item">
					<image @click="toNewPage" mode="scaleToFill" class="image" src="../../../static/image/guojia.png">
					</image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/wode.png"></image>
				</view>
				<view class="chose-item">
					<image mode="scaleToFill" class="image" src="../../../static/image/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="latest-info">
				<view class="b-image">
					<image src="../../../static/image/msg.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/guanggao.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/g2.png" mode="widthFix"></image>
			</view>
			<view class="b-guanggao">
				<image src="../../../static/image/g3.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toNewPage() {
				uni.navigateTo({
					url: '/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter'
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	page {
		padding: 0;
		margin: 0;
	}
	.bottom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.latest-info {
		width: 95vw;
		border-radius: 16rpx;
		// height: 150rpx;
		background-color: #fff;
		.title {
			padding: 10rpx 0 0 10rpx;
			color:rgba(0,0,0,.4);
			font-weight: 700;
			
		}
		image {
			width: 100%;
		}
	}
	.b-guanggao {
		margin-top: 2vw;
		width: 95vw;
		image {
			width: 100%;
		}
	}
	.gongneng {
		width: 100vw;
		// height: 150rpx;
		display: flex;
		background-color: #007AFF;
		justify-content: space-around;
		image {
			width: 20vw;
			height: 20vw;
		}
	}
	.top-header {
		width: 100vw;
		height: 130rpx;
		display: flex;
		background-color: #007AFF;
		.left-text {
			color: white;
			flex: 2;
			// font-size: 24rpx;
		}
		
		.text-input {
			position: relative;
			height: 80rpx;
			overflow: hidden;
			border-radius: 16rpx;
			flex: 5;
			.btn {
				position: absolute;
				right: 0;
				top: 25rpx;
				color: #007AFF;
			}
			input {
				width: 100%;
				height: 100%;
				background-color: #fff;
			}
		}

		.add {
			flex: 1;
		}
	}

	.more-main {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.more-chose {
		margin: 0 auto;
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		/* justify-content: space-between; */
		// background-color: #f7f7f7;
	}

	.chose-item {
		margin: 1vw;
		width: 16vw;
		height: 16vw;

		.image {
			width: 16vw;
			height: 16vw;
		}
	}
</style>
