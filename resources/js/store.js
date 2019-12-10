import './bootstrap'

let store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        user: [],
        cvs: []
    },
    mutations: {
        loginUser(state, res) {
            state.isLoggedIn = true;
            state.user = res
        },
        logoutUser(state) {
            state.isLoggedIn = false;
            state.user = [],
            state.cvs = []
        },
        getCVS(state, cvs) {
            state.cvs = cvs
        }
    },
    actions: {
        // logout user
        AUTH_LOGOUT: ({
            commit,
            dispatch
        }) => {
            return new Promise((resolve, reject) => {
                commit("logoutUser");
                localStorage.removeItem('token') // clear your user's token from localstorage
                // delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
        GET_USER: ({
            commit,
            dispatch
        }) => {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/init", {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    })
                    .then(response => {
                        commit('loginUser', response.data)
                    })
                    .catch(error => {
                        if (error.response.status === 401 || error.response.status === 403) {
                            commit('logoutUser')
                            localStorage.setItem('token', '')
                            this.$router.push({
                                name: 'auth'
                            })
                        }
                    });
                resolve()
            })
        },
        GET_CVS: ({
            commit,
            dispatch
        }) => {
            return new Promise((resolve, reject) => {
                axios
                    .get("/cvs")
                    .then(response => {
                        commit('getCVS', response.data)
                    })
                    .catch(error => {

                    });
                resolve()
            })
        },
    },
    getters: {
        cvs: state => {
            return state.cvs
        },
        user: state => {
            return state.user
        }
    }
})

export default store
