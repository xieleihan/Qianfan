import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/startpages'
  },
  {
    path: '/startpages',
    name: 'startpages',
    // component: () => import('@/views/StartpagesView.vue'), // 添加组件
    children: [
      {
        path: 'login',
        name: 'login',
        components: {
          loginstart: () => import('@/views/LoginView.vue')
        }
      },
      {
        path: 'register',
        name: 'register',
        components: {
          registerstart: () => import('@/views/RegisterView.vue')
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
