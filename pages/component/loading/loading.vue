<template>
	<view class="wrapper">
		<image :src="loadingSrc" class="loading" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: [
					require('@/static/loading.gif'),
					require('@/static/loading2.gif'),
					require('@/static/loading3.gif')
				],
				loadingSrc: require('@/static/loading.gif'),
				title: '加载中 ...'
			}
		},
		methods: {
			
		},
		onLoad(props) {
			props.type && (this.loadingSrc = this.loading[props.type])
			props.title && props.title.length > 0 && (this.title = props.title)
			uni.setNavigationBarTitle({
				title: this.title
			})
		}
	}
</script>

<style scoped lang="scss">
	.wrapper {
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: #fbfbfb;
		.loading {
			width: 150rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate3d(-50%, -50%, 0);
		}
	}
</style>
