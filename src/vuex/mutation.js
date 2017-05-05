//写方法

import {
	RECORD_MUTE,
	COMPUTER_SHOW,
	SAVE_MESSAGE,
} from './mutation-types.js'

export default {
	//记录是否电脑静音
	[RECORD_MUTE](status,mutestatus){
		status.mute=mutestatus;
	},
	//是否电脑登录
	[COMPUTER_SHOW](status,computerstatus){
		status.computershow=computerstatus;
	},
	[SAVE_MESSAGE](status,{
		headurl,	
		comment,			
		wxid,				
		district,			
		gallery,				
		sdasd,				
		source,
		sex,	
	}){
		status.headurl=headurl;
		status.comment=comment;
		status.wxid=wxid;
		status.district=district;
		status.gallery=gallery;
		status.sdasd=sdasd;
		status.source=source;
		status.sex=sex;
	}
}