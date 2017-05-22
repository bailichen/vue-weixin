import * as searchField from './data/search'
import * as contact from './data/contacts'
import * as dialoglist from './data/dialoglist'
import * as login from './data/login'
import * as fcricle from './data/friendcircle'
import * as collectData from './data/collect'

const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

export const searchList = () => setpromise(searchField.search)		//搜索页6个字段列表
export const contactList = () => setpromise(contact.contacts)		//通讯录列表
export const dialog = () => setpromise(dialoglist.dialog)			//对话列表页数据
export const userInfo = () => setpromise(login.userInfo)			//获取登录信息
export const circle = () => setpromise(fcricle.circle)			//获取登录信息
export const collect = () => setpromise(collectData.collect)			//获取收藏数据
