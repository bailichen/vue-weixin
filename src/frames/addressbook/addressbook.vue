<template>
	<section>
		<head-top logo-part="true" search-part="true" add="true"></head-top>
		<!-- 联系人列表 -->
		<section class="contacts">
			<div class="contacts_top">
				<ul>
					<router-link to="" tag="li" class="contacts_li">
						<div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#newfriend"></use>
							</svg>
						</div>
						<div class="contacts_text">
							新的朋友
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#groupchat"></use>
							</svg>
						</div>
						<div class="contacts_text">
							群聊
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#label"></use>
							</svg>
						</div>
						<div class="contacts_text">
							标签
						</div>
					</router-link>
					<router-link to="" tag="li" class="contacts_li">
						<div class="contacts_img">
							<svg>
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#accounts"></use>
							</svg>
						</div>
						<div class="contacts_text">
							公众号
						</div>
					</router-link>
				</ul>
			</div>
			<div class="contacts_bottom">
				<ul class="contacts_bottom_ul">
					<li>
						<h1>A</h1>
						<ul>
							<router-link to="" tag="li">
								<div class="personlist_img">
									<img src="../../images/chen.jpg" alt="">
								</div>
								<div class="personlist_name ellipsis">
									百里辰
								</div>
							</router-link>
						</ul>
					</li>
				</ul>
				<section class="list_guide">
					<dl>
						<dd>A</dd>
						<dd>B</dd>
						<dd>C</dd>
						<dd>D</dd>
					</dl>
					<p>#</p>
				</section>
			</div>
			
		</section>
		
		<foot-guide></foot-guide>
	</section>	
</template>

<script>
	import headTop from '../../components/header/head'
	import footGuide from '../../components/footer/foot'
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
	.contacts{
		width:100%;
		background:#fff;
		padding-top:2.06933rem;
		.contacts_top{
			ul{
				width:14rem;
				margin:0 auto;
				.contacts_li{
					width:100%;
					padding:0.3413333333rem 0;
					border-bottom:1px solid #e0e0e0;
					@include justify(flex-start);
					align-items:center;
					.contacts_img{
						@include widthHeight(1.5786666667rem,1.5786666667rem);
						svg{
							@include widthHeight(100%,100%);
						}
					}
					.contacts_text{
						@include sizeColor(0.64rem,#2a2a2a);
						margin-left:0.5333333333rem;
					}

				}
				.contacts_li:last-child{
					border:0;
				}
			}
		}
		.contacts_bottom{
			.contacts_bottom_ul{
				
				li{
					width:100%;
					h1{
						display:block;
						background:#ebebeb;
						line-height:0.9813333333rem;
						padding-left:0.5973333333rem;
						@include sizeColor(0.384rem,#8a8a8a);
					}
					ul{
						width:14rem;
						margin:0 auto;
						li{
							padding:0.3413333333rem 0;
							@include justify(flex-start);
							border-bottom:1px solid #e0e0e0;
							align-items:center;
							.personlist_img{
								@include widthHeight(1.5786666667rem,1.5786666667rem);
								img{
									@include widthHeight(100%,100%);
								}
							}
							.personlist_name{
								@include sizeColor(0.64rem,#2a2a2a);
								margin-left:0.5333333333rem;
								width:12.6rem;

							}

						}
						li:last-child{
							border:0;
						}
					}
				}
			}
			.list_guide{
				position: fixed;
				top:50%;
				transform:translateY(-50%);
				right:0.2986666667rem;
				dl{
					dd{
						@include sizeColor(0.54rem,#585858);
					}
				}
				p{
					@include sizeColor(0.54rem,#585858);
				}
			}
		}
		
	}
</style>