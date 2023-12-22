import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Add more routes here
];

const router = new VueRouter({
  routes,
});

export default router;
