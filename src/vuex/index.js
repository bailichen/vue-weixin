//状态

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
	mute:false,		//是否静音
	computershow:true,		//是否电脑登录
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})