// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content'],
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
