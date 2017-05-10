<template>
	<section class="enlarge" @click="enlargeHide" :class="{moveout : }" >
		<img :src="enlarge" alt="">
	</section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		props:['enlarge'],
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
			...mapMutations([
                'ENLARGE_HEAD'
            ]),
			enlargeHide(){
				//this.ENLARGE_HEAD(false)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/public";
	@-webkit-keyframes zoomOut {
	  from {
	    opacity: 1;
	  }

	  50% {
	    opacity: 0;
	    -webkit-transform: scale3d(.3, .3, .3);
	    transform: scale3d(.3, .3, .3);
	  }

	  100% {
	    opacity: 0;
	  }
	}

	@keyframes zoomOut {
	  from {
	    opacity: 1;
	  }

	  50% {
	    opacity: 0;
	    -webkit-transform: scale3d(.3, .3, .3);
	    transform: scale3d(.3, .3, .3);
	  }

	  100% {
	    opacity: 0;
	  }
	}

	.enlarge{
		position:fixed;
		@include widthHeight(100%,100%);
		background:#000000;
		top:0;
		z-index:100;

		img{
			display:block;
			width:100%;
			height:15.0186666667rem;
			position: absolute;
			top:50%;
			left:0;
			margin-top:-7.5093333333rem;
		}
	}
	.enlarge_part{
		display:none;
	}
	body .moveout{
		animation:zoomOut .4s;
	}
</style>