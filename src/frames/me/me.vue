<template>
	<section>
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<find-me></find-me>
		<foot-guide></foot-guide>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import findMe from 'src/components/findandMe/findandMe'
	import footGuide from 'src/components/footer/foot'
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
			findMe,
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
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}
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