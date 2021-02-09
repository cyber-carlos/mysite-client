import { createRouter, createWebHistory } from 'vue-router'

import { LayoutDefault, CustomRouterView } from '@/components/layout'

import FeedList from '@/views/FeedList.vue'
import Feed from '@/views/Feed.vue'
import About from '@/views/About.vue'
import Components from '@/views/Components.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/feed',
      component: LayoutDefault,
      meta: { label: 'Home' },
      children: [
        {
          path: '/feed',
          component: CustomRouterView,
          meta: { label: '阅读', icon: 'newspaper-folding' },
          children: [
            { path: '/feed/', name: 'FeedList', component: FeedList },
            { path: '/feed/:feedId', name: 'Feed', component: Feed, props: true },
          ],
        },
        {
          path: '/components',
          name: 'Components',
          component: Components,
          meta: { label: '组件', icon: 'figma-component' },
        },
        // {
        //   path: '/about',
        //   name: 'About',
        //   component: About,
        //   meta: { label: '关于', icon: 'tips-one' },
        // },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
