import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/report',
            name: 'report',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../analytics/pages/Report.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../identification/pages/login.component.vue')
        }

    ]
})

export default router