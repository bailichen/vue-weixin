<template>
	<section class="enlargetext" @click="enlargetextHide" >
		<p>{{enlargetext}}</p>
	</section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		props:['enlargetext'],
		created(){

		},
		mounted(){

		},
		components:{

		},
		computed:{
			...mapState([
			    "infor", "enlargeShow",
			]),
		},
		methods:{
			
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/public";
	.enlarge{
		position:fixed;
		display:block;
		@include widthHeight(100%,100%);
		background:#fff;
		top:0;
		z-index:100;
		p{
			@include center;
			@include sizeColor(1.4933333333rem,#333);
		}
	}
	.enlarge_part{
		display:none;
	}
</style>