<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";
import { VuexOidcStoreActions } from "vuex-oidc";

@Component({
  methods: {
    ...mapActions("oidcStore", {
      oidcSignInPopupCallback: "oidcSignInPopupCallback",
    }),
  },
})
export default class OidcPopupCallback extends Vue {
  oidcSignInPopupCallback!: VuexOidcStoreActions["oidcSignInPopupCallback"];

  mounted() {
    this.oidcSignInPopupCallback()
      .then((user) => {
        console.log(user?.profile.name);
      })
      .catch((err) => {
        console.error(err);
        this.$router.push("/oidc-callback-error"); // Handle errors any way you want
      });
  }
}
</script>
