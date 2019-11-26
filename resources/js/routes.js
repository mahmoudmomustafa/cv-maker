import './bootstrap'
import VueRouter from 'vue-router'
import Auth from "./views/Auth.vue";

const routes = [{
        path: '/auth',
        component: Auth
    },{
        path: '*',
        redirect:'/auth'
    }
]

let router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
})
export default router;