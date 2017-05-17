<template>
	<section class="child_page">
		<head-top crossover="小程序"></head-top>
		<section class="miniapp">
			<ul>
				<li>
					<div class="app_svg">
						<svg fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mb"></use>
						</svg>
					</div>
					<div class="app_name">
						<span>摩拜单车</span>
					</div>
				</li>
				<li>
					<div class="app_svg">
						<svg fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mymovie"></use>
						</svg>
					</div>
					<div class="app_name">
						<span>猫眼电影</span>
					</div>
				</li>
				<li>
					<div class="app_svg">
						<svg fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#small"></use>
						</svg>
					</div>
					<div class="app_name">
						<span>小程序实例</span>
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
	.miniapp{
		padding-top:2.06933rem;
		ul{
			background:#fff;
			li{
				@include justify(flex-start);
				padding:0.64rem 0 0 0.8533333333rem;
				.app_svg{
					margin-right:0.5973333333rem;
					@include widthHeight(2.1333333333rem,2.1333333333rem);
					background:#f05d4d;
					border-radius:50%;
					@include align;
					svg{
						display:block;
						@include widthHeight(1.8rem,1.2rem);
						margin:0 auto;
					}
				}
				.app_name{
					border-bottom:1px solid #e2e2e2;
					span{
						display:block;
						@include widthHeight(12rem,2.1333333333rem);
						line-height:2.1333333333rem;
						margin-bottom:0.5973333333rem;
					}
				}
			}
			li:nth-of-type(3){
				.app_svg{
					background:#333;
					svg{
						@include widthHeight(2rem,2rem);
					}
				}
			}
		}
	}
</style>