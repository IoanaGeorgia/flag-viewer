import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../components/HomeView.vue'
// import CountryExtended from '../components/c'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomeView.vue"),
    },
    {
      path: "/:name",
      name: "about",
      component: () => import("../components/HomeView.vue"),
      props: true,
    },
  ],
});

export default router
