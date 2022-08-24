import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Project from "../views/Project.vue"
import Contact from "../views/Contact.vue"

//const history = createWebHistory();
const history = createWebHashHistory('/kw3/');
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  } ,
  {
    path: "/About",
    name: "About",
    component: About,
  } ,
  {
    path: "/Project",
    name: "Project",
    component: Project,
  } ,
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  }
];

const router = createRouter({ history, routes });
export default router;
