// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  // ─── Google Fonts ────────────────────────────────────────────────
  googleFonts: {
    families: {
      'Bebas Neue': [400],
      'Barlow Condensed': [300, 400, 500, 600, 700, 800],
      'Inter': [300, 400, 500, 600, 700],
      'Space Mono': [400, 700],
    },
    display: 'swap',
    preload: true,
    prefetch: true,
  },

  // ─── Tailwind ────────────────────────────────────────────────────
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  // ─── App Head ────────────────────────────────────────────────────
  app: {
    head: {
      title: 'Iron Gym — Treine com quem leva a sério',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Iron Gym: academia premium com infraestrutura de alto desempenho, instrutores especializados e metodologia exclusiva. Venha treinar com quem leva a sério.',
        },
        { property: 'og:title', content: 'Iron Gym' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // ─── Runtime Config ──────────────────────────────────────────────
  runtimeConfig: {
    public: {
      gsapVersion: '3',
    },
  },
})