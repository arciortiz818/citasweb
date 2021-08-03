import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToastr from "vue-toastr";
import "vue-step-progress/dist/main.css";
Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./app.scss";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueToastr, {
  defaultPosition: "toast-bottom-right",
  defaultCloseOnHover: false,
  defaultClassNames: ["animated", "zoomInUp"],
  clickClose: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
