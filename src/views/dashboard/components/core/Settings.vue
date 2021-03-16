<template>
  <div id="settings-wrapper">
    <v-card
      id="settings"
      class="py-2 px-4"
      color="rgba(0, 0, 0, .3)"
      dark
      flat
      link
      min-width="100"
      style="position: fixed; top: 115px; right: -35px; border-radius: 8px"
    >
      <v-icon large> mdi-cog </v-icon>
    </v-card>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#settings"
      bottom
      content-class="v-settings"
      left
      nudge-left="8"
      offset-x
      origin="top right"
      transition="scale-transition"
    >
      <v-card class="text-center mb-0" width="300">
        <v-card-text>
          <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>

          <v-item-group v-model="color">
            <v-item v-for="color in colors" :key="color" :value="color">
              <template v-slot="{ active, toggle }">
                <v-avatar
                  :class="active && 'v-settings__item--active'"
                  :color="color"
                  class="v-settings__item"
                  size="25"
                  @click="toggle"
                />
              </template>
            </v-item>
          </v-item-group>

          <v-divider class="my-4 secondary" />

          <v-row align="center" no-gutters>
            <v-col cols="auto"> Dark Mode </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="$vuetify.theme.dark"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <v-row align="center" no-gutters>
            <v-col cols="auto"> Sidebar Image </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="showImg"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <strong class="mb-3 d-inline-block">IMAGES</strong>

          <v-item-group
            v-model="image"
            class="d-flex justify-space-between mb-3"
          >
            <v-item
              v-for="image in images"
              :key="image"
              :value="image"
              class="mx-1"
            >
              <template v-slot="{ active, toggle }">
                <v-sheet
                  :class="active && 'v-settings__item--active'"
                  class="d-inline-block v-settings__item"
                  @click="toggle"
                >
                  <v-img :src="image" height="100" width="50" />
                </v-sheet>
              </template>
            </v-item>
          </v-item-group>

          <v-btn
            block
            class="mb-3"
            color="success"
            href="https://www.creative-tim.com/product/vuetify-material-dashboard"
            default
            rel="noopener"
            target="_blank"
          >
            Free Download
          </v-btn>

          <v-btn
            block
            class="mb-3"
            color="grey darken-1"
            dark
            href="https://vuetifyjs.com/components/api-explorer"
            default
            rel="noopener"
            target="_blank"
          >
            Documentation
          </v-btn>

          <div class="my-12" />

          <div>
            <strong class="mb-3 d-inline-block">THANK YOU FOR SHARING!</strong>
          </div>

          <v-btn class="ma-1" color="#55acee" dark default rounded>
            <v-icon>mdi-twitter</v-icon>
            - 45
          </v-btn>

          <v-btn class="ma-1" color="#3b5998" dark default rounded>
            <v-icon>mdi-facebook</v-icon>
            - 50
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Mixins
import Proxyable from "vuetify/lib/mixins/proxyable";
import { mapMutations, mapState } from "vuex";

export default {
  name: "DashboardCoreSettings",

  mixins: [Proxyable],

  data: () => ({
    color: "#E91E63",
    colors: ["#9C27b0", "#00CAE3", "#4CAF50", "#ff9800", "#E91E63", "#FF5252"],
    image: "/pexels-brady-knoll-5187131.jpg",

    images: [
      // Photo by Brady Knoll from Pexels - https://www.pexels.com/photo/narrow-pathway-through-coniferous-trees-in-forest-5187131/
      "/pexels-brady-knoll-5187131.jpg",
      // Photo by Alex Andrews from Pexels - https://www.pexels.com/photo/photo-of-deep-sky-object-816608/
      "/pexels-alex-andrews-816608.jpg",
      // Photo by Zhaocan Li from Pexels - https://www.pexels.com/photo/snow-covered-mountain-1755243/
      "/pexels-zhaocan-li-1755243.jpg",
      // Photo by Antonio Dillard from Pexels - https://www.pexels.com/photo/exciting-art-composition-on-yellow-background-4462780/
      "/pexels-antonio-dillard-4462780.jpg",
    ],
    menu: false,
    showImg: true,
  }),

  computed: {
    ...mapState(["barImage"]),
  },

  watch: {
    color(val) {
      this.$vuetify.theme.themes.light.primary = val;
      this.$vuetify.theme.themes.dark.primary = val;
    },
    showImg(val) {
      if (val) {
        this.setBarImage(this.image);
      } else {
        this.setBarImage("/blank.png");
      }
    },
    image(val) {
      this.setBarImage(val);
      this.showImg = true;
    },
  },

  methods: {
    ...mapMutations({
      setBarImage: "setBarImage",
    }),
  },
};
</script>

<style lang="sass">
.v-settings
  .v-item-group > *
    cursor: pointer

  &__item
    border-width: 3px
    border-style: solid
    border-color: transparent !important

    &--active
      border-color: #00cae3 !important
</style>
