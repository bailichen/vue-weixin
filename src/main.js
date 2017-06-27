import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './vuex/'
import './style/public.scss'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: 'history', //路由模式
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: to.meta.savedPosition || 0
			}
		}
	}
})
router.beforeEach((to, from, next) => {
	if (from.meta.keepAlive) {
		from.meta.savedPosition = document.body.scrollTop;
	}
	next()
})

new Vue({
	router,
	store,
}).$mount("#weixin")