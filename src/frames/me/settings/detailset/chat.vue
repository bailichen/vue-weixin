<template>
	<section class="child_page">
		<head-top crossover="聊天"></head-top>
		<section class="chat">
			<ul>
				<li>
					<div>使用听筒播放语音</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='new' type='checkbox'>
						<label class='tgl-btn' for='new'></label>
					</div>
				</li>
				<li>
					<div>回车键发送信息</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='video' type='checkbox' checked="checked">
						<label class='tgl-btn' for='video'></label>
					</div>
				</li>
				<li>
					<div>聊天背景</div>
				</li>
				<li>
					<div>表情管理</div>
				</li>
			</ul>
			<h1 class="chatrecord">聊天记录</h1>
			<ul>
				<li>
					<div>聊天记录迁移</div>
				</li>
				<li>
					<div>清空聊天记录</div>
				</li>
			</ul>
		</section>
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
	.chat{
		padding-top: 3.06933rem;
		.chatrecord{
			padding-left:0.64rem;
			padding-bottom:0.2133333333rem;
			@include sizeColor(0.6rem,#888);
		}
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