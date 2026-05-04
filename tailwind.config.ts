import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      // ─── TYPOGRAPHY ───────────────────────────────────────────────
      fontFamily: {
        // Display — impacto, headlines, hero
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        // Heading — títulos de seção, cards
        heading: ['"Barlow Condensed"', 'sans-serif'],
        // Body — parágrafos, labels
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        // Mono / accent — números, stats, tags técnicas
        mono: ['"Space Mono"', 'monospace'],
      },

      fontSize: {
        // Escala fluida customizada
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.5rem' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl':['1.5rem',   { lineHeight: '2rem' }],
        '3xl':['1.875rem', { lineHeight: '2.25rem' }],
        '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl':['3rem',     { lineHeight: '1.1' }],
        '6xl':['3.75rem',  { lineHeight: '1.05' }],
        '7xl':['4.5rem',   { lineHeight: '1' }],
        '8xl':['6rem',     { lineHeight: '1' }],
        '9xl':['8rem',     { lineHeight: '0.95' }],
        'hero':['clamp(5rem,14vw,12rem)', { lineHeight: '0.9' }],
      },

      // ─── COLOR PALETTE ────────────────────────────────────────────
      colors: {
        // Neutros / base
        black:    '#080808',
        'off-black': '#0d0d0d',
        'dark':   '#111111',
        'dark-2': '#181818',
        'dark-3': '#222222',
        'mid':    '#2e2e2e',
        'muted':  '#555555',
        'subtle': '#888888',
        'light':  '#cccccc',
        'off-white': '#f0ede8',
        white:    '#ffffff',

        // Primária — Electric Lime (energia, performance)
        primary: {
          DEFAULT: '#c8f53d',   // lime elétrico
          dim:     '#a8d130',
          glow:    '#d8ff5a',
          dark:    '#7aa01c',
          muted:   '#8faa2a66',
        },

        // Acento — Amber / Fogo (força, intensidade)
        accent: {
          DEFAULT: '#ff6b1a',   // laranja fogo
          dim:     '#cc5614',
          glow:    '#ff8c42',
          muted:   '#ff6b1a33',
        },

        // Destaque — Branco Gelo (luxo, contraste)
        highlight: {
          DEFAULT: '#f0ede8',
          warm:    '#e8e0d0',
        },

        // Estado
        success: '#22c55e',
        warning: '#eab308',
        error:   '#ef4444',
      },

      // ─── SPACING ──────────────────────────────────────────────────
      spacing: {
        '4.5':  '1.125rem',
        '13':   '3.25rem',
        '15':   '3.75rem',
        '18':   '4.5rem',
        '22':   '5.5rem',
        '26':   '6.5rem',
        '30':   '7.5rem',
        '34':   '8.5rem',
        '88':   '22rem',
        '100':  '25rem',
        '112':  '28rem',
        '128':  '32rem',
        '144':  '36rem',
      },

      // ─── BORDERS & RADIUS ─────────────────────────────────────────
      borderRadius: {
        'xs':  '2px',
        'sm':  '4px',
        DEFAULT:'6px',
        'md':  '8px',
        'lg':  '12px',
        'xl':  '16px',
        '2xl': '24px',
        '3xl': '32px',
        'pill':'9999px',
      },

      // ─── SHADOWS & GLOW ───────────────────────────────────────────
      boxShadow: {
        'glow-primary': '0 0 20px 4px rgba(200,245,61,0.35)',
        'glow-primary-lg': '0 0 60px 10px rgba(200,245,61,0.2)',
        'glow-accent':  '0 0 20px 4px rgba(255,107,26,0.35)',
        'glow-white':   '0 0 20px 4px rgba(255,255,255,0.15)',
        'card':         '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover':   '0 8px 48px rgba(0,0,0,0.7)',
        'inset-top':    'inset 0 1px 0 rgba(255,255,255,0.06)',
      },

      // ─── GRADIENTS (via bg-gradient) ─────────────────────────────
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #080808 0%, #111111 50%, #0d1a00 100%)',
        'gradient-primary': 'linear-gradient(135deg, #c8f53d 0%, #7aa01c 100%)',
        'gradient-accent':  'linear-gradient(135deg, #ff8c42 0%, #cc5614 100%)',
        'gradient-dark':    'linear-gradient(180deg, #111111 0%, #080808 100%)',
        'gradient-card':    'linear-gradient(135deg, #181818 0%, #111111 100%)',
        'gradient-text':    'linear-gradient(90deg, #c8f53d 0%, #f0ede8 100%)',
        'noise':            'url("/textures/noise.png")',
      },

      // ─── ANIMATIONS ──────────────────────────────────────────────
      animation: {
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow-pulse':   'glow-pulse 2s ease-in-out infinite',
        'fade-up':      'fade-up 0.6s ease forwards',
        'fade-in':      'fade-in 0.4s ease forwards',
        'slide-left':   'slide-left 0.5s ease forwards',
        'spin-slow':    'spin 8s linear infinite',
        'marquee':      'marquee 30s linear infinite',
      },

      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 4px rgba(200,245,61,0.25)' },
          '50%':       { boxShadow: '0 0 40px 10px rgba(200,245,61,0.5)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      // ─── BREAKPOINTS ─────────────────────────────────────────────
      screens: {
        'xs':  '480px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      // ─── TRANSITIONS ─────────────────────────────────────────────
      transitionTimingFunction: {
        'expo-out':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':   'cubic-bezier(0.7, 0, 0.84, 0)',
        'expo-io':   'cubic-bezier(0.87, 0, 0.13, 1)',
        'back-out':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      // ─── ASPECT RATIOS ───────────────────────────────────────────
      aspectRatio: {
        'hero':   '16 / 7',
        'card':   '3 / 4',
        'square': '1 / 1',
        'wide':   '21 / 9',
      },

      // ─── Z-INDEX SCALE ───────────────────────────────────────────
      zIndex: {
        '1':   '1',
        '2':   '2',
        '60':  '60',
        '70':  '70',
        '80':  '80',
        '90':  '90',
        '100': '100',
      },
    },
  },
  plugins: [],
} satisfies Config
