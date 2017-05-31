<template>
	<section class="child_page">
		<head-top crossover="隐私"></head-top>
		<section class="newmessage">
			<h1 class="chatrecord">通讯录</h1>
			<ul>
				<li>
					<div>加我为朋友时需要验证</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='code' type='checkbox' checked>
						<label class='tgl-btn' for='code'></label>
					</div>
				</li>
				<li class="spacial_li">
					<div class="newshow_choose">
						<div>想我推荐通讯录朋友</div>
						<div class="push-button">
							<input class='tgl tgl-light' id='recommod' type='checkbox' checked>
							<label class='tgl-btn' for='recommod'></label>
						</div>
					</div>
					<div class="newshow_text">
						开启后，为你推荐已开通微信的手机联系人。
					</div>
				</li>
				<li>
					<div>添加我的方式</div>
				</li>
				<li>
					<div>通讯录黑名单</div>
				</li>
			</ul>
			<h1 class="chatrecord">朋友圈</h1>
			<ul>
				<li>
					<div>不让他（她）看我的朋友圈</div>
				</li>
				<li>
					<div>不看他（她）我的朋友圈</div>
				</li>
				<li>
					<div>朋友分组</div>
				</li>
				<li>
					<div>允许陌生人查看十张照片</div>
					<div class="push-button">
						<input class='tgl tgl-light' id='look' type='checkbox' checked>
						<label class='tgl-btn' for='look'></label>
					</div>
				</li>
				<li class="new_music">
					<div>允许朋友查看朋友圈的范围</div>
					<div class="voice-music">
						全部
					</div>
				</li>
				<li class="spacial_li">
					<div class="newshow_choose">
						<div>开启朋友圈入口</div>
						<div class="push-button">
							<input class='tgl tgl-light' id='friend' type='checkbox' v-model="warn">
							<label class='tgl-btn' for='friend'></label>
						</div>
					</div>
					<div class="newshow_text">
						关闭后，将隐藏“发现”中的朋友圈入口，你发的朋友圈不会清空，朋友仍可以看到
					</div>
				</li>
				<li class="spacial_li" v-if="warn">
					<div class="newshow_choose">
						<div>朋友圈更新提醒</div>
						<div class="push-button">
							<input class='tgl tgl-light' id='warn' type='checkbox' checked>
							<label class='tgl-btn' for='warn'></label>
						</div>
					</div>
					<div class="newshow_text">
						关闭后，有朋友更新照片时，界面下方的“发现”切换按钮上不在出现红点提示
					</div>
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
				warn:true,
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
		position: absolute;
		width:100%;
		height:100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.newmessage{
		background-color: #ebebeb;
		padding-top: 2.06933rem;
		-webkit-overflow-scrolling:touch; 
		.chatrecord{
			padding-left:0.64rem;
			padding-bottom:0.2133333333rem;
			@include sizeColor(0.6rem,#888);
			margin-top:1rem;
		}
		ul{
			background:#fff;
			padding:0 0.64rem;
			
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
			.spacial_li{
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