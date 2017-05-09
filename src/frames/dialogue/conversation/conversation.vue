<template>
	<section class="child_page">
		<head-top :crossover="chatname">
			<section class="coversPart" slot="person">
				<router-link to='' class="person_link">
					<svg fill="#fff" class="icon-search">
					    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person"></use>
					</svg>	
				</router-link>
			</section>
		</head-top>
		<section class="coversation">
			<section class="coversationlist" @click="bottomHide">
				<ul>
					<li v-for="item in infor.Messageblob">
						<!-- 对方 -->
						<div class="other">
							<img :src="infor.headurl" alt="" @click="enlargeImg(infor.headurl)">
							<div class="whatsay">
								<div class="whatsay_svg">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#trigon-left"></use>
									</svg>
								</div>
								<div class="whatsay_text">
									{{item}}
								</div>
							</div>
						</div>
					</li>
					<li v-for="item in userInfo.Messageblob">
						<!-- 自己 -->
						<div class="other mysay">
							<img :src="userInfo.headurl" alt="">
							<div class="whatsay">
								<div class="whatsay_svg">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#trigon-right"></use>
									</svg>
								</div>
								<div class="whatsay_text">
									{{item}}
								</div>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</section>
		
		<footer :class=" {footshow : clickmore}">
			<section class="foot_top">
				<div>
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#voice"></use>
					</svg>
				</div>
				<div>
					<input type="text" v-model="inputmessage"  @input="whatInput" @click="inputBottomHide" :class="{lightborder : light}">
				</div>
				<div>
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#face"></use>
					</svg>
				</div>
				<div>
					<div class="send" v-if="light" @click="clickSend">
						<span>发送</span>
					</div>
					<svg v-else @click="bottomShow">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#addthing"></use>
					</svg>
				</div>
			</section>
			<section class="foot_bottom">
	    		<div class="swiper-container">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide">
		            		<ul class="clear">
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#personimg"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					相册
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shot"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					拍摄
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#camera"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					视频聊天
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187" style="width:1.3rem;height:1.8rem;">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#positions"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					位置
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187" style="width:0.9386666667rem;height:1.152rem;">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redbag"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					红包
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#banktransfer"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					转账
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					名片
		            				</div>
		            			</li>
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#voiceinput"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					语音输入
		            				</div>
		            			</li>
		            		</ul>
			            </div>
			            <div class="swiper-slide">
		            		<ul class="clear">
		            			<li>
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187" style="width:1.152rem;height:1.2586666667rem;">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wxcollect"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					我的收藏
		            				</div>
		            			</li>
		            		</ul>
			            </div>
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
			</section>
		</footer>
		<enlarge-cover v-if="enlargeShow" :enlarge="enlargeurl"></enlarge-cover>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>

</template>

<script>
	import headTop from 'src/components/header/head';
	import enlargeCover from 'src/components/enlarge/enlarge';
	import IScroll from 'src/config/iscroll.js'
	import {mapState, mapActions, mapMutations} from 'vuex'
	import 'src/config/swiper.min.js'
	import 'src/style/swiper.min.css'
	export default{ 
		data(){
			return{
				inputmessage:'',//输入的文本内容
				light:false,	//输入框不为空时，input下边框变色
				clickmore:false,	//点击加号底部显示、隐藏
				chatname:'',		//聊天名字
				ifme:false,			//发消息的对象是否是自己
				enlargeurl:'',
				enlargeHide:false,
			}
		},
		created(){

		},
		mounted(){
			//初始化IScroll
			new IScroll('.coversationlist',{
				click:true,
				scrollbars:false,
				//mouseWheel: true,  //侦听鼠标滚轮事件
				//fadeScrollbars: true, //滚动条淡入淡出方式
				probeType:2,//滚动条的灵敏性设置
				bounce:true,//是否反弹效果
			});	
			//初始化swiper
			new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: false,
		    });
			this.chatname=this.infor.remarks ? this.infor.remarks : this.infor.petname;
			this.getUserInfo();
		},
		components:{
			headTop,
			enlargeCover,

		},
		computed:{
			...mapState([
			    "infor", "userInfo", "enlargeShow",
			]),
			
		},
		methods:{
			...mapActions([
                'getUserInfo'
            ]),
           ...mapMutations([
                'ENLARGE_HEAD'
            ]),
			whatInput(){
				if(this.inputmessage){
					this.light=true;
				}else{
					this.light=false;
				}
			},

			bottomShow(){
				this.clickmore=true;
			},
			bottomHide(){
				this.clickmore=false;
			},
			inputBottomHide(){
				this.clickmore=false;
			},
			clickSend(){
				//this.userInfo.Messageblob.push(this.inputmessage)
				//this.inputmessage='';
				//this.light=false;
			},
			enlargeImg(enlargeImg){
				this.ENLARGE_HEAD(true)
				this.enlargeurl=enlargeImg;
			},
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../../style/public";
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave{
		transform:translateX(100%)
	}
	.child_page{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.coversPart{
		@include topcenter;
		right:0.5973333333rem;
		@include widthHeight(0.8533333333rem,0.8533333333rem);
		.person_link{
			display:block;
			@include widthHeight(0.8533333333rem,0.8533333333rem);
			svg{
				@include widthHeight(100%,100%);
			}
		}
	}
	.coversation{
		padding-top: 2.06933rem;
		.coversationlist{
			height: 24.3rem;
			position: relative;
			padding:0 .32rem;
			margin:0 auto;
			ul{
				position: absolute;
				padding-top:.4rem;
				padding-bottom:4rem;
				width:15.4rem;
				top:0;
				li{
					.other{
						width:100%;
						@include justify(flex-start);
						margin-bottom:0.512rem;
						align-items:top;
						img{
							display:block;
							@include widthHeight(1.7493333333rem,1.7493333333rem);
						}
						.whatsay{
							position: relative;
							.whatsay_svg{
								@include widthHeight(0.4266666667rem,0.64rem);
								position: absolute;
								top:.5546667rem;
								left:.26333333rem;
								z-index:2;
								svg{
									display:block;
									@include widthHeight(0.4266666667rem,0.64rem);
								}
							}
							
							.whatsay_text{
								margin-left:0.6399997rem;
								max-width:10.3253333333rem;
								background:#fff;
								padding:0.42rem 0.384rem;
								border:1px solid #d9d9d9;
								border-radius:8px;
								@include sizeColor(0.64rem, #333);
								line-height:0.8533333333rem;
							}
						}
						
					}
					.mysay{
						display:flex;
						flex-direction:row-reverse;
						.whatsay{
							.whatsay_svg{
								right:.26333333rem;
								left:auto;
							}
							.whatsay_text{
								margin-right:0.6399997rem;
								margin-left:0;
								background:#9fe658;
							}
						}
					}
				}
			}
			
		}
	}

	footer{
		position: fixed;
		z-index:10;
		border-top:1px solid #e0e0e0;
		background:#f5f5f5;
		bottom:-11.712rem;
		width:100%;
		.foot_top{
			padding:0 0.512rem;
			height:2.0053333333rem;
			background:#f3f3f3;
			@include justify(flex-start);
			align-items:center;
			div:nth-of-type(1),div:nth-of-type(3),div:nth-of-type(4){
				@include widthHeight(1.3653333333rem,1.3653333333rem);
				margin-right:0.3413333333rem;
				svg{
					@include widthHeight(100%, 100%);
				}
			}
			div:nth-of-type(2){
				margin-right:0.3413333333rem;
				width:9.8rem;
				height:1.152rem;
				border-bottom:1px solid #e0e0e0;
				input{
					display:block;
					width:9.8rem;
					padding:0 0.4133333333rem;
					line-height:1.152rem;
					height:1.152rem;
					border:0;
					background:none;
					@include sizeColor(0.64rem,#000);
					border-bottom:1px solid #e0e0e0;
				}
				.lightborder{
					border-color:#19ad17;
				}
			}
			div:nth-of-type(4){
				margin-right:0;
				.send{
					width:1.8133333333rem;
					background:#16af17;
					height:1.3653333333rem;
					padding:.682666rem 0;
					border-radius:5px;
					@include justify(center);
					align-items:center;
					span{
						display:block;
						@include sizeColor(0.5973333333rem,#fff);
					}
				}
				.send:active{
					background:#33c034;
				}
			}
		}
		.foot_bottom{
			height:11.712rem;
			border-top:1px solid #e0e0e0;
			.swiper-container{
				width:100%;
				height:11.712rem;
				overflow:hidden;
				.swiper-slide{
					width:100%;
					ul{
						padding:1.408rem 1.1946666667rem 0;
						box-sizing:border-box;
						li{
							float:left;
							width:2.5466666667rem;
							margin-right:1rem;
							margin-bottom:1.1946666667rem;
							.swiper_svg{
								@include widthHeight(2.5466666667rem,2.5466666667rem);
								background:#fcfcfc;
								border:1px solid #d3d3d3;
								border-radius:10px;
								@include justify(center);
								align-items:center;
								svg{
									@include widthHeight(1.28rem,0.9386666667rem);
									display:block;
								}
							}
							.swiper_text{
								width:100%;
								margin-top:0.256rem;
								text-align:center;
								@include sizeColor(0.4693333333rem,#7a8187);
							}
						}
						li:nth-of-type(4n+4){
							margin-right:0;
						}
					}
				}
			}
		}
	}
	.footshow{
		bottom:0;
		transition: all .2s;
	}
</style>