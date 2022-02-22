import { ViteSSG } from "vite-ssg";
import VueScrollTo from "vue-scrollto";

import App from "./App.vue";
import HomeView from "./views/HomeView.vue";

// const app = createApp(App);
// const createApp = ViteSSG(
//   App,
//   {
//     routes: [
//       {
//         path: "/",
//         name: "home",
//         component: HomeView,
//       },
//       {
//         path: "/:pathMatch(.*)*",
//         redirect: "/",
//       },
//     ],
//   },
//   ({ app, router, initialState }) => {
//     app.use(router);
//     app.use(VueScrollTo);

//     app.mount("#app");
//   }
// );

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
