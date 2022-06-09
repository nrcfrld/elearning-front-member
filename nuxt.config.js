import axios from 'axios'

export default {
  generate: {
    routes() {
      return axios.get(process.env.API_BASE_URL + '/courses').then((res) => {
        return res.data.data.map((course) => {
          return '/courses/' + course.slug
        })
      })
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'elearning-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        body: true,
      },
      {
        src: 'js/uikit.js',
        body: true,
      },
      {
        src: 'js/tippy.all.min.js',
        body: true,
      },
      {
        src: 'js/simplebar.js',
        body: true,
      },
      {
        src: 'js/custom.js',
        body: true,
      },
      {
        src: 'js/bootstrap-select.min.js',
        body: true,
      },
      {
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
        type: 'module',
      },
      {
        src: 'https://unpkg.com/ionicons@5.2.3/dist/ionicons.js',
        nomodule: true,
      },
      {
        src: 'https://app.sandbox.midtrans.com/snap/snap.js',
        'data-client-key': 'SB-Mid-client-h3xODEe2OqzvqQ4d',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/icons.scss',
    '~assets/css/uikit.css',
    '~assets/scss/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/vue-skeleton-loader.js',
    },
    {
      src: '~plugins/vue-youtube.js',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  router: {
    base: '/',
    middleware: 'auth',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: { config: './tailwindcss.config.js' },
        autoprefixer: {},
      },
    },
  },

  auth: {
    redirect: {
      login: '/account/login',
      logout: '/',
      callback: '/account/login',
      home: '/',
    },
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: process.env.API_BASE_URL,
        endpoints: {
          login: {
            url: '/auth/jwt/token',
            method: 'get',
          },
          logout: {
            url: '/auth/jwt/token',
            method: 'delete',
          },
          user: {
            url: '/auth/me',
            method: 'get',
          },
          refresh: {
            url: '/auth/jwt/refresh',
            method: 'get',
          },
        },
        user: {
          property: 'data',
          autoFetch: true,
        },
        token: {
          property: 'data.jwt',
          maxAge: 60 * 60,
        },
        refreshToken: {
          maxAge: 20160 * 60,
        },
      },
    },
  },

  loading: '~/components/elements/PageLoader.vue',

  server: {
    port: 3000,
    host: '0.0.0.0', // default: localhost
  },

  vue: {
    config: {
      ignoredElements: [/^ion-/],
    },
  },

  target: 'static',
}
