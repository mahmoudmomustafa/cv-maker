import './bootstrap'

let store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        user:[]
    },
    mutations: {
        loginUser(state,res) {
            state.isLoggedIn = true;
            state.user = res
        },
        logoutUser(state) {
            state.isLoggedIn = false
            state.user = []
        },
    }
})

export default store
