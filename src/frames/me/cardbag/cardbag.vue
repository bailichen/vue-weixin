<template>
	<section class="child_page">
		<head-top crossover="卡包"></head-top>
		<section class="carbag">
			<h1>优惠券</h1>
			<ul>
				<li>
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#firendCard"></use>
					</svg>
					<span>朋友的优惠券</span>
				</li>
				<li>
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Cards"></use>
					</svg>
					<span>我的票券（0）</span>
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
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.carbag{
		padding-top:2.06933rem;
		h1{
			display:block;
			padding:0.512rem 0;
			padding-left:0.4266666667rem;
			@include sizeColor(0.512rem,#666);
		}
		ul{
			padding:0 0.4266666667rem;
			li{
				background:#fff;
				border-radius:5px;
				@include justify(flex-start);
				align-items:center;
				padding:1.0666666667rem 0;
				margin-bottom:0.2986666667rem;
				svg{
					display:block;
					margin-left:0.576rem;
					margin-right:0.5973333333rem;
					@include widthHeight(2.0053333333rem,1.408rem);
				}
				span{
					display:block;
					@include sizeColor(0.6826666667rem,#000);
				}
			}
		}
	}
</style>