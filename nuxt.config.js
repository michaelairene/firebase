import axios from "axios";
const fs = require('fs');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testing-firebase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDhsl8FeN_r-IilQQLWTCUlQxQnayOZxgA",
          authDomain: "test-nuxt-9aa3a.firebaseapp.com",
          projectId: "test-nuxt-9aa3a",
          storageBucket: "test-nuxt-9aa3a.appspot.com",
          messagingSenderId: "452604209733",
          appId: "1:452604209733:web:735b7cd466a337ee76d12c",
          measurementId: "G-2VEPKB8GK1"
        },
        services: {
          messaging: {
            createServiceWorker: true,
            fcmPublicVapidKey: 'BAPB9EATKhZc5vrDHhjKRgIiaZhYrfxw38yCafMK4Cp7ftBzEa-m3rkIyRKtlaWPehUsv7lADhsNtO2LuchIiq0', //see step 7
            inject: fs.readFileSync('./serviceWorker.js') //see step 8
          },
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
