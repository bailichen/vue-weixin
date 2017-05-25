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
					<section>
						收付款
					</section>
				</div>
				<div>
					<section class="svgimg">
						<svg class="button_svg" fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#notecase"></use>
						</svg>
					</section>
					<section>
						零钱
					</section>
				</div>
				<div>
					<section class="svgimg">
						<svg class="button_svg" fill="#fff">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#debitcard"></use>
						</svg>
					</section>
					<section>
						银行卡
					</section>
				</div>
			</div>
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
	.wallet{
		padding-top:2.06933rem;
		.wallet_top{
			width:100%;
			background:#666f76;
			height:4.2666666667rem;
			padding-top:1.1946666667rem;
			@include justify(space-around);
			div{
				.svgimg{
					@include widthHeight(1.536rem,1.536rem);
					svg{
						display:block;
						@include widthHeight(100%,100%);
					}
				}
			}
		}
	}
</style>