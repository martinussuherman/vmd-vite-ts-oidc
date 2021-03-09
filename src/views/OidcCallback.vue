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
      oidcSignInCallback: "oidcSignInCallback",
    }),
  },
})
export default class OidcCallback extends Vue {
  oidcSignInCallback!: VuexOidcStoreActions["oidcSignInCallback"];

  mounted() {
    this.oidcSignInCallback()
      .then((redirectPath) => {
        this.$router.push(redirectPath);
      })
      .catch((err) => {
        console.error(err);
        this.$router.push("/oidc-callback-error"); // Handle errors any way you want
      });
  }
}
</script>
