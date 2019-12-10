import './bootstrap'

let store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        user:[],
        cvs:[]
    },
    mutations: {
        loginUser(state,res) {
            state.isLoggedIn = true;
        },
        logoutUser(state) {
            state.isLoggedIn = false
        },
    }
})

export default store
