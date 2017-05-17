<template>
	<section>
		<section class="find">
			<router-link :to="$route.path.indexOf('find') !== -1 ? '/find/friendcircle' : '/me/personaldetails' " class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg " :class="{'findlist_svg_me' : $route.path.indexOf('me') !== -1}">
							<img :src="userInfo.headurl" alt="" v-if="pathUrl">
							<svg v-else>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#friendcircle"></use>
							</svg>
						</section>
						<section class="me_name" v-if="pathUrl">
							<div>{{userInfo.petname}}</div>
							<div>微信号：{{userInfo.wxid}}</div>
						</section>
						<section class="findlist_text" v-else>
							朋友圈
						</section>
					</div>
					<div class="findlist_right">
						<svg fill="#949494" v-if="pathUrl">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#QRcode"></use>
						</svg>
						<div v-else>
							<img src="../../images/tao.jpg" alt="">
							<i class="redicon" v-if="newtext"></i>
						</div>
					</div>
				</div>
			</router-link>
			<section to="" class="findlist">
				<div class="find_wipe" @click="photoAlbum">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg fill="#10aeff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href=" pathUrl ? '#photo' : '#onesweeptwo'"></use>
							</svg>
						</section>
						<section class="findlist_text" >
							<span v-if="pathUrl">相册</span>
							<span v-else>扫一扫</span>
						</section>
					</div>
				</div>
				<div class="find_wipe" @click="collect">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href=" pathUrl ? '#collect' : '#shark' "></use>
							</svg>
						</section>
						<section class="findlist_text">
							<span v-if="pathUrl">收藏</span>
							<span v-else>摇一摇</span>
						</section>
					</div>
				</div>
			</section>
			<section to="" class="findlist">
				<div class="find_wipe" @click="wallet">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href=" pathUrl ? '#burse' : '#nearby'"></use>
							</svg>
						</section>
						<section class="findlist_text">
							<span v-if="pathUrl">钱包</span>
							<span v-else>附近的人</span>
						</section>
					</div>
				</div>
			</section>
			<section to="" class="findlist">
				<div class="find_wipe" @click="shoppSth">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg data-v-38f704c5="" fill="#10aeff">
								<use data-v-38f704c5="" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="pathUrl ? '#cardbag' : '#shopping'"></use>
							</svg>
						</section>
						<section class="findlist_text">
							<span v-if="pathUrl">卡包</span>
							<span v-else>购物</span>
						</section>
					</div>
				</div>
				<div class="find_wipe" @click="gamesFace">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="pathUrl ? '#smile' : '#games' "></use>
							</svg>
						</section>
						<section class="findlist_text">
							<span v-if="pathUrl">表情</span>
							<span v-else>游戏</span>
						</section>
					</div>
				</div>
			</section>
			<router-link :to="pathUrl ? '/me/settings' : '/find/miniapps'" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg fill="#7586db">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="pathUrl ? '#set' : '#small' "></use>
							</svg>
						</section>
						<section class="findlist_text">
							<span v-if="pathUrl">设置</span>
							<span v-else>小程序</span>
						</section>
					</div>
				</div>
			</router-link>
		</section>
		<section class="reminder" v-if="alertreminder">
			<div class="reminder_cover"></div>
			<div class="reminder_content" :class="{alertshow : remindershow, alerthide : reminderhide}">
				<img :src="gifSrc" alt="" class="alertimg">
				<p class="alert_text">正在开发中...</p>
				<div class="alert_affirm" @click="affirmAlert">确认</div>
			</div>
		</section>
	</section>	
</template>

<script>
	import {userInfo} from 'src/service/getData'
	import {imgurl} from 'src/config/env';
	export default{
		data(){
			return{
				newtext:true,
				pathUrl:this.$route.path.indexOf("me") !== -1,
				userInfo:{},			//用户信息
				alertreminder:false,	//弹出层是否显示
				remindershow:false,		//显示时的动画
				reminderhide:false,		//隐藏时的动画
				gifSrc:'',
				timer:null,
			}
		},
		props: ['mepart',],
		created(){
			this.gifSrc=imgurl+'reminder.gif';
		},
		beforeDestroy(){
            clearTimeout(this.timer) 
        },
		beforeMount(){
			userInfo().then((res) => {
				this.userInfo = res
			});
			
		},
		mounted(){

		},
		components:{
			
		},
		computed:{
			
		},
		methods:{
			showPart(){
				this.alertreminder=true;
				this.remindershow=true;
				this.reminderhide=false;
			},
			photoAlbum(){//相册或扫一扫
				if(this.$route.path.indexOf("find") !== -1){
					this.showPart()
				}else{
					this.$router.push('/me/photoalbum')
				}
			},
			collect(){//摇一摇或收藏
				if(this.$route.path.indexOf("find") !== -1){
					this.showPart()
				}else{
					this.$router.push('/me/collect')
					
				}
			},
			wallet(){//附近的人或钱包
				if(this.$route.path.indexOf("find") !== -1){
					this.showPart()
				}else{
					this.$router.push('/me/wallet')
					
				}
			},
			shoppSth(){
				if( this.pathUrl ){//购物或卡包
					this.$router.push('/me/cardbag')
				}else{
					window.location.href="https://wqs.jd.com/portal/wx/portal_indexV4.shtml?PTAG=17007.13.1&ptype=1"
				}
			},
			gamesFace(){
				if( this.pathUrl ){//游戏或表情
					this.$router.push('/me/face')
				}else{
					this.showPart()
				}
			},
			affirmAlert(){//提醒确认
				this.reminderhide=true;
				this.remindershow=false;
				this.timer=setTimeout(()=>{
					clearTimeout(this.timer);
					this.alertreminder=false;
				},1000);
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	.find{
		padding-top:3.06933rem;
		padding-bottom:2.28267rem;
		.findlist{
			padding:0 0.8533333333rem;
			background:#fff;
			display:block;
			margin-bottom:1rem;
			.find_wipe{
				@include justify;
				align-items:center;
				padding-bottom:0.2533333333rem;
				padding-top:0.2533333333rem;
				border-bottom:1px solid #e0e0e0;
				.findlist_left{
					@include justify(flex-start);
					align-items:center;
					.findlist_svg{
						@include widthHeight(1.408rem,1.408rem);
						svg{
							@include widthHeight(100%,100%);
						}
					}
					.findlist_svg_me{
						@include widthHeight(2.7306666667rem,2.7306666667rem);
						img{
							@include widthHeight(100%,100%);
						}
					}
					.findlist_text{

						@include sizeColor(0.64rem,#2a2a2a);
						margin-left:.6rem;
						span{
							display:block;
							@include sizeColor(0.64rem,#2a2a2a);
						}
					}
					.me_name{
						@include sizeColor(0.64rem,#969696);
						margin-left:.6rem;
						div:nth-of-type(1){
							color:#333;
							margin-bottom:0.2133333333rem;
						}
					}
				}
				.findlist_right{
					position: relative;
					@include widthHeight(1.6rem,1.6rem);
					@include align;
					img{
						display:block;
						@include widthHeight(100%,100%);
					}
					.redicon{
						position: absolute;
						right:-0.21rem;
						top:-0.21rem;
						@include widthHeight(0.4266666667rem,0.4266666667rem);
						@include bg('../../images/warn.png');
						border-radius:50%;
					}
					svg{
						@include widthHeight(1rem,1rem);

					}
				}
			}
			.find_wipe:last-child{
				border:0;
			}
		}
	}
	.reminder{
		position: fixed;
		@include widthHeight(100%,100%);
		top:0;
		z-index:10;
		.reminder_cover{
			position: absolute;
			top:0;
			@include widthHeight(100%,100%);
			background:#000;
			opacity:.4;
		}
		.reminder_content{
			position: absolute;
			background:#fff;
			border-radius:8px;
			width:13rem;
			height:14rem;
			top:50%;
			margin-top:-7rem;
			left:50%;
			margin-left:-6.5rem;
			.alertimg{
				display:block;
				@include widthHeight(6.4rem,5.9733333333rem);
				margin:0.4266666667rem auto 1.28rem;
			}
			.alert_text{
				width:100%;
				text-align:center;
				font-weight:700;
				@include sizeColor(.8rem,#B6FF00);
				-webkit-animation: neon4 0.5s ease-in-out infinite alternate;
			  	-moz-animation: neon4 0.5s ease-in-out infinite alternate;
			  	animation: neon4 0.5s ease-in-out infinite alternate;
			}
			.alert_affirm{
				width:8rem;
				margin:2.1333333333rem auto 0;
				line-height:1.8rem;
				border-radius:5px;
				text-align:center;
				background:#1aad19;
				letter-spacing:0.1066666667rem;
				@include sizeColor(0.7253333333rem,#fff);
			}
		}
		.alertshow{
			 animation: tada 1s 1 ease-in-out both;
		}
		.alerthide{
			animation: zoomOutDown 1s 1 ease-in-out both;
		}
	}
	@keyframes neon4 {
	  from {
	    text-shadow: 0 0 10px #fff,
	               0 0 20px  #fff,
	               0 0 30px  #fff,
	               0 0 40px  #B6FF00,
	               0 0 70px  #B6FF00,
	               0 0 80px  #B6FF00,
	               0 0 100px #B6FF00,
	               0 0 150px #B6FF00;
	  }
	  to {
	    text-shadow: 0 0 5px #fff,
	               0 0 10px #fff,
	               0 0 15px #fff,
	               0 0 20px #B6FF00,
	               0 0 35px #B6FF00,
	               0 0 40px #B6FF00,
	               0 0 50px #B6FF00,
	               0 0 75px #B6FF00;
	  }
	}
	@keyframes tada {
	  from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }

	  10%, 20% {
	    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
	    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
	  }

	  30%, 50%, 70%, 90% {
	    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
	    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
	  }

	  40%, 60%, 80% {
	    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
	    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
	  }

	  100% {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	  }
	}
	@keyframes zoomOutDown {
	  40% {
	    opacity: 1;
	    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
	    -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
	  }

	  100% {
	    opacity: 0;
	    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
	    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
	    -webkit-transform-origin: center bottom;
	    transform-origin: center bottom;
	    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
	  }
	}
</style>