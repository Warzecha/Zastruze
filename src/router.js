import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import First from './views/First.vue'
import FillTheGaps from './views/FillTheGaps.vue'
import Google from './views/Google.vue'
import Morse from './views/Morse.vue'
import Compiler from './views/Compiler.vue'
import Picture from './views/Picture.vue'
import Quotation from './views/Quotation.vue'
import CommandLine from './views/CommandLine.vue'
import Names from './views/Names.vue'
import Maps from './views/Maps.vue'
import Photo from './views/Photo.vue'
import Operation from './views/Operation.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/chomik',
      name: 'chomik',
      component: Operation,
      meta: {
        title: 'Działanie'
      }
    },
    {
      path: '/277',
      name: '277',
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
      path: '/grace_hopper',
      name: 'names',
      component: Names,
      meta: {
        title: 'Imiona'
      }
    },
    {
      path: '/antananarywa',
      name: 'google',
      component: Google,
      meta: {
        title: 'Google'
      }
    },
    {
      path: '/dknz',
      name: 'maps',
      component: Maps,
      meta: {
        title: 'Numer'
      }
    },
    {
      path: '/717851900',
      name: 'photo',
      component: Photo,
      meta: {
        title: 'Kto_to?'
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
    },
    {
      path: '/cytat',
      name: 'cytat',
      component: Quotation,
      meta: {
        title: 'Kto to?'
      }
    },
    {
      path: '/ada_lovlace',
      name: 'cmd',
      component: CommandLine,
      meta: {
        title: 'Wpisać w Wiersz Poleceń'
      }
    }
    
  ]
})


