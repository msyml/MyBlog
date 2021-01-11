import { createRouter, createWebHistory } from 'vue-router'
import Main from "../components/Main.vue"

const routes = [
    {
        path:'/Main',
        name:"Main",
        component: Main
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