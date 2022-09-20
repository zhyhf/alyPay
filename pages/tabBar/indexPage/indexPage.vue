<template>
	<view class="uni-padding-wrap uni-common-mt">
		<view class="uni-center" style="background:blue; font-size:0;">
			<image class="image" mode="widthFix" src="" />
		</view>
		<view class="more-chose">
			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/elm.png"></image>
			</view>
			<view class="chose-item">
				<image mode="scaleToFill" class="image" src="../../../static/image/center.png"></image>
			</view>

			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/dianying.png"></image>
			</view>
			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/he.png"></image>
			</view>
			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/houc.png"></image>
			</view>
			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/sport.png"></image>
			</view>
			<view class="chose-item">
				<image mode="scaleToFill"  class="image" src="../../../static/image/zhuan.png"></image>
			</view>
			<view class="chose-item">
				<image @click="toNewPage" mode="scaleToFill"  class="image" src="../../../static/image/contry.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	 export default {
		 data(){
			 return {
				 
			 }
		 },
		 methods:{
			 toNewPage(){
				 uni.navigateTo({
				 	url: '/pages/component/GovernmentAffairsCenter/GovernmentAffairsCenter'
				 });
			 }
		 }
	 }
</script>
<style lang="scss" scoped>
	.uni-padding-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image {
		margin:40rpx auto;
		width: 90%;
		height: 30rpx;
	}
	.more-chose {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		/* justify-content: space-between; */
		// background-color: #f7f7f7;
	}
	.chose-item {
		// width: 130rpx;
		// height: 130rpx;
		// margin: 5rpx;
		margin: 1vw;
		width: 16vw;
		height: 16vw;
		.image {
			width: 16vw;
			height: 16vw;
			// width: 130rpx;
			// height: 130rpx;
		}
	}
</style>
