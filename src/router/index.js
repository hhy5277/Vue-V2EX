import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TopicDetail from '@/components/TopicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/topic/:id',
      name: 'Topic',
      component: TopicDetail
    }
  ]
})
