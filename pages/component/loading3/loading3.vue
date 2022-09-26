<template>
	<view class="wrapper">
		<image src="@/static/loading2.gif" class="loading" mode="widthFix"></image>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {},
		mounted() {

		},
		onLoad(props) {

		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		width: 100vw;
		height: 100vh;
		background-color: #FBFBFB;
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
