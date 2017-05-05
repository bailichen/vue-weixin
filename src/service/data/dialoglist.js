//对话列表

/*
*
*headurl:对话人头像
*remarks:对话人名字
*newmeassage:对话最新一条消息
*sendobject:发送信息的对象(0是别人1是自己)
*Messageblob:消息内容
*
*
*
*
*
*
*
*
*/

import {imgurl} from 'src/config/env';

export const dialog = [
{
	"headurl":imgurl+'chuqiao.jpg',
	"remarks":"楚乔",
	"newmeassage":"我想在五十年之后，我一定还是像现在一样爱你。",
	"sendobject":0,
	"Messageblob":[
		"有位非常漂亮的女同事，有天起晚了没有时间化妆便急忙冲到公司。结果那天她被记旷工了。。。。",
		"你病，或者不病倒，老板就在那里，不悲不喜；你休，或者不休假，工作就在那里，不来不去；你拼，或者不拼命，工资就在那里，不增不减；你辞，或者不辞职，地球还是会转，不歇不停",
		"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了",
	],
},
{
	"headurl":imgurl+'yuwenyue.jpg',
	"remarks":"宇文玥",
	"newmeassage":"老虎不发猫，你当我是病危呀!",
	"sendobject":1,
	"Messageblob":[
		"人生没有彩排，每天都是直播，不仅收视率低，而且工资不高。",
		"看庭前花开花落，荣辱不惊，望天上云卷云舒，去留无意。",
		"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",
	],
}
]
