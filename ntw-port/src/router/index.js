import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import addPizza from "../views/addPizza.vue";


//const history = createWebHistory();
const history = createWebHashHistory('/kw3/');
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  } ,
  {
    path: "/addPizza",
    name: "addPizza",
    component: addPizza,
  } 
];

const router = createRouter({ history, routes });
export default router;
