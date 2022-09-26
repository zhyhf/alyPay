<template>
	<view class="container">
		<image src="@/static/image/ant-forest-header.png" mode="widthFix" class="img"></image>
		<image src="@/static/image/ant-forest.gif" mode="widthFix" class="img gif"></image>
		<image src="@/static/image/ant-forest-bottom.png" mode="widthFix" class="bottom"></image>
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

<style scoped lang="scss">
	.container {
		width: 100vw;
		.img {
			width: 100%;
		}
		.gif {
			margin-top: -15rpx;
		}
		.bottom {
			width: 95vw;
			margin: 10rpx 2.5vw;
		}
	}
</style>
