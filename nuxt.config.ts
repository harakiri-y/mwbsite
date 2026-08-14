// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Metea: your Apple Health data, in one sentence a day',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'You already have years of Apple Health data. Metea reads it and writes you one short briefing each morning: what changed, why, and what to do about it today. No extra wearable.' },
        { name: 'keywords', content: 'apple health app, hrv tracking, sleep analysis, stress and recovery, ai health insights, apple watch, iOS health app' },
        { name: 'author', content: 'Metea' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://metea-app.com/' },
        { property: 'og:title', content: 'Metea: your Apple Health data, in one sentence a day' },
        { property: 'og:description', content: 'Years of health data, one short briefing each morning: what changed, why, and what to do today. Reads Apple Health. No extra wearable.' },
        { property: 'og:image', content: 'https://metea-app.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Metea' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://metea-app.com/' },
        { name: 'twitter:title', content: 'Metea: your Apple Health data, in one sentence a day' },
        { name: 'twitter:description', content: 'Years of health data, one short briefing each morning: what changed, why, and what to do today. Reads Apple Health. No extra wearable.' },
        { name: 'twitter:image', content: 'https://metea-app.com/og-image.png' },

        // App specific
        { name: 'apple-itunes-app', content: 'app-id=6756438562' },
        { name: 'application-name', content: 'Metea' },
        { name: 'apple-mobile-web-app-title', content: 'Metea' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'theme-color', content: '#0B0D0C' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'msapplication-TileColor', content: '#0B0D0C' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },

        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;900&family=Spectral:ital,wght@0,400;0,500;1,400&display=swap' },

        // Canonical
        { rel: 'canonical', href: 'https://metea-app.com/' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: []
})
