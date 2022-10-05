import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/qwikgeo-ui/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/qwikgeo-ui/login/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/qwikgeo-ui/register/',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/qwikgeo-ui/map_builder/',
    name: 'Map Builder',
    component: () => import('../views/MapBuilder.vue')
  },
  {
    path: '/search/',
    name: 'Search',
    component: () => import('../views/SearchView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
