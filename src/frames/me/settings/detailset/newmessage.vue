<template>
	<section class="child_page">
		<head-top crossover="新消息提醒"></head-top>
		<section class="newmessage">
			<ul>
				<li>
					<div>接收新消息通知</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='new' type='checkbox' v-model="checked">
						<label class='tgl-btn' for='new'></label>
					</div>
				</li>
				<li>
					<div>接收语音和视频聊天邀请通知</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='video' type='checkbox' checked>
						<label class='tgl-btn' for='video'></label>
					</div>
				</li>
			</ul>
			<ul class="newshow" v-if="checked">
				<li>
					<div class="newshow_choose">
						<div>通知显示消息详情</div>
						<div class="push-button">
							<input class='tgl tgl-light' id='detail' type='checkbox'>
							<label class='tgl-btn' for='detail'></label>
						</div>
					</div>
					<div class="newshow_text">
						若关闭，当收到微信消息时，通知提示将不显示发信人和内容摘要。
					</div>
				</li>
			</ul>
			<ul v-if="checked">
				<li>
					<div>声音</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='voice' type='checkbox' v-model="checkedname">
						<label class='tgl-btn' for='voice'></label>
					</div>
				</li>
				<li class="new_music" v-if="checkedname">
					<div>新消息提示音</div>
					<div class="voice-music">
						notification_001
					</div>
				</li>
				<li>
					<div>振动</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='vibrate' type='checkbox' checked>
						<label class='tgl-btn' for='vibrate'></label>
					</div>
				</li>
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
				checked:true,
				checkedname:true,
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
	.router-show-enter,.router-show-leave{
		transform:translateX(100%)
	}
	.newmessage{
		padding-top: 3.06933rem;
		ul{
			background:#fff;
			padding:0 0.64rem;
			margin-bottom:1rem;
			li{
				border-bottom:1px solid #f1f1f1;
				padding:0.4266666667rem 0;
				@include sizeColor(0.64rem,#333);
				@include justify;
				align-items:center;
				.push-button{
					
				}
				.voice-music{
					@include sizeColor(0.512rem,#9c9c9c);
				}
			}
			li:last-child{
				border:0;
			}
		}
		.newshow{
			li{
				display: inherit;
				.newshow_choose{
					@include justify;
					align-items:center;
				}
				.newshow_text{
					@include sizeColor(0.5546666667rem,#909090);
					margin-top:0.2133333333rem;
				}
			}
		}
	}
</style>