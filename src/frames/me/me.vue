<template>
	<section>
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<find-me></find-me>
		<foot-guide></foot-guide>
		<transition name="router-show">
		    <router-view></router-view>
		</transition>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	import findMe from 'src/components/findandMe/findandMe'
	import footGuide from 'src/components/footer/foot'
	
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
			findMe,
			footGuide
		},
		computed:{
			
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	.router-show-enter-active,.router-show-leave-active{
		transition: all .4s;
	}
	.router-show-enter,.router-show-leave-active{
		transform:translateX(100%)
	}

</style>