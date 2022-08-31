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
          path: "post/:id",
          component: () => import("../views/PostView.vue"),
          name: "post",
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
