import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/common/404.vue'

const routes = [
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    meta: {
      title: '抹上一抹凉'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由跳转前判断
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/') {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
