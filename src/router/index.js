import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/views/login/Index'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
