<template>
	<section>
		<h1 class="goback">
			<span @click="$router.go(-1)">关闭</span>
		</h1>
		<section class="computer">
			<section class="computer_svg">
				<div class="svgone">
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#computer"></use>
					</svg>
				</div>
				<div class="svgtwo" v-show="mute">
					<svg>
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phonemute"></use>
					</svg>
				</div>
			</section>
			<p class="computer_text">Windows 微信已登录</p>
			<p class="computer_text">如果不是本人操作，可以立即退出</p>
			<section class="soundoff">
				<div class="silence">
					<svg @click="ifMute">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="mute ? '#lightmute' : '#mute'"></use>
					</svg>
				</div>
				<div class="silence">
					<router-link to="/transfer">
						<svg>
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#file"></use>
						</svg>
					</router-link>
				</div>
			</section>
			<section class="exitw">
				<div @click="exitWindows">退出 Windows 微信</div>
			</section>
		</section>
		<section class="warn" v-show="coverShow">
			<div class="warn_bg"></div>
			<div class="warn_text">
				<h1>
					提示
				</h1>
				<p>是否退出 Windows 微信 ？</p>
				<div class="warn_obt">
					<span @click="cancel">取消</span>
					<span @click="ensure">确定</span>
				</div>
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from '../../components/header/head'
	import footGuide from '../../components/footer/foot'
	import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return{
				coverShow:false,	//弹出层
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
			...mapState([
				'mute'
			])
		},
		methods:{
			...mapMutations([
				'RECORD_MUTE',
				'COMPUTER_SHOW'
			]),
			ifMute(){
				//记录是否静音
				if(!this.mute){
					this.RECORD_MUTE(true)
				}else{
					this.RECORD_MUTE(false)
				}
			},
			exitWindows(){
				this.coverShow=true;
			},
			cancel(){
				this.coverShow=false;
			},
			ensure(){
				this.COMPUTER_SHOW(false);
				this.coverShow=false;
				this.$router.push('/dialogue'); //跳转页面
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	.goback{
		width:100%;
		padding-top:1.28rem;
		span{
			display:block;
			@include sizeColor(0.9386666667rem,#1aad19);
			margin-left:1.0666666667rem;
		}
	}
	.computer{
		padding-top:3rem;
		.computer_svg{
			width:7.9786666667rem;
			margin:0 auto;
			position:relative;
			.svgone{
				@include widthHeight(7.9786666667rem,6.144rem);
				svg{
					@include widthHeight(100%, 100%);
				}
			}
			.svgtwo{
				position: absolute;
				@include widthHeight(1.8rem,2.8rem);
				background:#efeef2;
				top:2.8266666667rem;
				right:-.6rem;
				svg{
					@include widthHeight(100%, 100%);
				}
			}
		}
		.computer_text{
			width:100%;
			text-align:center;
			@include sizeColor(0.7386666667rem,#353535);
			margin-top:1rem;
		}
		.computer_text:nth-of-type(2){
			margin-top:0.5rem;
			@include sizeColor(0.6533333333rem,#999999)
		}
		.soundoff{
			width:10.752rem;
			margin:0 auto;
			@include justify;
			padding-top:2.1333333333rem;
			.silence{
				@include widthHeight(3.4133333333rem,3.4133333333rem);
				background:#fff;
				border-radius:50%;
				position: relative;
				svg{
					@include widthHeight(1.3226666667rem,1.28rem);
					@include center;
				}
			}
		}
		.exitw{
			width:9.304rem;
			margin:0 auto;
			padding-top:2.1333333333rem;
			padding-bottom:1.0666666667rem;
			div{
				@include widthHeight(9.304rem, 1.52rem);
				line-height:1.52rem;
				border:3px solid #28b126;
				@include sizeColor(0.732rem,#28b126)
				border-radius:5px;
				text-align:center;
			}
		}
		
	}
	.warn{
		position: absolute;
		@include widthHeight(100%, 100%);
		top:0;
		left:0;
		.warn_bg{
			position: fixed;
			@include widthHeight(100%, 100%);
			background:#000;
			opacity: .3;
			top:0;
			left:0;
		}
		.warn_text{
			@include widthHeight(12.0466666667rem,6.6426666667rem);
			padding:0.9386666667rem 1.152rem 0.7893333333rem 0.78933rem;
			border-radius:5px;
			position: fixed;
			background:#fff;
			left:0;
			right:0;
			margin:auto;
			top:0;
			bottom:0;
			h1{
				@include sizeColor(.9rem,#202020);
				padding-bottom:0.4533333333rem;
			}
			p{
				@include sizeColor(0.7rem,#202020);
				padding-bottom:1rem;
			}
			.warn_obt{
				@include justify(flex-end)
				span{
					display:block;
					@include sizeColor(0.7rem,#808080)
				}
				span:nth-of-type(2){
					@include sizeColor(0.7rem,#1aad19);
					margin-left:1.0666666667rem;
				}
			}
		}
	}
</style>