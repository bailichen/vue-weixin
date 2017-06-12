import * as searchField from './data/search'
import * as contact from './data/contacts'
import * as dialoglist from './data/dialoglist'
import * as usersay from './data/userword'
import * as fcricle from './data/friendcircle'
import * as collectData from './data/collect'
import * as bursetData from './data/burse'
import * as albumData from './data/album'
import * as groupData from './data/groupchat'
import * as chatmoreData from './data/chatmore'
import fetch from '../config/fetch.js'


const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

export const searchList = () => setpromise(searchField.search);		//搜索页6个字段列表
export const contactList = () => setpromise(contact.contacts);		//通讯录列表
export const dialog = () => setpromise(dialoglist.dialog);			//对话列表页数据
export const groupChat = () => setpromise(groupData.groupchat);			//对话列表页数据

export const userInfo = user_id => fetch('/user/info', {user_id});			//获取用户信息
export const userWord = () => setpromise(usersay.userWord);			//获取用户信息

export const circle = () => setpromise(fcricle.circle);				//获取朋友圈信息
export const collect = () => setpromise(collectData.collect);		//获取收藏数据
export const burse = () => setpromise(bursetData.burse);				//获取我的钱包数据
export const album = () => setpromise(albumData.album);				//获取我的钱包数据
export const chatData = () => setpromise(chatmoreData.chatmore);		//获取聊天页面轮播数据
export const login = data => fetch('/user/login', data);			//登陆
export const getHistory = data => fetch('/chat/history', data);			//聊天记录
