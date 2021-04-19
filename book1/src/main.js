import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Student from './components/Student.vue'
import Book from './components/Book.vue'
import CNNode from './components/CNNode.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/work',
    component:Work
  },
  {
    path:'/student',
    component:Student
  },
  {
    path:'/book',
    component:Book
  },
  {
    path:'/cnnode',
    component:CNNode
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
