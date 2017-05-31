//朋友圈数据
/*
*wxid:微信号
*headurl：微信头像
*sex:性别(男0女1)
*petname：昵称
*remarks：备注
*statements:发标的文字
*postimage:发表的图片
*like:点赞
*comment:评论
*
*
*/

import {imgurl} from 'src/config/env';
export const circle= [
	{
		"wxid":"xulianjie442154157",
		"headurl":imgurl+'chen.jpg',
		"petname":"徐连杰",
		"sex":1,
		"remarks":"",
		"statements":"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",
		"time":"5分钟前",
		"postimage":[
			imgurl+'chen.jpg',imgurl+'cangdu.jpg',imgurl+'chuqiao.jpg',imgurl+'h.jpg',imgurl+'dinglan.jpg',imgurl+'fengmian.jpg',
		],
		"like":[
			"嗯",
		],
		"comment":[
			{
				"wxid":"enen",
				"petname":"嗯",
				"remarks":"嗯",
				"commentext":"看好你呦！"
			},
			{
				"wxid":"achuqiao",
				"petname":"a楚乔",
				"remarks":"楚乔",
				"commentext":"披荆斩棘",
			},
		],
		"reviewshow":false,		//评论的弹层显示时的动画
		"reviewhide":false,		//评论的弹层消失时的动画
		"criticism":false,		//评论的弹层是否显示
		"flag":true,			//点击判断
	},
	{
		"wxid":"chenchangsheng",
		"headurl":imgurl+'chenchangsheng.jpg',
		"petname":"陈长生",
		"sex":0,
		"remarks":"",
		"statements":"逆天改命",
		"time":"20分钟前",
		"postimage":[
			
		],
		"like":['楚乔',"嗯",],
		"comment":[],
		"reviewshow":false,		//评论的弹层显示时的动画
		"reviewhide":false,		//评论的弹层消失时的动画
		"criticism":false,		//评论的弹层是否显示
		"flag":true,			//点击判断
	},
	{
		"wxid":"chenyuan",
		"headurl":imgurl+'chenyuan.jpg',
		"petname":"程鸢",
		"sex":0,
		"remarks":"",
		"statements":"",
		"time":"20分钟前",
		"postimage":[
			imgurl+'d.jpg',
		],
		"like":[],
		"comment":[
			{
				"wxid":"enen",
				"petname":"嗯",
				"remarks":"嗯",
				"commentext":"看好你呦！"
			},
			{
				"wxid":"achuqiao",
				"petname":"a楚乔",
				"remarks":"楚乔",
				"commentext":"披荆斩棘",
			},
		],
		"reviewshow":false,		//评论的弹层显示时的动画
		"reviewhide":false,		//评论的弹层消失时的动画
		"criticism":false,		//评论的弹层是否显示
		"flag":true,			//点击判断
	},
	{
		"wxid":"shugeuifei",
		"headurl":imgurl+'mengfeng.jpg',
		"petname":"魏贵妃",
		"sex":0,
		"remarks":"",
		"statements":"",
		"time":"1小时前",
		"postimage":[
			imgurl+'mengfeng.jpg',imgurl+'wudaoya.jpg',
		],
		"like":[],
		"comment":[
			{
				"wxid":"enen",
				"petname":"嗯",
				"remarks":"嗯",
				"commentext":"看好你呦！"
			},
			{
				"wxid":"achuqiao",
				"petname":"a楚乔",
				"remarks":"楚乔",
				"commentext":"披荆斩棘",
			},
		],
		"reviewshow":false,		//评论的弹层显示时的动画
		"reviewhide":false,		//评论的弹层消失时的动画
		"criticism":false,		//评论的弹层是否显示
		"flag":true,			//点击判断
	},
]

