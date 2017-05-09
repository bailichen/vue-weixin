/*通讯录所以联系人
*	wxid:微信号
*	headurl:头像图片地址
*	petname:昵称
*	sex:性别(男0女1)
*	remarks:备注
* 	sdasd:个性签名
*	phone:电话号码
*	gallery:相册
*	district:地区
*	source:添加来源
*	Messageblob:对话内容,
*	newmeassage:对话最新一条消息
*	sendobject:发送信息的对象(1是别人0是自己)
*
*
*
*	imgurl:图片地址
*/	

import {imgurl} from 'src/config/env';

export const userInfo = {
	"wxid":"xulianjie442154157",
	"headurl":imgurl+'chen.jpg',
	"petname":"百里辰",
	"sex":1,
	"sdasd":"披荆斩棘",
	"phone":"15800319949",
	"sendobject":0,
	"gallery":[
		imgurl+'chen.jpg',imgurl+'cangdu.jpg',imgurl+'b1.jpg'
	],
	"district":"上海 闵行",
	"newmeassage":"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",
	"Messageblob":[
		"人生没有彩排，每天都是直播，不仅收视率低，而且工资不高。",
	],
}