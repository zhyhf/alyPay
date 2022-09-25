<template>
	<view class="wrapper">
		<view class="status_bar"></view>
		<image src="@/static/image/usage-bg.png" class="usage-bg" mode="widthFix"></image>
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
	position: relative;
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
		background-color: #1A44AB;
	}
	.usage-bg {
		width: 100%;
	}
	.content {
		width: 95vw;
		margin: 20rpx 2.5vw;
		position: absolute;
		top: var(--status-bar-height);
		left: 0;
		.img {
			width: 100%;
			margin: 20rpx 0 0;
		}
	}
}
</style>
