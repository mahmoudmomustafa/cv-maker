import './bootstrap'
import './app'
import VueRouter from 'vue-router'
import Auth from "./views/Auth.vue";
import Home from "./views/Home.vue";
import Create from "./views/Create.vue";

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
    path: '/create',
    component: Create,
    meta: {
        requiresAuth: true
    }
}]

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
