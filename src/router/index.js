import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/about/AboutView.vue";
import ContactView from "../views/contact/ContactView.vue";
import ServicesView from "../views/services/ServicesView.vue";
import GalleryView from "@/views/gallery/GalleryView.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component:AboutView,
  },
  {
    path: "/service",
    name: "service",
    component:ServicesView,
  },
  {
    path:"/contact",
    name:"contact",
    component:ContactView,
  },
  {
    path:"/gallery",
    name:"gallery",
    component:GalleryView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0, behavior: "smooth" };
  }
});

export default router;
