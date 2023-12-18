import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import SimpleList from "./pages/SimpleList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/simple-list", name: "simple-list", component: SimpleList },
  ],
});

export default router;
