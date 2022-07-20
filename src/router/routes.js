/**
 * 路由表
 * @type {import("vue-router").RouteRecordRaw[]}
 */
export const routes  = [
    {
        path: "/",
        name:"Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/about",
        name:"About",
        component: () => import("../views/about/About.vue"),
    }
];