import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     path: "/",
        //     component: () => import("../views/user/loginView.vue"),
        //     name: "login"
        // },
        {
            path: "/",
            component: () => import("../views/friend/listView.vue"),
            name: "friend list"
        },
        {
            path: "/search",
            component: () => import("../component/modal/search.vue"),
            name: "search"
        },
        {
            path: "/status",
            component: () => import("../component/brain/statusMain.vue"),
            name: "status"
        },
        {
            path: "/notice",
            component: () => import("../component/modal/notice.vue"),
            name: "notice"
        },
        {
            path: "/signUp",
            component: () => import("../views/user/signUpView.vue"),
            name: "signUp"
        },
        {
            path: "/mypage",
            component: () => import("../views/user/mypageView.vue"),
            name: "mypage"
        },
        {
            path: "/brain",
            component: () => import("../views/brain/listView.vue"),
            name: "brain list"
        },
        {
            path: "/brain/status",
            component: () => import("../views/brain/statusView.vue"),
            name: "brain status"
        },
        {
            path: "/select",
            component: () => import("../views/brain/selectView.vue"),
            name: "brain select"
        },
        {
            path: "/create",
            component: () => import("../views/brain/createView.vue"),
            name: "create view"
        }
    ],
    strict: true,

});
