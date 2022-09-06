import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../views/ItemList.vue";
import VueAbout from "../views/VueAbout.vue";
import ItemDetails from "../views/ItemDetails.vue";

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/about",
    name: "about",
    component: VueAbout,
  },
  {
    path: "/item/:id",
    name: "ItemDetails",
    props: true,
    component: ItemDetails,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
