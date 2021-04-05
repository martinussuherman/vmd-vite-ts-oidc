import Vue from "vue";
import Vuex, { Store } from "vuex";
import { configureVuexOidc } from "./oidc";

export interface SidebarState {
  barColor: string;
  barImage?: string;
  drawer: boolean | null;
}

export async function configureVuexStore(): Promise<Store<SidebarState>> {
  Vue.use(Vuex);

  const initialState: SidebarState = {
    barColor: "rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)",
    barImage: `${import.meta.env.BASE_URL}/pexels-brady-knoll-5187131.jpg`,
    drawer: null,
  };

  const store: Store<SidebarState> = new Vuex.Store({
    state: initialState,
    mutations: {
      setBarImage(state: SidebarState, payload?: string): void {
        state.barImage = payload;
      },
      setDrawer(state: SidebarState, payload: boolean | null): void {
        state.drawer = payload;
      },
    },
    actions: {},
    modules: {
      oidcStore: await configureVuexOidc(),
    },
  });

  return store;
}
