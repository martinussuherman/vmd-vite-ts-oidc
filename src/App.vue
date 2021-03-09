<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-book</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About (Protected Page)</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="isAuthenticated" @click.prevent="signOut">
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign out - {{ userEmail }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-switch v-model="$vuetify.theme.dark" label="Light/Dark">
              </v-switch>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import { VuexOidcStoreActions } from "vuex-oidc";
import { User } from "oidc-client";
import { OidcCustomEventInit } from "@/helper/oidc";
import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VMain,
  VIcon,
  VImg,
  VSpacer,
  VBtn,
  VNavigationDrawer,
  VList,
  VListItemGroup,
  VListItem,
  VListItemTitle,
  VListItemIcon,
  VSwitch,
} from "vuetify/lib";

/** https://stackoverflow.com/questions/60099323/how-to-use-mapactions-with-vue-typescript-class-component */
@Component({
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VMain,
    VIcon,
    VImg,
    VSpacer,
    VBtn,
    VNavigationDrawer,
    VList,
    VListItemGroup,
    VListItem,
    VListItemTitle,
    VListItemIcon,
    VSwitch,
  },
  computed: {
    ...mapGetters("oidcStore", {}),
  },
  methods: {
    ...mapActions("oidcStore", {
      authenticateOidcPopup: "authenticateOidcPopup",
      removeOidcUser: "removeOidcUser",
      signOutOidc: "signOutOidc",
    }),
  },
})
export default class App extends Vue {
  drawerState = false;
  isAuthenticated = false;
  userEmail = "";

  authenticateOidcPopup!: VuexOidcStoreActions["authenticateOidcPopup"];

  /** removeOidcUser in vuex-oidc returns void  */
  // signOutOidc!: VuexOidcStoreActions['signOutOidc'];
  signOutOidc!: (payload?: unknown) => Promise<void>;

  /** removeOidcUser in vuex-oidc returns void  */
  //  removeOidcUser!: VuexOidcStoreActions['removeOidcUser'];
  removeOidcUser!: () => Promise<void>;

  signOut(): void {
    this.signOutOidc().then(() => {
      this.$router.push("/");
    });
  }

  toggleDrawer(): void {
    this.drawerState = !this.drawerState;
  }

  userLoaded(data: OidcCustomEventInit<User>): void {
    this.isAuthenticated = data.detail !== null && !data.detail?.expired;
    this.userEmail = data.detail?.profile.email ?? "";
    const dateTime = new Date();
    window.console.log(
      `Authenticated: ${this.isAuthenticated} - email: ${this.userEmail} at ${dateTime}`
    );
  }

  mounted(): void {
    window.addEventListener("vuexoidc:userLoaded", this.userLoaded);
  }
}
</script>
