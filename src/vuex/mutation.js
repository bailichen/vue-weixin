//写方法

import {
	RECORD_MUTE,
	COMPUTER_SHOW,
	SAVE_MESSAGE,
	SAVE_BEGINDIALOGUE,
	SAVE_DIALOGUE,
	GET_USERINFO,
	ENLARGE_HEAD,
	SAVE_THEMIMG,
	CHANGE_RED,
	LOGIN_COVER,
	GET_ALLGROUP,
} from './mutation-types.js'

export default {
	//记录是否电脑静音
	[RECORD_MUTE](state,mutestatus){
		state.mute=mutestatus;
	},
	//是否电脑登录
	[COMPUTER_SHOW](state, computerstatus){
		state.computershow=computerstatus;
	},
	//保存联系人信息
	[SAVE_MESSAGE](state, infor){
		state.infor={};
		state.infor=infor;
	},
	//获取的数据先保存
	[SAVE_BEGINDIALOGUE](state, arrayData){
		state.contactList = arrayData;
	},
	//增加对话人列表
	[SAVE_DIALOGUE](state, obj){
		state.contactList=[obj, ...state.contactList];
		
		//数组去重
		const newArr = new Set(state.contactList);
		state.contactList = [...newArr];	
	},
	//获取用户信息
	[GET_USERINFO](state,userInfo){
		state.userInfo=userInfo
	},
	//上传主题图片
	[SAVE_THEMIMG](state,{
		newImg,
		imagestatus
	}){
		state.newImg=newImg;
		state.imagestatus=imagestatus
	},
	//改变朋友圈红色提醒显隐
	[CHANGE_RED](state,firendwarn){
		state.firendwarn=firendwarn;
	},
	[LOGIN_COVER](state,consumerthing){
		state.consumerthing=consumerthing;
	},
	//获取所有群聊人信息
	[GET_ALLGROUP](state,allgroup){
		state.allgroup=allgroup
	}
}