// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    "nuxt-tiptap-editor",
  ],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      pocketUrl: process.env.POCKET_URL,
    },
  },

  app: {
    keepalive: false,
    head: {
      title: "Admin Dashboard",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content: "Admin Dashboard for CMS Website",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-title", content: "Admin Dashboard" },

        { name: "application-name", content: "Admin Dashboard" },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Admin Dashboard" },
        {
          name: "twitter:description",
          content: "Admin Dashboard for CMS Website",
        },
        {
          name: "twitter:image",
          content: "https://ui.nuxt.com/illustrations/pro-dark.svg",
        },
        { name: "twitter:creator", content: "@dashboard" },
        { property: "og:type", content: "dashboard" },
        { property: "og:title", content: "Admin Dashboard" },
        {
          property: "og:description",
          content: "Admin Dashboard for CMS Website",
        },
        { property: "og:site_name", content: "Admin Dashboard" },
        {
          property: "og:url",
          content: "https://ui.nuxt.com/illustrations/pro-dark.svg",
        },
        {
          property: "og:image",
          content: "https://ui.nuxt.com/illustrations/pro-dark.svg",
        },
      ],

      viewport:
        "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, viewport-fit=cover",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
});