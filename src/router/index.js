import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'benvinguda',
    component: () => import(/* webpackChunkName: "benvinguda" */ '../views/Benvinguda.vue')
  },
  {
    path: '/home/:id*',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
