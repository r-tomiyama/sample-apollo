import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Characters from "@/pages/Characters.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "characters" }
  },
  {
    path: "/characters",
    name: "characters",
    component: Characters
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
