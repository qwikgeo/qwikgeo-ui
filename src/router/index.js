import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MapBuilder from '../views/MapBuilder.vue'

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
    path: '/map_builder',
    name: 'Map Builder',
    component: MapBuilder
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
