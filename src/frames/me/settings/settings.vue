<template>
	<section class="child_page">
		<head-top crossover="设置"></head-top>
		<section class="settings">
			<ul>
				<router-link to='/me/settings/newmessage' tag="li">
					新消息提醒
				</router-link>
				<router-link to='/me/settings/disturbance' tag="li">
					勿扰模式
				</router-link>
				<router-link to='/me/settings/chat' tag="li">
					聊天
				</router-link>
				<router-link to='/me/settings/privacy' tag="li">
					隐私
				</router-link>
				<router-link to='/me/settings/currency' tag="li">
					通用
				</router-link>
			</ul>
			<ul>
				<router-link to='/me/settings/aboutwc' tag="li">
					关于微信
				</router-link>
				<!-- <router-link to='/me/settings/help' tag="li">
					帮助与反馈
				</router-link> -->
				<router-link to='/me/settings/login' tag="li">
					退出
				</router-link>
			</ul>
		</section>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	export default{
		data(){
			return{
				
			}
		},
		created(){

		},
		mounted(){
			
		},
		components:{
			headTop,
		},
		computed:{
			
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/public";
	.child_page{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
	.settings{
		padding-top: 3.06933rem;
		ul{
			background:#fff;
			padding:0 0.64rem;
			margin-bottom:1rem;
			li{
				border-bottom:1px solid #f1f1f1;
				padding:0.4266666667rem 0;
				@include sizeColor(0.64rem,#333);
			}
			li:last-child{
				border:0;
			}
		}
	}
</style>