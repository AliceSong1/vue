import Vue from 'vue'
import Router from 'vue-router'
// import catalog from '@/components/catalog'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'component',
      component (resolve) {
        require(['../pages/component.vue'], resolve)
      },
      meta: {
        title: '害我加班的bug是你做的！'
      }
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component (resolve) {
        require(['../pages/bookmark.vue'], resolve)
      },
      meta: {
        title: '书签'
      }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component (resolve) {
        require(['../components/catalog.vue'], resolve)
      },
      meta: {
        title: '组件！'
      }
    }
  ]
})
