import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import play from '@/components/play'
import time from '@/components/time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/play',
      name: 'play',
      component: play
    },
    {
      path: '/time',
      name: 'time',
      component: time
    }
  ]
})
