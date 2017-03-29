import App from '../APP'
 
const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')
const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')

export default[{
	path:'/',
	component:App,
	children: [
		{path: '', redirect: '/dialogue'},   //地址为空时跳转dialogue页面
		{path: '/dialogue', component: dialogue},	//对话列表页
		{path: '/addressbook', component: addressbook},	//通讯录
		{path: '/find', component: find},	//发现
		{path: '/me', component: me},	//发现
	]
}]