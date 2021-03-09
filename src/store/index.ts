import Vue from "vue";
import Vuex from "vuex";
import { configureVuexOidc } from "./oidc";

export async function configureVuexStore() {
  Vue.use(Vuex);

  const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      oidcStore: await configureVuexOidc(),
    },
  });

  return store;
}
