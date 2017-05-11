<template>
	<section class="child_page">
		<head-top crossover="朋友圈"></head-top>
		<section class="friend">
			<div class="theme" @click="exportInput">
				<div class="themeinit"></div>
				<img id="imgSrc" ref="imgSrc" :src="themimage" :class="{shoowimg : imageSrc}"/>
				<div class="themetext" :class="{shoowimg : !imageSrc}">轻触更换主题照片</div>
			</div>
			<div class="coverinput" :class="{shoowinput : afterclcik}">
				<div class="coverinputbg"></div>
				<div class="coverfiletext">
					<div class="wipeinput">
						更换相册封面
						<input type="file" class="coverfile" id="input_file" @change="changeTheme"/>
					</div>
				</div>
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import uploadPreview from 'src/config/uploadPreview.js' 
	import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return{
				filevalue:'',
				imageSrc:true,
				afterclcik:true,
				themicon:'',
			}
		},
		created(){

		},
		mounted(){
			new uploadPreview({
				UpBtn: "input_file",
				ImgShow: "imgSrc",
			});
			
		},
		components:{
			headTop,
		},
		computed:{
			...mapState([
				"themimage",
			])
		},
		methods:{
			...mapMutations([
				"SAVE_THEMIMG",
			]),
			exportInput(){
				this.afterclcik=false;
			},

			changeTheme(){
				console.log(this.$refs.imgSrc)				
				this.imageSrc=false;
				this.afterclcik=true;
				this.SAVE_THEMIMG(this.$refs.imgSrc.src)
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
		background-color: #ebebeb;
	}
	.friend{
		padding-top:2.06933rem;
		background:#fff;
		.theme{
			width:100%;
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
			img{
				display:block;
				position:absolute;
				top:0;
				z-index:2;
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
				opacity:.2;
			}
			.coverfiletext{
				@include center;
				z-index:5;
				width:11rem;
				height:2.048rem;
				line-height:2.048rem;
				background:#fff;
				border-radius:5px;
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
	}
</style>