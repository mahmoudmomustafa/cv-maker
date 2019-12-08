import './bootstrap'
// import './app'
import store from './store'
import VueRouter from 'vue-router'
const Auth = () => import('./views/Auth.vue')
const Home = () => import('./views/Home.vue')
const Cvs = () => import('./views/CVS.vue')
const Create = () => import('./views/Create.vue')
const Show = () => import('./views/Show.vue')

const routes = [{
        path: '/auth',
        name: "auth",
        component: Auth
    }, {
        path: '*',
        redirect: '/dashboard',
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
    }, {
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
        name: "create",
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
    // redirect to login page
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        next('auth')
        return
    }
    // if logged in redirect to dashboard
    if (to.path === '/auth' && store.state.isLoggedIn) {
        next('dashboard')
        return
    }
    next()
});

export default router;
