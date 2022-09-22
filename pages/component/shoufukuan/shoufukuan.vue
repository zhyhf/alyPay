<template>
	<view class="container">
		<view style="padding-top:25rpx;">
			<image src="../../../static/image/shoufukuanInner.png" mode="widthFix" style="display:block;margin:0 auto;width: 93%;"></image>
		</view>
	  <uni-card :isShadow="true" mode="basic" :border="false" :padding="false" :spacing="false" :margin="false"
	   style="background-color:#4492FF">
		<uni-list>
			<uni-list-item v-for="(item, index) in list"
				style="height: 95rpx;background-color: #4492FF;color:#4492FF"
				:title="item.title"
				showArrow
				link
				:thumb="item.url"
				thumb-size="medium"
				@click="show(index)"
			/>
		</uni-list>
	 </uni-card>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [
					{
						title: '二维码收款',
						url: require('@/static/government/shoukuan.png')
					},
					{
						title: '向支付宝或银行卡转账',
						url: require('@/static/government/toMoney.png')
					}
				]
			};
		},
	methods: {
				show(index) {
					
				}
		}
	}
</script>

<style scoped>
.container{
		background-color: #1777FF !important;
		height: 100%;
}
/deep/ .uni-card{
	border-radius: 9px !important;
}

/deep/ .uni-list-item__content-title{
		color: #fff;
}
/deep/ .uniui-arrowright:before{
	color: #fff;
}
/deep/  .uni-list-item__container{
	padding-left: 5px !important;
}
/deep/ .uni-list--border-top {
		height: 0px;
	}
/deep/	.uni-list--border-bottom{
	height: 0px;
}
/deep/ .uni-list:after{
	height: 0px;
}
</style>
