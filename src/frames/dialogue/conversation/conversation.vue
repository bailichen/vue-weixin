<template>
	<section class="child_page">
		<head-top crossover="我的名字" person="true">
			<section class="coversPart" slot="person">
				<router-link to='' class="person_link">
					<svg class="icon-search">
					    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#person"></use>
					</svg>	
				</router-link>
			</section>
		</head-top>
		<section class="coversation">
			<section class="coversationlist">
				<div class="other">
					<img src="../../../images/cangdu.jpg" alt="">
					<div class="whatsay">
						<div class="whatsay_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#trigon-left"></use>
							</svg>
						</div>
						<div class="whatsay_text">
							我的名字我我的名字我我的名字我我的名字我我的名字我
						</div>
					</div>
				</div>
				<div class="other mysay">
					<img src="../../../images/chen.jpg" alt="">
					<div class="whatsay mysay_whatsay">
						<div class="whatsay_svg">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#trigon-right"></use>
							</svg>
						</div>
						<div class="whatsay_text">
							我的名字我我的名字我我的名字我我的名字我我的名字我
						</div>
					</div>
				</div>
			</section>
		</section>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
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
		padding-top: 2.46933rem;
		.coversationlist{
			width:14.72rem;
			margin:0 auto;
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
						padding:0.5333333333rem 0.384rem;
						border:1px solid #d9d9d9;
						border-radius:8px;
						@include sizeColor(0.64rem, #1a4901);
						line-height:0.8533333333rem;
					}
				}
				
			}
			.mysay{
				display:flex;
				flex-direction:row-reverse;
				.mysay_whatsay{
					.whatsay_svg{
						right:.26333333rem;
						left:auto;
					}
					.whatsay_text{
						margin-right:0.6399997rem;
						margin-left:0;
						background:#9DCB5D;
					}
				}
			}
		}
	}
</style>