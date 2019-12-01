import Vue from 'vue'
import axios from 'axios'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'tailwindcss/dist/tailwind.min.css'

window.Vue = Vue;
Vue.use(VueRouter)

window.$ = window.jQuery = jQuery;
window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
