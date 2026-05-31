export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',

  srcDir: 'app',

  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  nitro: {
    scanDirs: ['server']
  }
})