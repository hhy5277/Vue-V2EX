import Vue from 'vue'
import Router from 'vue-router'
import AppBar from '@/components/AppBar'
import TopicDetail from '@/components/TopicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: AppBar
    },
    {
      path: '/topic/:id',
      name: 'Topic',
      component: TopicDetail
    }
  ]
})
