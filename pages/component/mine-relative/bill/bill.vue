<template>
	<view>
		<picker mode="date" fields="month" :value="date" @change="bindDateChange">
			<view>
				<text class="month">{{parseInt(date.split('-')[1])}}</text>
				<text class="yue">月</text>
				<text class="triangle">▼</text>
			</view>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: this.getCurrentMonth()
			}
		},
		methods: {
			bindDateChange(e) {
				this.date = e.target.value
				console.log(this.date)
			},
			getCurrentMonth () {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				month = month > 9 ? month : '0' + month
				return `${year}-${month}`
			}
		}
	}
</script>

<style lang="scss" scoped>
.month {
	font-size: 60rpx;
	font-weight: bold;
	display: inline-block;
	margin-left: 20rpx;
	margin-right: 10rpx;
}
.yue {
	display: inline-block;
	font-size: 34rpx;
	margin-right: 4rpx;
}
.triangle {
	font-size: 24rpx;
}
</style>
