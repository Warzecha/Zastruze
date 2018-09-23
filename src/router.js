import Vue from 'vue'
import Router from 'vue-router'
import FillTheGaps from './views/FillTheGaps.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/fillthegaps',
      name: 'fillthegaps',
      component: FillTheGaps,
      meta: {
        title: 'K_MP_L_T_R'
      }
    }
  ]
})


