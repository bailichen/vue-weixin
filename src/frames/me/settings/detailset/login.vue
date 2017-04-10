<template>
	<section class="child_page">
		<head-top logoPart="login"></head-top>
		<section class="login">
			<div class="useid" :class="{'useid_border' : borderColor}">
				<div class="mark">帐号</div>
				<div class="input_mark"><input type="text" placeholder="微信号" v-model="inputaccounts" @input="inpuMark" @click="accountsMark" /></div>
				<div class="svg_close" v-if="accounts" @click="clearMark">
					<svg fill="#c3c3c3">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use>
					</svg>
				</div>
			</div>
			<div class="useid" :class="{'useid_border' : borderColortwo}">
				<div class="mark">密码</div>
				<div class="input_mark"><input type="password" placeholder="密码" maxlength="16" @input="inpuCode" v-model="inputcode" @click="accountsCode" /></div>
				<div class="svg_close" v-if="code" @click="clearCode">
					<svg fill="#c3c3c3">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use>
					</svg>
				</div>
			</div>
			<div class="login_botton" @click="loginSuccess"> 
				登 录
			</div>
		</section>
	</section>	
</template>

<script>
	import headTop from 'src/components/header/head'
	export default{
		data(){
			return{
				inputaccounts: "",		//帐号	
				inputcode: "",			//密码
				accounts: false,		//清除帐号
				code: false,			//清除密码
				borderColor:true,		//下边框颜色
				borderColortwo: false	
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
			inpuMark(){
				this.inputaccounts ? this.accounts=true : this.accounts=false;
			},
			inpuCode(){
				this.inputcode ? this.code=true : this.code=false;
			},
			accountsMark(){
				this.borderColor=true;
				this.borderColortwo=false;
			},
			accountsCode(){
				this.borderColor=false;
				this.borderColortwo=true;
			},
			clearMark(){
				this.inputaccounts="";
				this.accounts=false;
			},
			clearCode(){
				this.inputcode="";
				this.code=false;
			},
			loginSuccess(){
				if(this.inputaccounts){
					this.$router.push('/dialogue')
				}
				
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
		background-color: #fff;
	}
	.login{
		padding-top: 2.6rem;
		width:14.3786666667rem;
		margin:0 auto;
		.useid{
			width:100%;
			border-bottom:1px solid #d4d4d4;
			@include justify(flex-start);
			align-items:center;
			.mark{
				@include sizeColor(0.64rem, #333);
				letter-spacing:0.5546666667rem;
				line-height:2.0266666667rem;
				padding-left:0.4266666667rem;
			}
			.input_mark{
				margin-right:0.34rem;
				margin-left:1rem;
				@include widthHeight(9.1rem,2.0266666667rem);
				input{
					display:inline-block;
					width:9.1rem;
					line-height:2rem;
					@include sizeColor(0.64rem, #333);
				}
			}
			.svg_close{
				@include widthHeight(0.64rem, 0.64rem);
				svg{
					display:block;
					@include widthHeight(100%, 100%);
				}
			}
		}
		.useid_border{
			border-color:#45c01a;
		}
		.login_botton{
			margin-top:1.536rem;
			text-align:center;
			background:#1aad19;
			border:1px solid #179e16;
			border-radius:5px;
			line-height:1.6rem;
			@include sizeColor(.7rem,#fff);
		}
	}
</style>