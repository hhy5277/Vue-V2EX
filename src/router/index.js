import Vue from 'vue'
import Router from 'vue-router'
import AppBar from '@/components/AppBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: AppBar
    }
  ]
})
