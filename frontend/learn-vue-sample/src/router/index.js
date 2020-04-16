import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import Todo from '@/views/Todo.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Main,
    redirect: '/admin/todo',
    children: [
      {
        path: 'todo',
        component: Todo
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '*',
    redirect: 'login'
  }
]

const router = new VueRouter({
  routes
})

export default router
