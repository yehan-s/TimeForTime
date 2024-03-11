import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [] as RouteRecordRaw[]; // 1. Define the routes array

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
      behavior: "smooth",
    };
  },
});
