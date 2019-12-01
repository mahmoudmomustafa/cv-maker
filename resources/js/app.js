import './bootstrap'
import router from "./routes"

let app = new Vue({
    el: '#app',
    created() {
        axios
            .get("/init")
            .then(response => {
                this.user = response.data
            })
            .catch(error => {
                this.$router.replace("auth");
            });
    },
    data() {
        return {
            user: {}
        }
    },
    router
});
