<template>
	<section class="child_page">
		<head-top crossover="通用"></head-top>
		<section class="newmessage">
			<ul>
				<li>
					<div>开启横屏模式</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='voice' type='checkbox'>
						<label class='tgl-btn' for='voice'></label>
					</div>
				</li>
				<li class="new_music">
					<div>自动下载微信安装包</div>
					<div class="voice-music">
						从不
					</div>
				</li>
				<li class="new_music">
					<div>多语言</div>
					<div class="voice-music">
						跟随系统
					</div>
				</li>
				<li>
					<div>字体大小</div>
				</li>
				<li>
					<div>照片和视频</div>
				</li>
				<li>
					<div>功能</div>
				</li>
				<li>
					<div>流量统计</div>
				</li>
				<li>
					<div>清理微信存储空间</div>
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