import './bootstrap'

let store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    },
    mutations: {
        loginUser(state) {
            state.isLoggedIn = true
        },
        logoutUser(state) {
            state.isLoggedIn = false
        },
    }
})

export default store