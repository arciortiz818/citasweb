import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/pages/HomePage.vue"),
  },
  {
    path: "/citas",
    name: "Citas",
    component: () => import("../views/pages/CitasPage.vue"),
  },
  {
    path: "/mis-citas",
    name: "MisCitas",
    component: () => import("../views/pages/ListarCitasPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/pages/LoginPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach(async (to, from, next) => {
// let isLogged = await store.dispatch("isLogged");
// console.log(from.name + " para " + to.name);
// console.log(isLogged);
// if (isLogged === false) {
//   next("Login");
//   console.log("no login");
//   // if (from.name != "Login") {
//   //   next("Login");
//   // } else {
//   //   next();
//   // }
// } else {
//   console.log("login");
// }
// if (isLogged === true) {
//   store.dispatch("setLayout", "mainLayout");
//   next();
// } else {
//   store.dispatch("setLayout", "loginLayout");
//   if (from.name != "Login") {
//     next("/login");
//   } else {
//     next();
//   }
// }
// next();
// });

export default router;
