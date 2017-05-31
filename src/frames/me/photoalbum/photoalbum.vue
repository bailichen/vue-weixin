<template>
	<section class="child_page">
		<head-top crossover="我的相册"></head-top>
		<section class="photoalbum scroll">
			<div class="container">
				<ul>
					<li v-for="item in photoData">
						<div class="photo_left">
							<span>{{item.albumday}}</span>
							<span>{{item.albummonth}}</span>
						</div>
						<div class="photo_right">
							<div class="albumdetail">
								<div class="teletext clear" v-if="item.diagram" v-for="value in item.diagram">
									<div class="teletext_left left" :class="{ manyimg : value.diagramimg.length>2}">
										<img :src="values" alt=""  v-for="values in value.diagramimg">
									</div>
									<div class="teletext_right left">
										<span>{{value.diagramtext}}</span>
										<span v-if=" value.diagramimg.length > 1 ">共{{value.diagramimg.length}}张</span>
									</div>
								</div>
								<div class="teletexttwo" v-if="item.puretext" v-for="value in item.puretext">
									<p>{{value}}</p>
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
	import {album} from 'src/service/getData.js'
	export default{
		data(){
			return{
				photoData:[],
			}
		},
		created(){

		},
		beforeMount(){
			album().then((res) => {
				this.photoData = res;
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
	@import "src/style/public";
	.child_page{
		position: absolute;
		width:100%;
		height:100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #fff;
	}
	.photoalbum{
		padding-top:2.06933rem;
		background-color: #fff;
		.container{
			width:100%;
			padding-top:0.4266666667rem;
			ul{
				li{
					@include justify(flex-start);
					padding:0 0.512rem;
					margin-bottom:1.1946666667rem;
					.photo_left{
						@include justify(flex-start);
						align-items:baseline;
						width:3.2rem;
						span{
							display:block;
							@include sizeColor(0.9386666667rem,#030303);
							font-weight:700;
						}
						span:nth-of-type(2){
							font-size:0.5546666667rem
						}
					}
					.photo_right{
						.albumdetail{
							.teletext{
								margin-bottom:0.2133333333rem;
								.teletext_left{
									@include widthHeight(3.1573333333rem,3.1573333333rem);
									overflow:hidden;
									display: flex;
									justify-content: center;
									flex-flow:row wrap;
									align-items: flex-start;
									align-content: flex-start;
									img{
										@include widthHeight(3.1573333333rem,3.1573333333rem);
										width: 10%;
										border: 0;
										flex-grow:2;
									}
								}
								.manyimg{
									img{
										width: 50%;
										height:50%;
										flex-grow:0;
									}
								}
								.teletext_right{
									width:7.68rem;
									height: 3.15733rem;
									margin-left:0.256rem;
									position:relative;
									span{
										display:block;
										@include sizeColor(0.5973333333rem,#030303);
										line-height:0.8533333333rem;
									}
									span:nth-of-type(1){
										overflow:hidden;
										text-overflow: ellipsis;
										display: -webkit-box;
										-webkit-line-clamp: 3;
										-webkit-box-orient: vertical;
									}
									span:nth-of-type(2){
										@include sizeColor(0.512rem,#999);
										position: absolute;
										bottom:-6px;
										left:0;
									}
								}
							}	
							.teletexttwo{
								padding:0.2986666667rem;
								background:#ebebeb;
								margin-bottom:0.2133333333rem;
								p{
									@include sizeColor(0.5973333333rem,#030303);
									width:10.4533333333rem;
									line-height:0.8533333333rem;
									overflow:hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;
									background:#ebebeb;
									
								}
							}
						}
					}
				}
			}
		}
	}
</style>