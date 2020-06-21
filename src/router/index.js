import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'z',
    redirect: "/home",
  },

  {
    path: '/home',
    name: 'home',
    component: Home
    
  },
  {
    path: '/login',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {


    path:'/home/xqy/:id',
    name: "xyq",
    component: () => import(/* webpackChunkName: "about" */ '@/views/components/xqy.vue')



  },
  {
    path:'/register',
    name: "register",
    component: () => import(/* webpackChunkName: "about" */ '@/views/components/register.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
