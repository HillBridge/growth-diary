import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import SimpleList from "./pages/SimpleList.vue";
import TestChats from "./pages/TestChats.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/simple-list", name: "simple-list", component: SimpleList },
    { path: "/test-chats", name: "test-chats", component: TestChats },
  ],
});

export default router;
