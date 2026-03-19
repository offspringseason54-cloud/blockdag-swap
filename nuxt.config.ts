// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/img/favicon.ico' 
        }
      ]
    }
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  pages: true,
  css: [
    "/assets/css/main.css",
    "/assets/css/reset.css",
    "/assets/css/form.css",
    "/assets/css/app.css",
    // "/assets/css/main2.css",
    // "/assets/css/2.6%20animate.css.css",
    "/assets/css/walletpage.css",
    // "/assets/css/bootstrap.min(1).css",
    "/assets/css/app-755185d7.css",
    "/assets/css/app-939de237.css",
    "/assets/css/main-dde0d8dc.css"
  ],
});
