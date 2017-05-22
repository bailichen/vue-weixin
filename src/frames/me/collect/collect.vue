<template>
	<section class="child_page">
		<head-top crossover="我的收藏"></head-top>
		<section class="collect">
			<section class="collectchild">
				<ul>
					<li v-for="item in collect">
						<div class="collect_top clear">
							<img :src="item.headurl" alt="">
							<span>{{item.remarks ? item.remarks : item.petname}}</span>
							<i>{{item.collectime}}</i>
						</div>
						<div class="collect_bottom">
							<div v-if="item.collectext" class="collectext">{{item.collectext}}</div>
							<div class="collectimg" v-if="item.collectimg"> 
								<img :src="item.collectimg" alt=""  />
							</div>
						</div>
					</li>
				</ul>
			</section>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import {collect} from 'src/service/getData.js'
	export default{
		data(){
			return{
				collect:[],
			}
		},
		created(){
			collect().then( (res) => {
				this.collect=res
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
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
	.collect{
		
		height:30rem;
		overflow:auto; 
		.collectchild{
			padding-top: 2.06933rem;
			ul{
				padding-bottom:6rem;
				li{
					margin-top:0.2133333333rem;
					padding:0.8533333333rem;
					background:#fff;
					.collect_top{
						img{
							float:left;
							@include widthHeight(1.0666666667rem,1.0666666667rem);
							border-radius:50%;
							margin-right:0.4266666667rem;
						}
						span{
							float:left;
							@include sizeColor(0.5973333333rem,#666);
							line-height:1.0666666667rem;
						}
						i{
							float:right;
							font-style:nomal;
							@include sizeColor(0.512rem,#999);
							line-height:1.0666666667rem;
						}
					}
					.collect_bottom{
						margin-top:0.6826666667rem;
						.collectext{
							line-height:0.8533333333rem;
							@include sizeColor(0.64rem,#000);
						}
						.collectimg{
							width:9.7706666667rem;
							height:5.888rem;
							overflow: hidden;
							img{
								display:block;
								width:9.7706666667rem;
								height:auto;
							}
						}
					}
				}
			}
		}		
	}	
</style>