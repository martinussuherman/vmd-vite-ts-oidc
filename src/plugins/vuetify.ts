import Vue from "vue";
import Vuetify from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";
import { VuetifyThemeVariant } from "vuetify/types/services/theme";
// import i18n from "@/i18n";
// import "@/sass/overrides.sass";

Vue.use(Vuetify);

const theme: Partial<VuetifyThemeVariant> = {
  primary: "#4CAF50",
  secondary: "#9C27b0",
  accent: "#9C27b0",
  info: "#00CAE3",
  error: "ff0000",
  success: "00ff00",
  warning: "ffdd55",
};

export default new Vuetify({
  // lang: {
  //   t: (key, ...params) => i18n.t(key, params) as string,
  // },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
  directives: {
    Ripple,
  },
});
