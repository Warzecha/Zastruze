import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import First from './views/First.vue'
import FillTheGaps from './views/FillTheGaps.vue'
import Compiler from './views/Compiler.vue'
import Picture from './views/Picture.vue'

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
    },
    {
      path: '/chomik',
      name: 'chomik',
      component: FillTheGaps,
      meta: {
        title: 'K_MP_L_T_R'
      }
    },
    {
      path: '/kompilator',
      name: 'kompilator',
      component: Compiler
    },
    {
      path: '/rybka',
      name: 'rybka',
      component: Picture
    }
    
  ]
})


