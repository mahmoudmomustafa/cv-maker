import './bootstrap'
import router from "./routes"
import store from "./store"
import NavComp from "./components/NavComp.vue";

let app = new Vue({
    el: '#app',
    created() {
        if (localStorage.token) {
            axios.get('/init', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }, ).then(response => {
                store.commit('loginUser')
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
