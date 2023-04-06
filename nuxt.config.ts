export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  srcDir: 'src/',

  build: {
    transpile: [],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'Guccho',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['~/components'],
  },

  nitro: {
    minify: true,
  },
  vite: {
    build: {
      minify: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  alias: {
  },

  typescript: {
    strict: true,
  },
  experimental: {
    componentIslands: true,
  },
})
