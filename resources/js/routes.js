import './bootstrap'
import './app'
import VueRouter from 'vue-router'
import Auth from "./views/Auth.vue";
import Home from "./views/Home.vue";
import Cvs from "./views/CVS.vue";
import Create from "./views/Create.vue";
import Show from "./views/Show.vue";
// import Preview from "./views/Preview.vue";

const routes = [{
        path: '/auth',
        name: "auth",
        component: Auth
    }, {
        path: '*',
        redirect: '/dashboard'
    }, {
        path: '/dashboard',
        name: "dashboard",
        component: Home,
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/cvs',
        component: Cvs,
        name: "cvs",
        meta: {
            requiresAuth: true
        }
    },  {
        path: '/cvs/:cvId/edit',
        name: 'cv',
        component: Show,
        meta: {
            requiresAuth: true
        },
    },
    {
        path: '/cvs/create',
        component: Create,
        name:"create",
        meta: {
            requiresAuth: true
        },
    }
]

let router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    const currentUser = app.user;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (!currentUser && requiresAuth) next("auth");
    else if (currentUser && !requiresAuth) next("dashboard");
    else next();
});

export default router;
