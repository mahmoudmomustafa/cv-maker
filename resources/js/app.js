import './bootstrap'
import router from "./routes"
import store from "./store"

let app = new Vue({
    el: '#app',
    created() {
        if (localStorage.token) {
            axios.get('/api/init', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }, ).then(response => {
                store.commit('loginUser', response.data)
            }).catch(error => {
                if (error.response.status === 401 || error.response.status === 403) {
                    store.commit('logoutUser')
                    localStorage.setItem('token', '')
                    this.$router.push({
                        name: 'auth'
                    })
                }
            });
        }
    },
    router,
    store
});
