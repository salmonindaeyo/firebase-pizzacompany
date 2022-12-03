import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


//const history = createWebHistory();
const history = createWebHashHistory('/kw3/');
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  } 
];

const router = createRouter({ history, routes });
export default router;
