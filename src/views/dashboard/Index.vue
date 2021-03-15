<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <dashboard-core-settings />
  </v-app>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: "DashboardIndex",

  components: {
    DashboardCoreAppBar: () => import("./components/core/AppBar.vue"),
    DashboardCoreDrawer: () => import("./components/core/Drawer.vue"),
    DashboardCoreSettings: () => import("./components/core/Settings.vue"),
    DashboardCoreView: () => import("./components/core/View.vue"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
