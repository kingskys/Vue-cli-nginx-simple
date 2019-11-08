import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sort from '@/components/Sort'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/job/',
	routes: [
	{
	  path: '/',
	  name: 'HelloWorld',
	  component: HelloWorld
	},
	{
	  path: '/sort',
	  name: 'Sort',
	  component: Sort
	},
	{
	  path: '*',
	  name: 'Notfound',
	  component: NotFound
	}
	]
})
