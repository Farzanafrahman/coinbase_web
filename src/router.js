import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Aboutpage from './views/Aboutpage.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/about',
      name: 'About',
      component: Aboutpage,
    },
  ]
})