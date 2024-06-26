// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    define: {
      global: {},
    },
  },
  modules: ['shadcn-nuxt'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui',
  },
});
