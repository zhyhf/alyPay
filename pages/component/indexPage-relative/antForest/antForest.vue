<template>
	<view class="container">
		<image v-show="count < 3" src="@/static/loading.gif" mode="widthFix" class="loading"></image>
		<image v-show="count === 3" src="@/static/image/ant-forest-header.png" mode="widthFix" class="img" @load="load"></image>
		<image v-show="count === 3" src="@/static/image/ant-forest.gif" mode="widthFix" class="img gif" @load="load"></image>
		<image v-show="count === 3" src="@/static/image/ant-forest-bottom.png" mode="widthFix" class="bottom" @load="load"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0
			}
		},
		methods: {
			load() {
				this.count++
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100vw;
		.loading {
			width: 160rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate3d(-50%, -50%, 0);
		}
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
