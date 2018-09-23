import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import First from './views/First.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/pierwsza',
      name: 'first',
      component: First
    }
    
  ]
})
