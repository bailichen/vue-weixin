<template>
	<section>
		
		<section class="find">
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg " :class="{'findlist_svg_me' : $route.path.indexOf('me') !== -1}">
							<img src="../../images/chen.jpg" alt="" v-if="pathUrl">
							<svg v-else>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#friendcircle"></use>
							</svg>
						</section>
						<section class="me_name" v-if="pathUrl">
							<div>辰</div>
							<div>微信号：xulianjie442154157</div>
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
			<router-link to="" class="findlist">
				<div class="find_wipe">
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
				<div class="find_wipe">
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
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
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
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
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
				<div class="find_wipe">
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
			</router-link>
			<router-link :to="pathUrl ? '/me/settings' : '/dialogue/conversation'" class="findlist">
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
	
	
	export default{
		data(){
			return{
				newtext:true,
				pathUrl:this.$route.path.indexOf("me") !== -1,
			}
		},
		props: ['mepart',],
		created(){

		},
		mounted(){

		},
		components:{
			
		},
		computed:{
			
		},
		methods:{

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