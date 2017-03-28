<template>
	<header>
		<slot name="title"></slot>
	</header>	
</template>

<script>

	export default{
		data(){
			return{
				
			}
		},
		props:["title"],
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
		width:100%;
	}
</style>