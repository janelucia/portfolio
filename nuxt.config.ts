// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['daisyui'],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content'],
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  daisyui: {
    themes: ['forest', 'autumn'],
    darkTheme: 'forest',
  },
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
