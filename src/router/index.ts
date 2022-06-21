import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("~/pages/index.vue"),
      children: [
        { path: "data/", component: () => import("~/pages/data.vue") },
      ],
    },
  ],
  scrollBehavior: (to, from, next) => ({ top: 0, behaviour: "smooth" }),
});
