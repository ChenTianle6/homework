import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/Advert.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
