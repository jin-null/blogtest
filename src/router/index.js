import Vue from 'vue'
import Router from 'vue-router'
import ElmIndex from '@/components/ElmIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ElmIndex',
      mode: history,
      component: ElmIndex
    }
  ]
})
