import { ViteSSG } from "vite-ssg";
import VueScrollTo from "vue-scrollto";

import App from "./App.vue";
import HomeView from "./views/HomeView.vue";

export const createApp = ViteSSG(
  App,
  {
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/",
      },
    ],
  },
  (ctx) => {
    ctx.app.use(VueScrollTo);
  }
);
