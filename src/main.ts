import Vue from "vue";
import App from "@/App.vue";
import { configureRouter } from "@/router";
import { configureVuexStore } from "@/store";
import vuetify from "@/plugins/vuetify";

(async function () {
  Vue.config.productionTip = false;
  const store = await configureVuexStore();
  const router = await configureRouter();

  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
})();
