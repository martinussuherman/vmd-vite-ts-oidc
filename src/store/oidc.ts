import {
  vuexOidcCreateStoreModule,
  VuexOidcStoreSettings,
  VuexOidcStoreListeners,
} from "vuex-oidc";
import { getRuntimeOidcConfig } from "@/config/oidc";

// NOTE: If you want to customize how tokens are stored you can use WebStorageStateStore from oidc-client (see bellow)
// Default storage is window.localStorage
// import { WebStorageStateStore } from 'oidc-client'

// Optional OIDC store settings
const storeSettings: VuexOidcStoreSettings = {
  namespaced: true,
  dispatchEventsOnWindow: true,
};

// Optional OIDC event listeners
const listeners: VuexOidcStoreListeners = {
  userLoaded: (user) => window.console.log("OIDC user is loaded:", user),
  userUnloaded: () => window.console.log("OIDC user is unloaded"),
  accessTokenExpiring: () => window.console.log("Access token will expire"),
  accessTokenExpired: () => window.console.log("Access token did expire"),
  silentRenewError: () => window.console.log("OIDC user is unloaded"),
  userSignedOut: () => window.console.log("OIDC user is signed out"),
  oidcError: (payload) => window.console.log("OIDC error", payload),
  automaticSilentRenewError: (payload) =>
    window.console.log("OIDC automaticSilentRenewError", payload),
};

export async function configureVuexOidc() {
  const oidcStore = vuexOidcCreateStoreModule(
    await getRuntimeOidcConfig(),
    storeSettings,
    listeners
  );

  return oidcStore;
}
