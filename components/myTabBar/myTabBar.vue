<template>
	<view class="wrapper">
		<view class="tab-bar-item" v-for="(item, index) in list" :key="index" @click.stop="switchTab(item, index)">
			<image :src="tabBarActiveIndex === index ? item.active : item.icon" class="tab-bar-icon" :class="!tabBarActiveIndex && !index ? 'tab-bar-icon-active' : ''"></image>
			<text v-show="index !== tabBarActiveIndex || index" :class="tabBarActiveIndex === index ? 'tab-bar-text active' : 'tab-bar-text'">{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		name:"myTabBar",
		data() {
			return {
				activeIndex: 0,
				list: [
					{
						icon: require('@/static/image/shouye.png'),
						active: require('@/static/image/shouye-active.png'),
						path: '/pages/tabBar/indexPage/indexPage',
						text: '首页'
					},
					{
						icon: require('@/static/image/licai.png'),
						active: require('@/static/image/licai-active.png'),
						path: '/pages/tabBar/component/component',
						text: '理财'
					},
					{
						icon: require('@/static/image/life.png'),
						active: require('@/static/image/life-active.png'),
						path: '/pages/tabBar/API/API',
						text: '生活'
					},
					{
						icon: require('@/static/image/message.png'),
						active: require('@/static/image/message-active.png'),
						path: '/pages/tabBar/extUI/extUI',
						text: '消息'
					},
					{
						icon: require('@/static/image/my.png'),
						active: require('@/static/image/my-active.png'),
						path: '/pages/tabBar/template/template',
						text: '我的'
					}
				]
			};
		},
		computed: {
			...mapState(['tabBarActiveIndex'])
		},
		methods: {
			...mapMutations(['changeTabBarActiveIndex']),
			switchTab(item, index) {
				// this.activeIndex = index
				this.changeTabBarActiveIndex(index)
				uni.switchTab({
					url: item.path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #fff;
	border-top: 2rpx solid #DFE0E4;
	.tab-bar-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 15rpx 0 15rpx;
		width: 20%;
		.tab-bar-icon {
			width: 44rpx;
			height: 44rpx;
			margin-bottom: 2rpx;
		}
		.tab-bar-icon-active {
			width: 64rpx;
			height: 64rpx;
		}
		.tab-bar-text {
			font-size: 20rpx;
			color: #87888C;
		}
		.active {
			color: #007AFF;
		}
	}
}
</style>