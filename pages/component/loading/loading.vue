<template>
	<view class="wrapper">
		<image src="@/static/loading.gif" class="loading" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(props) {
			uni.setNavigationBarTitle({
				title: props.title
			})
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		width: 100vw;
		height: 90vh;
		position: relative;
		.loading {
			width: 150rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate3d(-50%, -50%, 0);
		}
	}
</style>
