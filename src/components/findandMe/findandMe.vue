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
		
	</section>	
</template>

<script>
	import {userInfo} from 'src/service/getData'
	
	export default{
		data(){
			return{
				newtext:true,
				pathUrl:this.$route.path.indexOf("me") !== -1,
				userInfo:{},			//用户信息
			}
		},
		props: ['mepart',],
		created(){

		},
		beforeMount(){
			userInfo().then((res) => {
				this.userInfo = res
			})
		},
		mounted(){

		},
		components:{
			
		},
		computed:{
			
		},
		methods:{
			photoAlbum(){//相册或扫一扫
				if(this.$route.path.indexOf("find") !== -1){
					alert(1)
				}else{
					this.$router.push('/me/photoalbum')
					
				}
			},
			collect(){//摇一摇或收藏
				if(this.$route.path.indexOf("find") !== -1){
					alert(1)
				}else{
					this.$router.push('/me/collect')
					
				}
			},
			wallet(){//附近的人或钱包
				if(this.$route.path.indexOf("find") !== -1){
					alert(1)
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
					alert(2)
				}
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
</style>