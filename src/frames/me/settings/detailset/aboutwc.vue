<template>
	<section class="child_page">
		<head-top crossover="关于微信"></head-top>
		<section class="aboutwx">
			<section class="aboutwx_svg">
				<svg>
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wxicon"></use>
				</svg>
			</section>
			<section class="aboutwx_title">微信 6.5.7</section>
		</section>
		<section class="aboutwechat">
			<ul>
				<li>
					<div>功能介绍</div>
				</li>
				<li>
					<div>投诉</div>
				</li>
				<li>
					<div>检查新版本</div>
				</li>
			</ul>
		</section>
		<section class="agreement">
			<div class="agreement_top">
				<a href="https://weixin.qq.com/agreement?lang=zh_CN">《通讯微信软件许可服务协议》</a>和
				<a href="http://www.qq.com/privacy.htm">《腾讯隐私政策》</a>
			</div>
			<div class="agreement_bottom">
				<p>腾讯公司 版权所有</p>
				<p>tCopyright &copy;  2011-2017 Tencent.</p>
				<p>All Right Reserved</p>
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
	.aboutwx{
		padding-top: 4rem;
		.aboutwx_svg{
			@include widthHeight(6rem,5rem);
			margin:0 auto;
			svg{
				@include widthHeight(100%,100%);
			}
		}
		.aboutwx_title{
			text-align:center;
			@include sizeColor(0.64rem,#969696);
		}
	}
	.aboutwechat{
		padding-top:1.4933333333rem;
		ul{
			background:#fff;
			padding:0 0.64rem;
			margin-bottom:1rem;
			li{
				border-bottom:1px solid #f1f1f1;
				padding:0.4266666667rem 0;
				@include sizeColor(0.64rem,#333);
				@include justify;
				align-items:center;
				.push-button{
					
				}
				.voice-music{
					@include sizeColor(0.512rem,#9c9c9c);
				}
			}
			li:last-child{
				border:0;
			}
		}
		.newshow{
			li{
				display: inherit;
				.newshow_choose{
					@include justify;
					align-items:center;
				}
				.newshow_text{
					@include sizeColor(0.5546666667rem,#909090);
					margin-top:0.2133333333rem;
				}
			}
		}
	}
	.agreement{
		padding-top:.9rem;
		.agreement_top{
			@include justify(center);
			@include sizeColor(0.5546666667rem,#656565);
			a{
				display:block;
				@include sizeColor(0.5546666667rem,#5f607c);
			}
		}
		.agreement_bottom{
			width:100%;
			padding-top:0.384rem;
			p{
				width:100%;
				text-align:center;
				@include sizeColor(0.4693333333rem, #959595);
				line-height:0.64rem;
			}
		}
	}
</style>