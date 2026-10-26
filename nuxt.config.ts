// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["@/assets/css/main.css"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/assets/favicon.svg",
        },
      ],
    },
  },
});
