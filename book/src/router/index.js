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
    path: '/workCenter',
    name: 'WorkCenter',
    component: () => import('../views/WorkCenter.vue')
  },
  {
    path:'/studentMessage',
    name:'StudentMessage',
    component:()=>import('../views/StudentMessage.vue')
  },
  {
    path:'/bookMessage',
    name:'BookMessage',
    component:()=>import('../views/BookMessage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
