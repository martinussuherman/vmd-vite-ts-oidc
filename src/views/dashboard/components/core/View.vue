<template>
  <v-main>
    <router-view />

    <dashboard-core-footer />
  </v-main>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
  name: "DashboardCoreView",

  components: {
    DashboardCoreFooter: () => import("./Footer"),
  },
};
</script>
