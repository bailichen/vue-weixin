<template>
	<section class="child_page">
		<head-top crossover="我的钱包"></head-top>
		<section class="wallet">
			<div class="wallet_top">
				<div>
					<section class="svgimg">
						<svg class="button_svg" fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gathering"></use>
						</svg>
					</section> 
					<section class="svg_name">
						收付款
					</section>
				</div>
				<div>
					<section class="svgimg">
						<svg class="button_svg" fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#notecase"></use>
						</svg>
					</section>
					<section class="svg_name">
						零钱
					</section>
				</div>
				<div>
					<section class="svgimg">
						<svg class="button_svg" fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#debitcard"></use>
						</svg>
					</section>
					<section class="svg_name">
						银行卡
					</section>
				</div>
			</div>
			<div class="wallet_bot">
				<ul class="wallet_ul"> 
					<li class="wallet_li" v-for="(value,key) in serviceData" :key="key">
						<h1>{{key}}</h1>
						<ul class="clear">
							<li v-for="(item,index) in value" :key="index">
								<img :src="item.servicelogo" alt="">
								<span>{{item.servicename}}</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import {burse} from 'src/service/getData.js'
	export default{
		data(){
			return{
				serviceData:{},		
			}
		},
		created(){
			
		},
		beforeMount(){
			burse().then((res) => {
				this.serviceData=res
			})
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
	@import "~@/style/public";
	.child_page{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.wallet{
		padding-top:2.06933rem;
		padding-bottom:4rem;
		height:30rem;
		overflow-y: auto;
		-webkit-overflow-scrolling:touch;
		.wallet_top{
			width:100%;
			background:#666f76;
			padding-bottom:0.8533333333rem;
			padding-top:1.1946666667rem;
			@include justify(space-around);
			div{
				.svgimg{
					@include widthHeight(1.536rem,1.536rem);
					margin: 0 auto;
					svg{
						display:block;
						@include widthHeight(100%,100%);
					}
				}
				.svg_name{
					@include sizeColor(0.64rem,#fff);
					margin-top:0.2133333333rem;
				}
			}
		}
		.wallet_bot{
			width:100%;
			.wallet_ul{
				.wallet_li{
					h1{
						display:block;
						font-weight:500;
						padding:0.704rem 0 0.384rem 0.64rem;
						background:#ecf0f3;
						@include sizeColor(0.5546666667rem,#333);
					}
					ul{
						width:100%;
						background:#fff;
						box-sizing:border-box;
						li{
							width:33.333%;
							float:left;
							border-right:1px solid #d6d6d6;
							border-bottom:1px solid #d6d6d6;
							height:5.12rem;
							img{
								display:block;
								width:1.0666666667rem;
								height:auto;
								margin:auto;
								margin-bottom:0.8106666667rem;
								margin-top:1.28rem;
							}
							span{
								display:block;
								@include sizeColor(0.5546666667rem,#333);
								text-align:center;
							}
						}
						li:nth-of-type(3n+3){
							border-right:0;
						}
					}
				}
			}
		}
	}
</style>