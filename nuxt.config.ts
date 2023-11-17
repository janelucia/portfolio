// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content'],
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  css: ['~/assets/css/app.css'],
  content: {
    highlight: {
      theme: 'nord',
      preload: [
        'ts',
        'js',
        'json',
        'html',
        'css',
        'scss',
        'md',
        'markdown',
        'vue',
      ],
    },
  },
});
