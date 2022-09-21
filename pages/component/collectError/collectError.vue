<template>
	<view>
		<image v-if="index === 8" src="@/static/government/married-error.png" class="image-sty"></image>
		<image v-if="index === 9" src="@/static/government/divorce-error.png" class="image-sty"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0
			}
		},
		mounted() {
			console.log(uni.getStorageSync('selectMarried'))
			this.index = uni.getStorageSync('selectMarried')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.image-sty {
	width: 100vw;
	height: 2000rpx;
}
</style>
