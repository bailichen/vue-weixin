<template>
	<header>
		<section class="logoPart" v-if="logoPart">微信</section>
		<section class="searchPart" v-if="searchPart">
			<router-link to='' class="searchlink">
				<svg class="icon-search">
				    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
				</svg>
			</router-link>
		</section>
		<section class="addPart" v-if="add">
			<svg class="icon-search">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add"></use>
			</svg>
		</section>
	</header>	
</template>

<script>

	export default{
		data(){
			return{
				
			}
		},
		props: ['logoPart', 'searchPart', 'add'],
		created(){

		},
		mounted(){
			
		},
		components:{

		},
		computed:{

		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	header{
		@include widthHeight(100%,2.06933rem);
		background:$black;
		color:#fff;
		position: relative;
		.logoPart{
			@include topcenter;
			@include sizeColor(0.704rem,#fff);
			left:0.5973333333rem;
		}
		.searchPart{
			@include topcenter;
			right:3.52rem;
			@include widthHeight(0.8106666667rem,0.8106666667rem);
			.searchlink{
				dispaly:block;
				@include widthHeight(0.8106666667rem,0.8106666667rem);
				svg{
					@include widthHeight(100%,100%);
				}
			}
		}
		.addPart{
			@include topcenter;
			right:1.0453333333rem;
			@include widthHeight(0.8106666667rem,0.8106666667rem);
			svg{
				@include widthHeight(100%,100%);
			}
		}
	}
</style>