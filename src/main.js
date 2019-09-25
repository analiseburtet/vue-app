import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Admin from "./components/Admin.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/menu",
    component: Menu
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "*", redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
