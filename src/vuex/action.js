//处理数据

import {dialog} from 'src/service/getData'
import {SAVE_BEGINDIALOGUE} from './mutation-types.js'

export default {

	 async getDialog({
	 	commit,
	 	state
	 }){
	 	let res=await dialog();
	 	commit(SAVE_BEGINDIALOGUE,res)
	 }
}