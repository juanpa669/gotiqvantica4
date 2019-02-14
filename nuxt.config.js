const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GOTIQCANTICA: Le secret des Cathédrales gothiques par Rina Sestito Arce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'GOTIQCANTICA: Le secret des Cathédrales gothiques par Rina Sestito Arce'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' } // ,
      // { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  plugins: [
    // vuetify
    '~/plugins/vuetify.js',
    // EventBus
    '~/plugins/bus.js',
    // Internalization
    '~/plugins/i18n.js',
    // Core components
    '~/plugins/core-components.js',
    // '~/plugins/social.js',
    // Vue Snotify notifications
    '~/plugins/snotify.js',
    // font awesome icons
    '~/plugins/fa.js'
  ],
  generate: {
    routes: ['/', '/home', '/author', '/excerpt', '/forum', '/contact', '/publisher', '/retable', '/en', '/en/home', '/en/author', '/en/excerpt', '/en/forum', '/en/contact', '/en/publisher', '/en/retable', '/fr', '/fr/acceuil', '/fr/auteur', 'fr/resume', '/fr/forum', '/fr/contact', '/fr/editeur']
  },
  modules: [
    'nuxt-fontawesome',
    'nuxt-material-design-icons',
    ['nuxt-validate', {
      lang: 'en'
      // regular vee-validate options
    }]
  ],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * i18n middleware
   */
  router: {
    middleware: 'i18n'
  },
  /**
   * middleware
   */
  middleware: [
    'authenticated.js',
    'notAuthenticated.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude:['/(node_modules)/', '/locales/']
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
          options: {
            data: {}
          }
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
