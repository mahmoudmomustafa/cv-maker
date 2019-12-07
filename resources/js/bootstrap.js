import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'tailwindcss/dist/tailwind.min.css'
import moment from 'moment'

window.Vue = Vue;
window.Vuex = Vuex;
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).calendar();
    }
})
window.$ = window.jQuery = jQuery;
window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
