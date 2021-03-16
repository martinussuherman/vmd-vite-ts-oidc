import Vue from "vue";
import VueRouter, { NavigationGuard, Route, RouteConfig } from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import { configureVuexStore } from "@/store";

interface VuexOidcRouteMeta {
  isPublic?: boolean;
  isOidcCallback?: boolean;
  [propName: string]: unknown;
}

export type VuexOidcRouteConfig = RouteConfig & {
  meta?: VuexOidcRouteMeta;
};

export interface VuexOidcRoute extends Route {
  meta?: VuexOidcRouteMeta;
}

async function createOidcRoute(): Promise<NavigationGuard<Vue>> {
  return vuexOidcCreateRouterMiddleware(
    await configureVuexStore(),
    "oidcStore"
  );
}

export async function configureRouter(): Promise<VueRouter> {
  Vue.use(VueRouter);

  const routes: Array<VuexOidcRouteConfig> = [
    {
      path: "/",
      component: () => import("@/views/dashboard/Index.vue"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/views/dashboard/Dashboard.vue"),
        },
        // Pages
        {
          name: "User Profile",
          path: "pages/user",
          component: () => import("@/views/dashboard/pages/UserProfile.vue"),
        },
        {
          name: "Notifications",
          path: "components/notifications",
          component: () =>
            import("@/views/dashboard/component/Notifications.vue"),
        },
        {
          name: "Icons",
          path: "components/icons",
          component: () => import("@/views/dashboard/component/Icons.vue"),
        },
        {
          name: "Buttons",
          path: "components/buttons",
          component: () => import("@/views/dashboard/component/Buttons.vue"),
        },
        {
          name: "Typography",
          path: "components/typography",
          component: () => import("@/views/dashboard/component/Typography.vue"),
        },
        {
          name: "Regular Tables",
          path: "tables/regular-tables",
          component: () => import("@/views/dashboard/tables/RegularTables.vue"),
        },
        // Maps
        {
          name: "Google Maps",
          path: "maps/google-maps",
          component: () => import("@/views/dashboard/maps/GoogleMaps.vue"),
        },
        // Upgrade
        {
          name: "Upgrade",
          path: "upgrade",
          component: () => import("@/views/dashboard/Upgrade.vue"),
        },
        {
          path: "oidc-callback",
          name: "OidcCallback",
          component: () => import("@/views/OidcCallback.vue"),
          meta: {
            isOidcCallback: true,
          },
        },
        {
          path: "oidc-popup-callback",
          name: "oidcPopupCallback",
          component: () => import("@/views/OidcPopupCallback.vue"),
          meta: {
            isOidcCallback: true,
          },
        },
        {
          path: "oidc-callback-error",
          name: "oidcCallbackError",
          component: () => import("@/views/OidcCallbackError.vue"),
          meta: {
            isPublic: true,
          },
        },
      ],
    },
  ];

  const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes,
  });

  // router.beforeEach(await createOidcRoute());
  return router;
}
