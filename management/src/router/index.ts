import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: '/startpages'
    },
    {
        path: "/startpages",
        name: "startpages",
        component: () => import("../views/StartpagesView.vue")
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;