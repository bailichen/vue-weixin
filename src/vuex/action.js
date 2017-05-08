//处理数据

import {dialog} from 'src/service/getData'
import {SAVE_BEGINDIALOGUE} from './mutation-types.js'

export default {

	 async getDialog({
	 	commit,
	 	state
	 }){
	 	if(state.contactList.length > 0) return;
	 	let res=await dialog();
	 	commit(SAVE_BEGINDIALOGUE,res)
	 }
}