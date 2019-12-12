import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jQuery from 'jquery'
import VueRouter from 'vue-router'
import 'tailwindcss/dist/tailwind.min.css'
import moment from 'moment'
import CKEditor from '@ckeditor/ckeditor5-vue';

window.Vue = Vue;
window.Vuex = Vuex;
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).calendar();
    }
})
Vue.use( CKEditor );
window.$ = window.jQuery = jQuery;
window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
const instance = axios.create({
    baseURL: '/api'
  })
  
  // before a request is made start the nprogress
  instance.interceptors.request.use(config => {
    NProgress.start()
    return config
  })
  
  // before a response is returned stop nprogress
  instance.interceptors.response.use(response => {
    NProgress.done()
    return response
  })