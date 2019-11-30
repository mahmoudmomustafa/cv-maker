import './bootstrap'
import VueRouter from 'vue-router'
import Auth from "./views/Auth.vue";
import Home from "./views/Home.vue";
import Create from "./views/Create.vue";

const routes = [{
    path: '/auth',
    component: Auth
}, {
    path: '*',
    redirect: '/auth'
}, {
    path: '/dashboard',
    component: Home
}, {
    path: '/create',
    component: Create
}]

let router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
})
export default router;
