import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/about/AboutView.vue";
import ContactView from "../views/contact/ContactView.vue";
import ServicesView from "../views/services/ServicesView.vue";
import ShopView from "@/views/shop/ShopView.vue";
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
    path:"/shop",
    name:"shop",
    component:ShopView
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
  scrollBehavior(to, from, next) 
  {
    if(next)
    {
      return next;
    }
    else if(to.hash)
    {
      const el = document.getElementById(to.hash.slice(1));
      if (el) 
      {
        el.scrollIntoView({ behavior: 'smooth' });
        // next(false); // Prevent further navigation
      }
    }
    // next();
  }
});

export default router;
