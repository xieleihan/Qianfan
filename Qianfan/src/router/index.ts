import { createRouter, createWebHashHistory } from 'vue-router'
import { useStartStore } from '../stores/start';
import type { RouteRecordRaw } from 'vue-router';
// import StartpagesView from '../views/StartpagesView.vue';

const routes = [
  {
    path: '/',
    redirect: '/startpages',
    
  },
  {
    path: '/startpages',
    name: 'startpages',
    // component: StartpagesView,
    // component: () => import('@/views/StartpagesView.vue'),
    // component: () => import('@/views/StartpagesView.vue'), // 添加组件
    children: [
      {
        path: 'login',
        name: 'login',
        components: {
          loginstart: () => import('../views/LoginView.vue')
        }
      },
      {
        path: 'register',
        name: 'register',
        components: {
          registerstart: () => import('../views/RegisterView.vue')
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    components: {
      home: () => import('../views/HomeView.vue')
    }
  }
]as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const startStore = useStartStore();
  if (document.cookie.indexOf('token') !== -1) {
    next();
  } else {
    if (to.path === '/startpages/login' || to.path === '/startpages/register') {
      startStore.open();
      next();
    } else {
      next('/startpages');
    }
  }
})

export default router
