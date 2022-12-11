import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import addPizza from "../views/addPizza.vue";
import login from "../views/login.vue";
import cart from "../views/Cart.vue";


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
  } ,
  {
    path: "/login",
    name: "login",
    component: login,
  }  ,
  {
    path: "/cart",
    name: "cart",
    component: cart,
  } 
];

const router = createRouter({ history, routes });
export default router;
