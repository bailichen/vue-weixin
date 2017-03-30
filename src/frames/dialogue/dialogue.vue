<template>
	<section class="dialogue">
		<!-- 头部 -->
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<!-- 电脑登录 -->
		<section class="computer">
			<router-link to='/computer' class="computer_link">
				<section class="computer_icon">
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#computer"></use>
					</svg>
				</section>
				<section class="computer_text">Windows 微信已登录<span v-if="notice">， 手机通知已关闭</span></section>
			</router-link>
		</section>
		<!-- 对话列表 -->
		<section class="conversation">
			<ul>
				<li>
					<div class="imgwipe">
						<i class="redicon_num" v-if="newinfor">1</i>
						<i class="redicon" v-if="newtext"></i>
						<div class="imgstyle">
							<img src="../../images/cangdu.jpg" alt="">
						</div>
					</div>
					<div class="infordetail">
						<div class="infordetail_top clear">
							<span class="left ellipsis">苍都</span>
							<span class="right">12:07</span>
						</div>
						<div class="infordetail_bot ellipsis">
							好呀好呀
						</div>
					</div>
				</li>
				<li>
					<div class="imgwipe">
						<i class="redicon_num" v-if="newinfor">1</i>
						<i class="redicon" v-if="newtext"></i>
						<div class="imgstyle imgstyletwo">
							<img src="../../images/cangdu.jpg" alt="">
							<img src="../../images/yabao.jpg" alt="">
						</div>
					</div>
					<div class="infordetail">
						<div class="infordetail_top clear">
							<span class="left ellipsis">群聊</span>
							<span class="right">12:07</span>
						</div>
						<div class="infordetail_bot ellipsis">
							好呀好呀
						</div>
					</div>
				</li>
			</ul>
		</section>
		<!-- 底部导航 -->
		<foot-guide></foot-guide>
		<transition name="router-slide">
		    <router-view></router-view>
		</transition>
	</section>	
</template>

<script>
	import headTop from '../../components/header/head'
	import footGuide from '../../components/footer/foot'
	export default{
		data(){
			return{
				notice:true,		//电脑登录是否静音
				newinfor:false,		//未静音时消息提醒
				newtext:false,		//静音时消息提醒

			}
		},
		created(){

		},
		mounted(){
			
		},
		components:{
			headTop,
			footGuide
		},
		computed:{
			
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	.dialogue{
		width:100%;
		background:#fff;
		.computer{
			@include widthHeight(100%, 1.9626666667rem);
			background:#f5f5f5;
			border-bottom:1px solid #e0e0e0;
			.computer_link{
				@include justify(flex-start);
				.computer_icon{
					@include widthHeight(1.4933333333rem, 1.9626666667rem);
					margin-left:1.0666666667rem;
					margin-right:0.96rem;
					@include align;
					svg{
						@include widthHeight(100%,1.152rem);
					}
				}
				.computer_text{
					line-height:1.9626666667rem;
					@include sizeColor(0.5546666667rem,#474747);
					span{
						display:inline-block;
						@include sizeColor(0.5546666667rem,#474747);
					}
				}
			}
		}
		.conversation{
			width:100%;
			ul{
				width:100%;
				li{
					padding:0.3413333333rem 0.5973333333rem;
					box-sizing:border-box;
					border-bottom:1px solid #e0e0e0;
					@include justify(flex-start);
					.imgwipe{
						@include widthHeight(2.0906666667rem,2.0906666667rem);
						position: relative;
						margin-right:0.512rem;
						.redicon_num{
							position: absolute;
							right:-0.4rem;
							top:-0.3rem;
							@include widthHeight(0.8106666667rem,0.8106666667rem);
							@include sizeColor(0.512rem,#fff);
							line-height:0.8806666667rem;
							padding:0 4px;
							text-align:center;
							background:#ff333b;
							border-radius:50%;
						}
						.redicon{
							position: absolute;
							right:-0.21rem;
							top:-0.21rem;
							@include widthHeight(0.4266666667rem,0.4266666667rem);
							background:#ff333b;
							border-radius:50%;
						}
						.imgstyle{
							@include widthHeight(2.0906666667rem,100%);
							display: flex;
							justify-content: center;
							flex-flow:row wrap;
							align-items: flex-start;
							align-content: flex-start;
							overflow: hidden;
							background: #dddbdb;
							img{
								width: 10%;
								height: auto;
								border: 0;
								flex-grow:2;
							}
						}
						.imgstyletwo{
							img{
								width: 33.33%;
								flex-grow:0;
							}
						}
					}
					.infordetail{
						width:11.5626666667rem;
						padding-top:0.2133333333rem;
						.infordetail_top{
							width:100%;
							padding-bottom:0.2133333333rem;
							span:nth-of-type(1){
								width:8.7466666667rem;
								@include sizeColor(0.5973333333rem,#38373c);
							}
							span:nth-of-type(2){
								@include sizeColor(0.4266666667rem,#b2b6b9);
							}
						}
						.infordetail_bot{
							width:9.5573333333rem;
							@include sizeColor(0.512rem,#9e9e9e);
						}

					}
					
				}
			}
		}
	}
	
</style>