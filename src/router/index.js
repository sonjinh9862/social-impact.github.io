import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/Home.vue"),
  },
  {
    path: "/ncs",
    name: "NcsController",
    component: () => import("@/view/NCS/NcsController.vue"),
    children: [
      {
        path: "",
        name: "NcsedEmpty",
        component: () => import("@/view/NCS/NcsController.vue"),
      },
      {
        path: "benefits",
        name: "NcsedBenefits",
        component: () => import("@/view/NCS/NcsedBenefits.vue"),
      },
      {
        path: "map",
        name: "NcsedMap",
        component: () => import("@/view/NCS/NcsedMap.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
