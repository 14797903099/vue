import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
      // children: [
      // 	{
	    	// path: 'station'
	    	// component: Station
   	  //   }
      // ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
