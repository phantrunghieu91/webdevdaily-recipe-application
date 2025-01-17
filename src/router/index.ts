import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import PageRecipeDetail from '@/pages/PageRecipeDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: PageRecipeDetail,
    }
  ],
})

export default router
