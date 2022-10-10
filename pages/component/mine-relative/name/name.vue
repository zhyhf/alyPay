<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="header">
			<image src="@/static/image/back.png" class="back" @click="back"></image>
			<text class="title">昵称</text>
			<view class="header-right">
				<text class="right-text" @click="save">保存</text>
			</view>
		</view>
		
		<view class="content">
			<text class="name">昵称</text>
			<input type="text" class="input-text" v-model="name">
		</view>
		<text class="text">设置后，其他人将看到你的昵称</text>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				name: ''
			}
		},
		computed: {
			...mapState(['userName'])
		},
		mounted() {
			this.name = this.userName
		},
		watch: {
			userName(val) {
				this.name = this.userName
			}
		},
		methods: {
			...mapMutations(['changeUserName']),
			save() {
				if (this.name.length <= 0) {
					uni.navigateBack()
					return
				} else {
					this.changeUserName(this.name)
					uni.navigateBack()
					return
				}
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
.wrapper {
	width: 100%;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index:999;
	}
	.header {
		z-index:99;
		width: 100%;
		position: fixed;
		left: 0;
		top: var(--status-bar-height);
		display: flex;
		// justify-content: center;
		align-items: center;
		background-color: #fff;
		padding-bottom: 20rpx;
		.back {
			// position: absolute;
			// left: 20rpx;
			// top: 10rpx;
			margin:10rpx 20rpx 0 20rpx;
			width: 34rpx;
			height: 34rpx;
		}
		.title {
			margin:10rpx 20rpx 0 20rpx;
			font-size: 38rpx;
			font-weight: 500;
		}
		.header-right {
			position: absolute;
			right: 20rpx;
			top: 15rpx;
			.right-text {
				color: #323232;
				margin-right: 20rpx;
				font-size: 34rpx;position: relative;
				top: 0rpx;
			}
		}
	}
	.content {
		width: calc(100% - 48rpx);
		margin-top: calc(100rpx + var(--status-bar-height));
		background-color: #fff;
		padding: 16rpx 24rpx;
		display: flex;
		border-top: 1rpx solid #E4E4E4;
		border-bottom: 1rpx solid #E4E4E4;
		align-items: center;
		.name {
			width: 150rpx;
		}
		.input-text {
			flex: 1;
			height: 70rpx;
		}
	}
	.text {
		display: block;
		margin-top: 20rpx;
		margin-left: 20rpx;
		font-size: 28rpx;
		color: gray;
	}
}
</style>
