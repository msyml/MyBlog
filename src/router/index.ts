import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/common/404.vue'
import AboutMe from '../components/aboutMe/index.vue'
import Essay from '../components/essay/index.vue'
import Ums from '../components/ums/index.vue'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: {
      title: '抹上一抹凉'
    },
    children: [
      {
        path: '/aboutMe',
        name: 'aboutMe',
        component: AboutMe,
        meta: {
          title: '关于我'
        }
      },
      {
        path: '/essay',
        name: 'essay',
        component: Essay,
        meta: {
          title: '随笔'
        }
      },
      {
        path: '/ums',
        name: 'ums',
        component: Ums,
        meta: {
          title: '管理'
        }
      }
    ]
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
