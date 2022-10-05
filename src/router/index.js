import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MapBuilder from '../views/MapBuilder.vue'
import SearchView from '../views/SearchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/map_builder',
    name: 'Map Builder',
    component: MapBuilder
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
