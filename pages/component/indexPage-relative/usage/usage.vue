<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<view class="content">
			<image src="@/static/image/use1.png" mode="widthFix" class="img"></image>
			<image src="@/static/image/use2.png" mode="widthFix" class="img"></image>
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
			
		}
	}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100vw;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
	}
	.content {
		width: 95vw;
		margin: 20rpx 2.5vw;
		.img {
			width: 100%;
			margin: 20rpx 0 0;
		}
	}
}
</style>
