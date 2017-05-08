//写方法

import {
	RECORD_MUTE,
	COMPUTER_SHOW,
	SAVE_MESSAGE,
	SAVE_BEGINDIALOGUE,
	SAVE_DIALOGUE,
} from './mutation-types.js'

export default {
	//记录是否电脑静音
	[RECORD_MUTE](status,mutestatus){
		status.mute=mutestatus;
	},
	//是否电脑登录
	[COMPUTER_SHOW](status, computerstatus){
		status.computershow=computerstatus;
	},
	//保存联系人信息
	[SAVE_MESSAGE](status, infor){
		status.infor=infor;
	},
	//获取的数据先保存
	[SAVE_BEGINDIALOGUE](status, arrayData){
		status.contactList = arrayData;
	},
	//增加对话人列表
	[SAVE_DIALOGUE](status, obj){
		status.contactList=[obj, ...status.contactList];
		//数组去重
		const newArr = new Set(status.contactList);
		status.contactList = [...newArr];	
	},
}