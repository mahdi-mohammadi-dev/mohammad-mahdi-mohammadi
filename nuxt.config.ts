import tailwindcss from '@tailwindcss/vite'

const siteUrl = 'https://your-domain.com'
const siteTitle = 'محمد مهدی محمدی | Frontend Engineer | Vue & Nuxt'
const siteDescription =
  'Mohammad Mahdi Mohammadi — Frontend Engineer specializing in Vue.js and Nuxt.js. 3+ years building scalable, performant production applications.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'dark',
      },
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: 'Mohammad Mahdi Mohammadi' },
        { name: 'theme-color', content: '#090A0C' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Mohammad Mahdi Mohammadi' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
