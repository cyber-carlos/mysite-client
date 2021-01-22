import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '/@/components/DefaultLayout.vue'
import CustomRouterView from '/@/components/CustomRouterView.vue'

import FeedList from '/@/views/FeedList.vue'
import Feed from '/@/views/Feed.vue'
import About from '/@/views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/feed/',
      component: DefaultLayout,
      meta: { label: 'Home' },
      children: [
        {
          path: '/feed/',
          component: CustomRouterView,
          meta: { label: 'Feed' },
          children: [
            { path: '/feed/', name: 'FeedList', component: FeedList },
            { path: '/feed/:feedId', name: 'Feed', component: Feed, props: true },
          ],
        },

        { path: 'about', name: 'About', component: About, meta: { label: 'About' } },
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
