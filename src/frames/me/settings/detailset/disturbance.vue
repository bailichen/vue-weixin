<template>
	<section class="child_page">
		<head-top crossover="勿扰模式"></head-top>
		<section class="disturbance">
			<ul class="newshow">
				<li>
					<div class="newshow_choose">
						<div>勿扰模式</div>
						<div class="push-button">
							<input class='tgl tgl-light' id='distur' type='checkbox'>
							<label class='tgl-btn' for='distur'></label>
						</div>
					</div>
					<div class="newshow_text">
						开启后，在设定时间段内收到新消息时不会响铃或振动。
					</div>
				</li>
			</ul>
		</section>
		
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
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
	.disturbance{
		padding-top: 3.06933rem;
		ul{
			background:#fff;
			padding:0 0.64rem;
			margin-bottom:1rem;
			li{
				border-bottom:1px solid #f1f1f1;
				padding:0.4266666667rem 0;
				@include sizeColor(0.64rem,#333);
				@include justify;
				align-items:center;
			}
			li:last-child{
				border:0;
			}
		}
		.newshow{
			li{
				display: inherit;
				.newshow_choose{
					@include justify;
					align-items:center;
				}
				.newshow_text{
					@include sizeColor(0.5546666667rem,#909090);
					margin-top:0.2133333333rem;
				}
			}
		}
	}
</style>