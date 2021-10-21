import Vue from "vue"
import Router from "vue-router"
import HomePage from "./views/HomePage.vue"
import AboutPage from "./views/AboutPage.vue"
import BlogPage from "./views/BlogPage.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutPage,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogPage,
    }
  ]
})
