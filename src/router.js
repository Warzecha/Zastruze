import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import First from './views/First.vue'
import FillTheGaps from './views/FillTheGaps.vue'
import Google from './views/Google.vue'
import Morse from './views/Morse.vue'

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
      component: First,
      meta: {
        title: 'Madagaskar'
      }
    },
    {
      path: '/fillthegaps',
      name: 'fillthegaps',
      component: FillTheGaps,
      meta: {
        title: 'K_MP_L_T_R'
      }
    },
    {
      path: '/brzuszki',
      name: 'morse',
      component: Morse,
      meta: {
        title: ':)'
      }
    },
    {
      path: '/antananarywa',
      name: 'google',
      component: Google,
      meta: {
        title: 'Google'
      }
    }
    
  ]
})


