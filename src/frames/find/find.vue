<template>
	<section>
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<section class="find">
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#friendcircle"></use>
							</svg>
						</section>
						<section class="findlist_text">
							朋友圈
						</section>
					</div>
					<div class="findlist_right">
						fdsfsd
					</div>
				</div>
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg data-v-38f704c5="" fill="#10aeff">
								<use data-v-38f704c5="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#onesweep"></use>
							</svg>
						</section>
						<section class="findlist_text">
							扫一扫
						</section>
					</div>
				</div>
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shark"></use>
							</svg>
						</section>
						<section class="findlist_text">
							摇一摇
						</section>
					</div>
				</div>
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#nearby"></use>
							</svg>
						</section>
						<section class="findlist_text">
							附近的人
						</section>
					</div>
				</div>
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg data-v-38f704c5="" fill="#10aeff">
								<use data-v-38f704c5="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shopping"></use>
							</svg>
						</section>
						<section class="findlist_text">
							购物
						</section>
					</div>
				</div>
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#games"></use>
							</svg>
						</section>
						<section class="findlist_text">
							游戏
						</section>
					</div>
				</div>
			</router-link>
			<router-link to="" class="findlist">
				<div class="find_wipe">
					<div class="findlist_left">
						<section class="findlist_svg">
							<svg fill="#7586db">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#small"></use>
							</svg>
						</section>
						<section class="findlist_text">
							小程序
						</section>
					</div>
				</div>
			</router-link>
		</section>
		<foot-guide></foot-guide>
	</section>	
</template>

<script>
	import headTop from '../../components/header/head'
	import footGuide from '../../components/footer/foot'
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
	.find{
		padding-top:3.06933rem;
		.findlist{
			padding:0 0.8533333333rem;
			background:#fff;
			display:block;
			margin-bottom:1rem;
			.find_wipe{
				@include justify;
				align-items:center;
				padding-bottom:0.4533333333rem;
				padding-top:0.4533333333rem;
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
					.findlist_text{
						@include sizeColor(0.64rem,#2a2a2a);
						margin-left:.6rem;
					}
				}
				.findlist_right{

				}
			}
			.find_wipe:last-child{
				border:0;
			}
		}
	}
</style>