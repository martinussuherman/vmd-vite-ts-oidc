import { VuexOidcClientSettings } from "vuex-oidc";

export async function getRuntimeOidcConfig() {
  const runtimeConfig = await fetch("./oidc.json");
  const config = await runtimeConfig.json();

  const clientSetting: VuexOidcClientSettings = {
    authority: config.authority,
    clientId: config.clientId,
    responseType: config.responseType,
    scope: config.scope,
    redirectUri: config.redirectUri,
    popupRedirectUri: config.popupRedirectUri,
    automaticSilentRenew: config.automaticSilentRenew,
    automaticSilentSignin: config.automaticSilentSignin,
    silentRedirectUri: config.silentRedirectUri,
    postLogoutRedirectUri: config.postLogoutRedirectUri,
  };

  window.console.log(clientSetting);
  return clientSetting;
}
