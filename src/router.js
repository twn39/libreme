import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.js";
import SideBar from "./components/SideBar";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        sidebar: SideBar
      }
    }
  ]
});
