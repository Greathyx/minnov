import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cases from "@/views/Cases"
import Contact from "@/views/Contact"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/our-services',
    name: 'OurServices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
  {
    path: '/successful-cases',
    name: 'SuccessfulCases',
    component: Cases
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
