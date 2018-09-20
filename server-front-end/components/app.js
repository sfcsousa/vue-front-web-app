"use strict";
//import routes from './Routes/Routes';

Vue.prototype.$http = window.axios;

const router = new VueRouter({
    // mode: 'history',
    // linkActiveClass: "active",
    // hashbang: true,
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
});

let bus = new Vue();
window.bus = bus;

const store = new Vuex.Store(storeConfig);


let app = new Vue({
    el: '#app',
    router,
    store,
    data: {}
});
