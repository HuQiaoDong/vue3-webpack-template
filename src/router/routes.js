/**
 * 路由表
 * @type {import("vue-router").RouteRecordRaw[]}
 */
import Layout from "../Layout";
export const routes  = [
    {
        name: "Layout",
        path: "/",
        redirect: "/home",
        component: Layout,
        children: [
            {
                path: "home",
                name:"Home",
                component: () => import("../views/Home.vue"),
            },
            {
                path: "about",
                name:"About",
                component: () => import("../views/about/About.vue"),
            }
        ]
    },


];