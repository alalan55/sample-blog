import { createRouter, createWebHistory } from "vue-router";
import LayoutTemplate from "@/components/templates/LayoutTemplate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutTemplate,
      children: [
        {
          path: "",
          component: () => import("../views/HomeView.vue"),
          name: "home",
        },
        {
          path: "post/:slug",
          component: () => import("../views/PostView.vue"),
          name: "post",
        },
      ],
    },
    {
      path: "/auth",
      component: () => import("../views/AuthView.vue"),
      name: "auth",
    },
    {
      path: "/register",
      component: () => import("../views/RegisterView.vue"),
      name: "register",
    },
  ],
});

export default router;
