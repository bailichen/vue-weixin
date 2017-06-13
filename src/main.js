import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './vuex/'
import './style/public.scss'
import './config/rem'
import FastClick from 'fastclick'



Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode:'hash',  //路由模式
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
		if(savedPosition){
			return savedPosition
		} else {
			if(from.meta.keepAlive){
				from.meta.savedPosition = document.body.scrollTop;
			}
			return {x:0,y:to.meta.savedPosition || 0}
		}
	}
})

new Vue({
	router,
	store,
}).$mount("#weixin")

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}