<template>
	<view style="min-height: 100vh;">
		<view class="header-wrapper">
			<text class="header-text">请选择要添加的证照</text>
		</view>
		<view class="category-wrapper">
			<text class="category-title">常用证件</text>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in casualList"
				class="list"
				:title="item.title"
				to="/pages/me/copyright/copyright"
				link
				thumb="@/static/government/edu.png"
				thumb-size="medium"
			/>
		</uni-list>
		<view class="category-wrapper">
			<text class="category-title">交通行驶</text>
		</view>
		<uni-list>
			<uni-list-item v-for="(item, index) in trafficList"
				:title="item.title"
				to="/pages/me/copyright/copyright"
				link
				thumb="@/static/government/edu.png"
				thumb-size="medium"
			/>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				casualList: [
					{
						title: '学位证书'
					},
					{
						title: '学历证书'
					},
					{
						title: '中华人民共和国机动车驾驶证'
					},
					{
						title: '中华人民共和国居民身份证'
					},
					{
						title: '居民户口簿'
					},
					{
						title: '中华人民共和国机动车行驶证'
					},
					{
						title: '中华人民共和国社会保障卡'
					},
					{
						title: '居住证'
					},
					{
						title: '中华人民共和国结婚证'
					},
					{
						title: '中华人民共和国机动车离婚证'
					},
					{
						title: '出生医学证明'
					},
				],
				trafficList: [
					{
						title: '中华人名共和国道路运输特征'
					},
					{
						title: '道路运输从业人员从业资格证'
					},
					{
						title: '网络预约出租车驾驶员证'
					},
					{
						title: '中华人民共和国机动车登记证书'
					},
					{
						title: '巡游出租汽车驾驶员证'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.header-wrapper {
		margin-top: 10rpx;
		.header-text {
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	.list {
		margin-bottom: 20rpx;
	}
	.category-wrapper {
		margin-top: 15rpx;
		margin-bottom: 10rpx;
		.category-title {
			font-size: 32rpx;
			font-weight: bold;
		}
	}
</style>
