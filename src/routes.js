import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Admin from "./components/Admin.vue";
import About from "./components/AboutUs.vue";
import Contact from "./components/Contact.vue";
import Delivery from "./components/Delivery.vue";
import History from "./components/History.vue";
import OrderingGuide from "./components/OrderingGuide.vue";

export const routes = [
  {
    path: "/",
    name: 'homeLink',
    components: {
      default: Home,
      "ordering-guide": OrderingGuide,
      "delivery": Delivery,
      "history": History
    }
  },
  {
    path: "/menu",
    name: 'menuLink',
    components: Menu
  },
  {
    path: "/admin",
    name: 'adminLink',
    components: Admin,
    beforeEnter: (to,from,next) => {
      alert('This area is for authorised users only, please login to continue.')
      next();
    }
  },
  {
    path: "/about",
    components: About,
    name: 'aboutLink',
    children: [
      { path: "/contact", name: 'contactLink', components: Contact},
      { path: "/history", name: 'historyLink', components: History},
      { path: "/delivery", name: 'deliveryLink', components: Delivery},
      { path: "/ordering-guide", name: 'orderingGuideLink', components: OrderingGuide}
    ]
  },
  {
    path: "*", redirect: '/'
  }
]
