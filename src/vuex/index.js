//状态

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
	mute:false,				//是否静音
	computershow:true,		//是否电脑登录

	headurl:'',				//头像地址图片
	comment:'',				//备注
	wxid:'',				//微信id
	district:'',			//地区
	gallery:[],				//个人相册
	sdasd:'',				//个性签名
	source:'',				//添加来源
	sex:0,					//性别
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})