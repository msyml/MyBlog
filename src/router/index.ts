import { createRouter, createWebHistory } from 'vue-router'
import main from "../views/main.vue"

const routes = [
    {
        path:'/main',
        name:"Main",
        component: main
    }
]

const router =  createRouter({
    history: createWebHistory(),
    routes
})

// 路由跳转前判断
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next({path:'/main'})
    }else{
        next()
    }
})

export default router;