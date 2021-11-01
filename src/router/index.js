import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Chat from '@/components/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register
  },
    {
    path: '/Foro',
    name: 'Chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
