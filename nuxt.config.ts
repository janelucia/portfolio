// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxt/image'],
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  css: ['~/assets/css/app.css'],
  runtimeConfig: {
    githubPat: '', // can be overridden by NUXT_GITHUB_PAT environment variable
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
