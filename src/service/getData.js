import * as searchField from './data/search'
import * as contact from './data/contacts'
import * as dialoglist from './data/dialoglist'


const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

export const searchList = () => setpromise(searchField.search)		//搜索页6个字段列表
export const contactList = () => setpromise(contact.contacts)		//通讯录列表
export const dialog = () => setpromise(dialoglist.dialog)			//对话列表页数据