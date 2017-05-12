<template>
	<section class="child_page">
		<head-top crossover="朋友圈"></head-top>
		<section class="friend">
			<div class="theme" @click="exportInput">
				<div class="themeinit"></div>
				<img :src="newImg" id="imgSrc" ref="imgSrc" class="imgSrc" />
				<div class="themetext" :class="{shoowimg : imageSrc}">轻触更换主题照片</div>
				<div class="personImg">
					<div class="personame">{{userInfo.petname}}</div>
					<div class="headimg">
						<img :src="userInfo.headurl" alt="">
					</div>
				</div>
			</div>
			<div class="coverinput" :class="{shoowinput : afterclcik}">
				<div class="coverinputbg" @click="hideIput"></div>
				<div class="coverfiletext">
					<div class="wipeinput">
						更换相册封面
						<input type="file" class="coverfile" id="input_file" />
					</div>
				</div>
			</div>
			<div class="condition">
				<ul>
					<li>
						<div class="condition_left">
							<img src="../../../images/b1.jpg" alt="">
						</div>
						<div class="condition_right">
							<h1>徐连杰</h1>
							<div class="publishtext">
								今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今天今
							</div>
							<div class="publishimg clear">
								<img src="../../../images/b1.jpg" alt="" :class="{releaseimg : releaseimgnum}">
								<img src="../../../images/b1.jpg" alt="" :class="{releaseimg : releaseimgnum}">
								<img src="../../../images/b1.jpg" alt="" :class="{releaseimg : releaseimgnum}">
							</div>
							<div class="commentbutton">
								<div class="button_left clear">
									<span>1小时前</span>
									<span>删除</span>
								</div>
								<div class="button_right">
									<svg class="button_svg">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comment"></use>
									</svg>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import uploadPreview from 'src/config/uploadPreview.js' 
	import {mapState, mapActions, mapMutations} from 'vuex'
	export default{
		data(){
			return{
				filevalue:'',
				imageSrc:false,
				afterclcik:true,
				releaseimgnum:true,
			}
		},
		created(){

		},
		mounted(){
			//上传图片并展示图片（无剪裁功能）
			new uploadPreview({
				UpBtn: "input_file",
				ImgShow: "imgSrc",
				ImgType:["gif", "jpeg", "jpg", "bmp", "png"],
				callback:()=>{
					this.imageSrc=true;
					this.afterclcik=true;
					this.newImg=this.$refs.imgSrc.src
					this.SAVE_THEMIMG(this.$refs.imgSrc.src)
				}
			});
			this.getUserInfo();
		},
		components:{
			headTop,
		},
		computed:{
			...mapState([
				"newImg","userInfo"
			]),
		},
		methods:{
			...mapMutations([
                "SAVE_THEMIMG",
            ]),
            ...mapActions([
            	"getUserInfo",
            ]),
			exportInput(){
				this.afterclcik=false;
			},
			hideIput(){
				this.afterclcik=true;
			}
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
		background-color: #f8f8f8;
	}
	.friend{
		padding-top:2.06933rem;
		background-color: #f8f8f8;
		.theme{
			width:100%;
			margin-top:-1px;
			height:11.3706666667rem;
			position:relative;
			.themeinit{
				width:100%;
				height:11.3706666667rem;
				position:absolute;
				top:0;
				left:0;
				background:#000;
				opacity:.6;
			}
			.imgSrc{
				display:block;
				position:absolute;
				top:0;
				z-index:4;
				width:100%;
				height:11.3706666667rem;
			}
			.shoowimg{
				display:none;
			}
			.themetext{
				@include center;
				@include sizeColor(0.6rem,#000);
				z-index:2;
			}
			.personImg{
				position: absolute;
				right:0.512rem;
				z-index:6;
				bottom:-1.3866666667rem;
				@include justify(flex-end);
				.personame{
					display:block;
					margin-right:0.512rem;
					@include sizeColor(0.64rem,#fff);
					margin-top:0.96rem;
				}
				.headimg{
					background:#fff;
					border:1px solid #e2e2e2;
					img{
						margin:0.064rem;
						display:block;
						@include widthHeight(3.4133333333rem,3.4133333333rem);
					}
				}
			}
		}
		.coverinput{
			position: absolute;
			z-index:11;
			top:0;
			width:100%;
			height:100%;
			.coverinputbg{
				position: fixed;
				width:100%;
				height:100%;
				top:0;
				background:#000;
				opacity:.3;
			}
			.coverfiletext{
				@include center;
				z-index:5;
				width:11rem;
				height:2.048rem;
				line-height:2.048rem;
				background:#fff;
				border-radius:3px;
				@include sizeColor(0.64rem,#333);
				
				.wipeinput{
					position: relative;
					padding-left:1rem;
					.coverfile{
						position: absolute;
						display:block;
						top:0;
						left:0;
						width:11rem;
						height:2.048rem;
						opacity:0;
					}
				}
				
			}
		}
		.shoowinput{
			display:none;
		}
		.condition{
			width:100%;
			padding-top:1.5786666667rem;
			ul{
				width:100%;
				li{
					padding:0.512rem;
					border-bottom:1px solid #e2e2e2;
					@include justify(flex-start);
					.condition_left{
						width:1.792rem;
						margin-right:0.2986666667rem;
						img{
							display:block;
							@include widthHeight(1.792rem,1.792rem);
						}
					}
					.condition_right{
						width:12.9026666667rem;
						h1{
							display:block;
							padding-top:0.1706666667rem;
							@include sizeColor(0.5546666667rem,#565b71);
						}
						.publishtext{
							margin-top:0.064rem;
							width:100%;
							@include sizeColor(0.5546666667rem,#333);
							line-height:0.7466666667rem;
							overflow : hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 6;
							-webkit-box-orient: vertical;
							word-break:break-all;
						}
						.publishimg{
							width:100%;
							margin-top:0.3413333333rem;
							img{
								width:40%;
								float:left;
								height:auto;
							}
							.releaseimg{
								width:3.6266666667rem;
								margin-right:0.1066666667rem;
								height:3.6266666667rem;
							}
						}
						.commentbutton{
							@include justify;
							.button_left{
								margin-top:0.576rem;
								span{
									float:left;
									@include sizeColor(0.4693333333rem,#666);
									margin-right:0.4266666667rem;
								}
								span+span{
									color:#565b71;
								}
							}
							.button_right{
								margin-top:0.6826666667rem;
								@include widthHeight(0.9386666667rem,0.64rem);
								.button_svg{
									display:block;
									@include widthHeight(100%,100%);
								}
							}
						}
					}
				}
			}

		}
	}
</style>