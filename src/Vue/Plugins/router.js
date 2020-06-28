import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import ('../Components/Landing.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import ('../Components/Home.vue')
    }
  ]
})
