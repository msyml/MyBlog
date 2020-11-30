import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue"

const routes = [
    {
        path:'/HelloWorld',
        name:"HelloWorld",
        component: HelloWorld
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