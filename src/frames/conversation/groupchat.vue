<template>
	<section>
		<head-top :crossover="gropname">
			<section class="coversPart" slot="person">
				<router-link to='/groupchat/groupchatmessage' class="person_link">
					<svg fill="#fff" class="icon-search">
					    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#doubleperson"></use>
					</svg>	
				</router-link>
			</section>
		</head-top>
		<section class="coversation" ref="groupHeight" @touchmove='loadMore'>
			<section class="coversationlist">
				<div class="underscore" v-if="underscore">————&nbsp;我是有底线的&nbsp;————</div>
				<ul>
					<!--  群聊-->
					<li v-for="item in groupconversine" >
						<div class="other" :class="{mysay : item.user_id == userInfo.id }">
							<div class="say-time">{{item.time}}</div>
							<img :src="imgurl + item.avatar" alt="" @click="enlargeImg(item.avatar)">
							<div class="whatsay">
								
								<div class="whatsay_svg">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="item.user_id == userInfo.id ? '#trigon-right' : '#trigon-left'"></use>
									</svg>
								</div>
								<div class="whatsay_text">
									{{item.content}}
								</div>
							</div>
							
						</div>
					</li>
				</ul>
			</section>
		</section>
		<div class="load" v-if="loadStatus">
			<div class="loadnbg"></div>
			<div class="loading">
				<div class="spinner">
					<div class="spinner-container container1">
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
						<div class="circle4"></div>
					</div>
					<div class="spinner-container container2">
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
						<div class="circle4"></div>
					</div>
					<div class="spinner-container container3">
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
						<div class="circle4"></div>
					</div>
				</div>
			</div>
		</div>
		<footer :class=" {footshow : clickmore}">
			<section class="foot_top">
				<div>
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#voice"></use>
					</svg>
				</div>
				<div>
					<input type="text" v-model="inputmessage" maxlength="100"  @input="whatInput" @click="inputBottomHide" :class="{lightborder : light}" @keyup.enter="enterThing">
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
			            <div class="swiper-slide" v-for="(value,item) in chatData">
		            		<ul class="clear">
		            			<li v-for="value in value">
		            				<div class="swiper_svg">
			            				<svg fill="#7a8187">
			            					<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="value.chatSvgid"></use>
			            				</svg>
		            				</div>
		            				<div class="swiper_text">
		            					{{value.chatSvgname}}
		            				</div>
		            			</li>
		            		</ul>
			            </div>
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
			</section>
		</footer>
		<section class="enlarge" v-if="enlarge" @click="enlargeHide" :class="{'movein-animate' : enlargeShow, 'moveout-animate-leave' : enlargehides}" >
			<img :src="imgurl + enlargeurl" alt="">
		</section>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>

</template>

<script>
	import headTop from 'src/components/header/head';
	import {mapState, mapActions, mapMutations} from 'vuex';
	import {groupChat, chatData, getHistory} from 'src/service/getData';
	import {imgurl} from 'src/config/env';
	import 'src/config/swiper.min.js' 
	import 'src/style/swiper.min.css'
	import fetch from 'src/config/fetch'
	const socket = io('http://cangdu.org:8003');
	export default{ 
		data(){
			return{
				inputmessage:'',	//输入的文本内容
				light:false,		//输入框不为空时，input下边框变色
				clickmore:false,	//点击加号底部显示、隐藏
				gropname:'',		//聊天名字
				ifme:false,			//发消息的对象是否是自己
				enlargeurl:'',		//头像地址
				enlargehides:false,
				enlargeShow:false,
				enlarge:false,
				timer:null,
				groupconversine:[],		//对话列表
				offset:0,
				imgS:'',
				scroll:'',
				loadStatus:false,	//加载
				underscore:false,	//底线
				chatData:{},
				imgurl,
				userId:'',
				allgroups:[],	//所有群聊信息

			}
		},
		created(){
			
		},
		mounted(){

			this.getUserInfo();
			this.groupList(this.offset);
			this.loadStatus=true;
			groupChat().then((res) => {
				this.gropname=res.petname;
			});	
			socket.on('chat', (data) => {
				if (!data) {
					return
				};
				this.groupconversine.push(data);
				this.$nextTick(()=>{
					window.scrollTo(0,this.$refs.groupHeight.offsetHeight-window.innerHeight)
				})
			});
			chatData().then((res) => {
				this.chatData=res;
			}).then(()=>{
				//初始化swiper
				new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        loop: false,
			    });
			})
		},
		components:{
			headTop,
		},
		computed:{
			...mapState([
			    "infor", "userInfo","allgroup"
			]),
		},
		beforeDestroy(){
            clearTimeout(this.timer);
            socket.removeAllListeners();
        },
		methods:{
			...mapActions([
                'getUserInfo',
            ]),
            ...mapMutations([
                'GET_ALLGROUP',
            ]),

            async groupList(offset){
            	const groupData = await getHistory({"offset":this.offset, "limit":20} )
            	if(groupData.history.length < 20){
            		this.underscore=true;
            	}
            	if(groupData.status == 200){

	            	for(let i=0; i<groupData.history.length; i++){
	            		
	            		if(!groupData.history[i].content){//清空 空 数据
	            			groupData.history.splice(i,1);
	            			i=i-1
	            		}

	            	}
            		this.groupconversine = [...groupData.history, ...this.groupconversine]
            		this.allgroups=[...this.groupconversine]
					Array.prototype.unique = function(){//数组去重
						var res = [this[0]];
						for(var l = 1; l < this.length; l++){
							var repeat = false;
							for(var j = 0; j < res.length; j++){
								if(this[l].user_id == res[j].user_id){
									repeat = true;
									break;
								}
							}
							if(!repeat){
								res.push(this[l]);
							}
						}
						return res;
					}
					var arr = this.allgroups;
					this.GET_ALLGROUP(arr.unique())//保存所有人数据信息
					
            	}
        		this.$nextTick(() => {
            		this.loadStatus=false;
        			if (offset == 0) {
        				this.underscore=false;
            			window.scrollTo(0, this.$refs.groupHeight.offsetHeight - window.innerHeight)
        			}else{

        				const scrollPosition = this.$refs.groupHeight.offsetHeight - this.lastPageHeight;
        				window.scrollTo(0,scrollPosition)
        			}
        			this.lastPageHeight = this.$refs.groupHeight.offsetHeight;
        		})
            },
            loadMore(){
            	if (this.loadStatus || this.underscore) {
            		return
            	}
            	this.scroll = document.body.scrollTop;
            	if(this.scroll == 0){
            		this.loadStatus=true;
            		this.offset+=20;
            		this.groupList(this.offset);
            	}else{
            		this.underscore=false;
            	}
            },
			whatInput(){
				if(this.inputmessage.replace(/\s+/g, "") == ''){
					this.light=false;
				}else{
					this.light=true;
				}
			},
			enterThing(){
				if(this.light){
					this.clickSend()
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
			async clickSend(){
				socket.emit('chat', {user_id: this.userInfo.id, content: this.inputmessage});
				this.inputmessage='';
				this.light=false;
				this.$nextTick(()=>{
					window.scrollTo(0,this.$refs.groupHeight.offsetHeight-window.innerHeight)
				})
				
			},
			enlargeImg(enlargeImg){
				this.enlargeurl=enlargeImg;
				this.enlarge=true;
				this.enlargeShow=true;
				this.enlargehides=false;
			},
			enlargeHide(){
				clearTimeout(this.timer)
				this.enlargehides=true;
				this.enlargeShow=false;
				this.timer = setTimeout(() =>{
                    this.enlarge=false;
                },400)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/public";
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
	
	.load{
		position: fixed;
		z-index:100;
		width:100%;
		height:100%;
		top:0;
		.loadnbg{
			position: fixed;
			width:100%;
			height:100%;
			top:0;
			background:#000;
			opacity: 0;
		}
		.loading{
			display:block;
			@include center;
			
		}
	}
	.spinner {
	  width: 80px;
	  height: 80px;
	  position: relative;
	}
	 
	.container1 > div, .container2 > div, .container3 > div {
	  width: 16px;
	  height: 16px;
	  background-color: #46C01B;
	 
	  border-radius: 100%;
	  position: absolute;
	  -webkit-animation: bouncedelay 1s infinite ease-in-out;
	  animation: bouncedelay 1s infinite ease-in-out;
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
	 
	.spinner .spinner-container {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	}
	 
	.container2 {
	  -webkit-transform: rotateZ(45deg);
	  transform: rotateZ(45deg);
	}
	 
	.container3 {
	  -webkit-transform: rotateZ(90deg);
	  transform: rotateZ(90deg);
	}
	 
	.circle1 { top: 0; left: 0; }
	.circle2 { top: 0; right: 0; }
	.circle3 { right: 0; bottom: 0; }
	.circle4 { left: 0; bottom: 0; }
	 
	.container2 .circle1 {
	  -webkit-animation-delay: -1.1s;
	  animation-delay: -1.1s;
	}
	 
	.container3 .circle1 {
	  -webkit-animation-delay: -1.0s;
	  animation-delay: -1.0s;
	}
	 
	.container1 .circle2 {
	  -webkit-animation-delay: -0.9s;
	  animation-delay: -0.9s;
	}
	 
	.container2 .circle2 {
	  -webkit-animation-delay: -0.8s;
	  animation-delay: -0.8s;
	}
	 
	.container3 .circle2 {
	  -webkit-animation-delay: -0.7s;
	  animation-delay: -0.7s;
	}
	 
	.container1 .circle3 {
	  -webkit-animation-delay: -0.6s;
	  animation-delay: -0.6s;
	}
	 
	.container2 .circle3 {
	  -webkit-animation-delay: -0.5s;
	  animation-delay: -0.5s;
	}
	 
	.container3 .circle3 {
	  -webkit-animation-delay: -0.4s;
	  animation-delay: -0.4s;
	}
	 
	.container1 .circle4 {
	  -webkit-animation-delay: -0.3s;
	  animation-delay: -0.3s;
	}
	 
	.container2 .circle4 {
	  -webkit-animation-delay: -0.2s;
	  animation-delay: -0.2s;
	}
	 
	.container3 .circle4 {
	  -webkit-animation-delay: -0.1s;
	  animation-delay: -0.1s;
	}
	 
	@-webkit-keyframes bouncedelay {
	  0%, 80%, 100% { -webkit-transform: scale(0.0) }
	  40% { -webkit-transform: scale(1.0) }
	}
	 
	@keyframes bouncedelay {
	  0%, 80%, 100% {
	    transform: scale(0.0);
	    -webkit-transform: scale(0.0);
	  } 40% {
	    transform: scale(1.0);
	    -webkit-transform: scale(1.0);
	  }
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
		background-color: #ebebeb;
		overflow-scrolling: touch; 
		-webkit-overflow-scrolling: touch; 
		padding-top: 2.06933rem;
		.coversationlist{
			position: relative;
			padding:0 .32rem;
			padding-bottom:2.6rem;
			overflow:auto;
			margin:0 auto;
			ul{
				padding-top:.4rem;
				width:15.4rem;
				overflow-scrolling: touch; 
				-webkit-overflow-scrolling: touch; 
				top:0;
				li{
					.other{
						width:100%;
						@include justify(flex-start);
						margin-bottom:1.3rem;
						align-items:top;
						position: relative;
						.say-time{
							@include sizeColor(.48rem,#999);
							width:8rem;
							position: absolute;
							top:-.4rem;
							left:2.5rem;
						}
						img{
							display:block;
							@include widthHeight(1.7493333333rem,1.7493333333rem);
						}
						.whatsay{
							position: relative;
							margin-top: .4rem;
							
							.whatsay_svg{
								@include widthHeight(0.4266666667rem,0.64rem);
								position: absolute;
								top:.5546667rem;
								left:.36rem;
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
								word-break: break-all;
							}
						}

					}
					.mysay{
						display:flex;
						flex-direction:row-reverse;
						.say-time{
							left:7.8rem;
						}
						.whatsay{
							
							.whatsay_svg{
								right:.36rem;
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
			.underscore{
				padding-top:0.2rem;
				text-align:center;
				@include sizeColor(0.5546666667rem,#999);
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
	.enlarge{
		position:fixed;
		@include widthHeight(100%,100%);
		background:#000000;
		top:0;
		z-index:100;
		img{
			display:block;
			width:auto;
			height:15.0186666667rem;
			position: absolute;
			top:50%;
			left:50%;
			transform:translateX(-50%);
			margin-top:-7.5093333333rem;
		}
	}
	.enlarge_part{
		display:none;
	}
	body .movein-animate{
		transition:all 1s;
		animation:fadeIn .6s;
	}
	body .moveout-animate-leave{
		transition:all 1s;
		animation:zoomOut .6s;
	}
	@-webkit-keyframes fadeIn {
	  from {
	    opacity: 0;
	  }
	  100% {
	    opacity: 1;
	  }
	}
	@keyframes fadeIn {
	  from {
	    opacity: 0;
	  }
	  100% {
	    opacity: 1;
	  }
	}
	@-webkit-keyframes zoomOut {
	  from {
	    opacity: 1;
	  }
	  50% {
	    opacity: 0;
	    -webkit-transform: scale3d(.3, .3, .3);
	    transform: scale3d(.3, .3, .3);
	  }
	  100% {
	    opacity: 0;
	  }
	}
	@keyframes zoomOut {
	  from {
	    opacity: 1;
	  }
	  50% {
	    opacity: 0;
	    -webkit-transform: scale3d(.3, .3, .3);
	    transform: scale3d(.3, .3, .3);
	  }
	  100% {
	    opacity: 0;
	  }
	}
</style>