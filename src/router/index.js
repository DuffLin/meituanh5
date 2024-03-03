import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'dataStatistics',
        component: () => import("@/page/dataStatistics/dataStatistics.vue")
    },{
        path: '/myMoney',
        name: 'myMoney',
        component: () => import("@/page/myMoney/myMoney.vue")
    },{
        path: '/myShop',
        name: 'myShop',
        component: () => import("@/page/myShop/myShop.vue")
    },{
        path: '/storeOrders',
        name: 'storeOrders',
        component: () => import("@/page/storeOrders/storeOrders.vue")
    },{
        path: '/login',
        name: 'login',
        component: () => import("@/page/login/login.vue")
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router