import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '@/pages/search')
    }
  ]
})

export default router
