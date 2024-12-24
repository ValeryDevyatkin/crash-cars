import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'settings',
      component: () => import('../views/GameSettings.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue'),
    },
    {
      path: '/initiative',
      name: 'initiative',
      component: () => import('../views/InitiativeView.vue'),
    },
    {
      path: '/action',
      name: 'action',
      component: () => import('../views/ActionCard.vue'),
    },
  ],
})

export default router
