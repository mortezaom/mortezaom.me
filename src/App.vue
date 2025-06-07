<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import Footer from "./components/Footer.vue";
import LeftSide from "./components/SideBars/LeftSide.vue";
import RightSide from "./components/SideBars/RightSide.vue";
import { onMounted, ref } from "vue";
import Splash from "./components/Splash.vue";
import { useHead } from "@vueuse/head";

const show = ref(true);

onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 2000);
});

useHead({
  title: "MortezaOM | Dev",
  meta: [
    {
      name: `description`,
      content: `I am a software engineer who creates apps/websites. Currently focused on learning and working as a freelancer.`,
    },
    {
      name: "msapplication-TileColor",
      content: "#ffffff",
    },
    {
      name: "msapplication-TileImage",
      content: "/ms-icon-144x144.png",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    { property: "og:title", content: "Morteza Omar Mohammadi" },
    { property: "og:site_name", content: "MortezaOM | Dev" },
    { property: "og:url", content: "https://mortezaom.me" },
    {
      property: "og:description",
      content:
        "I am a software engineer who creates apps/websites. Currently focused on learning and working as a freelancer.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://mortezaom.me/og.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/png" },
    { property: "twitter:creator", content: "@mortezaaom" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "Morteza Omar Mohammadi" },
    {
      property: "twitter:description",
      content:
        "I am a software engineer who creates apps/websites. Currently focused on learning and working as a freelancer.",
    },
    { property: "twitter:image", content: "https://mortezaom.me/og.png" },
  ],

  link: [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      href: "/favicon-48x48.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/manifest.json" },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/apple-icon-72x72.png",
    },
  ],
});
</script>

<template>
  <Splash :show="show" />
  <NavBar />
  <RouterView />
  <FooterBar />
  <Footer />
  <LeftSide />
  <RightSide />
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/assets/reset.min.css";

#app {
  display: flex !important;
  flex-direction: column;
  align-items: center;
}

body {
  font-family: var(--font-main), sans-serif;
  background-color: var(--color-primary-dark);
  color: var(--color-text-white);
  -ms-overflow-style: auto;
  scrollbar-color: var(--color-transparent) var(--color-light-background);
  scrollbar-width: thin !important;

  *::selection {
    background-color: var(--color-selection-bg);
    color: var(--color-selection-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-light-background);
    border: 3px solid var(--color-primary-dark);
    border-radius: var(--mo-d-border-radius);
  }

  &::-webkit-scrollbar-corner {
    background-color: var(--color-light-background);
    border: 3px solid var(--color-primary-dark);
    border-radius: var(--mo-d-border-radius);
  }

  &::-webkit-scrollbar {
    width: 12px;
  }
}
</style>
