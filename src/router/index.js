import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Guas from '@/data/gua-data'

Vue.use(VueRouter)

const routes = [{
		path: '/ShuZiGua',
		name: 'Home',
		component: Home
	},
	{
		path: "/guas/:name",
		name: "DestinationDetails",
		props: true,
		component: () =>
			import( /* webpackChunkName: "DestinationDetails"*/ "@/views/GuaDetail"),
			
		beforeEnter: (to, from, next) => {
			const exists = Guas.details.find(
				destination => destination.name === to.params.name
			);
			if (exists) {
				next();
			} else {
				next({
					name: "notFound"
				});
			}
		}
	},
	{
		path: '/ShuZiGua/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router
