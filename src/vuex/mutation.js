//写方法

import {
	RECORD_MUTE,
	COMPUTER_SHOW,
} from './mutation-types.js'

export default {
	//记录是否电脑静音
	[RECORD_MUTE](status,mutestatus){
		status.mute=mutestatus;
	},
	[COMPUTER_SHOW](status,computerstatus){
		status.computershow=computerstatus;
	}
}