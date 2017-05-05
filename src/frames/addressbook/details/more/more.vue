<template>
	<section class="child_page">
		<head-top crossover="微信"></head-top>
		<section class="more">
			<div>
				<span>个性签名</span><span>{{sdasd}}</span>
			</div>
			<div>
				<span>来源</span><span>{{source}}</span>
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import {mapState} from 'vuex'
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
			...mapState([
			    'sdasd', 'source',
			]),
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
	.more{
		padding-top:2.9226633rem;
		div{
			background:#fff;
			@include justify;
			padding:0 0.59rem;
			border-bottom:1px solid #e2e2e2;
			span{
				display:block;
				@include sizeColor(0.7rem,#333);
				line-height:2rem;

			}
			span+span{
				@include sizeColor(0.58rem,#999);
			}
		}
		div:last-child{
			border:0;
		}
	}
</style>