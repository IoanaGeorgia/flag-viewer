import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomeView.vue"),
    },
    {
      path: "/countries",
      name: "countries",
      component: () => import("../components/Countries.vue"),
    },
    {
      path: "/countries/:name",
      name: "about",
      component: () => import("../components/Countries.vue"),
      props: true,
    },
    {
      path: "/mission",
      name: "mission",
      component: () => import("../components/Mission.vue"),
    },
  ],
});

export default router;
