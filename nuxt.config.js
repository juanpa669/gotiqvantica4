const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const i18nExtensions = require('vue-i18n-extensions')
const en = require('./locales/en.json')
const fr = require('./locales/fr.json')
const de = require('./locales/de.json')
const es = require('./locales/es.json')
const it = require('./locales/it.json')

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  plugins: [
    // vuetify
    '~/plugins/vuetify.js',
    // EventBus
    '~/plugins/bus.js',
    // Internalization
    // '~/plugins/i18n.js',
    // Core components
    '~/plugins/core-components.js',
    // '~/plugins/social.js',
    // Vue Snotify notifications
    '~/plugins/snotify.js',
    // font awesome icons
    '~/plugins/fa.js'
  ],
  // generate: {
  // routes: ['/fr', '/fr/gotiqvantica', '/fr/author', '/fr/excerpt', '/fr/forum', '/fr/contact', '/fr/publisher', '/fr/retable', '/de', '/de/gotiqvantica', '/de/author', '/de/excerpt', '/de/forum', '/de/contact', '/de/publisher', '/de/retable', '/it', '/it/gotiqvantica', '/it/author', '/it/excerpt', '/it/forum', '/it/contact', '/it/publisher', '/it/retable', '/es', '/es/gotiqvantica', '/es/author', '/es/excerpt', '/es/forum', '/es/contact', '/es/publisher', '/es/retable']
  // },
  modules: [
    'nuxt-fontawesome',
    'nuxt-material-design-icons',
    ['nuxt-validate', {
      lang: 'en'
      // regular vee-validate options
    }],
    ['nuxt-i18n', {
      parsePages: false,
      locales: [
        { code: 'en', iso: 'en-US', file: en },
        { code: 'fr', iso: 'fr-FR', file: fr },
        { code: 'es', iso: 'es-ES', file: es },
        { code: 'it', iso: 'it-IT', file: it },
        { code: 'de', iso: 'de-DE', file: de }
      ],
      defaultLocale: 'fr',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: en,
          fr: fr,
          es: es,
          de: de,
          it: it
        }
      },
      strategy: 'prefix',
      lazy: false,
      pages: {
        author: {
          en: '/author', // -> accessible at /about-us (no prefix since it's the default locale)
          fr: '/auteur', // -> accessible at /fr/a-propos
          es: '/autor', // -> accessible at /es/sobre
          de: '/autor', // -> accessible at /es/sobre
          it: '/autore' // -> accessible at /es/sobre
        },
        home: {
          en: '/home', // -> accessible at /about-us (no prefix since it's the default locale)
          fr: '/accueil', // -> accessible at /fr/a-propos
          es: '/casa', // -> accessible at /es/sobre
          de: '/home', // -> accessible at /es/sobre
          it: '/casa' // -> accessible at /es/sobre
        },
        excerpt: {
          en: '/excerpt', // -> accessible at /about-us (no prefix since it's the default locale)
          fr: '/extraits', // -> accessible at /fr/a-propos
          es: '/extracto', // -> accessible at /es/sobre
          de: '/Auszug', // -> accessible at /es/sobre
          it: '/estratto' // -> accessible at /es/sobre
        },
        forum: {
          en: '/forum', // -> accessible at /about-us (no prefix since it's the default locale)
          fr: '/forum', // -> accessible at /fr/a-propos
          es: '/forum', // -> accessible at /es/sobre
          de: '/forum', // -> accessible at /es/sobre
          it: '/forum' // -> accessible at /es/sobre
        },
        contact: {
          en: '/contact', // -> accessible at /about-us (no prefix since it's the default locale)
          fr: '/contact', // -> accessible at /fr/a-propos
          es: '/contactar', // -> accessible at /es/sobre
          de: '/kontakt', // -> accessible at /es/sobre
          it: '/contatto' // -> accessible at /es/sobre
        }
      },

      // By default, custom paths will be encoded using encodeURI method.
      // This does not work with regexp: "/foo/:slug-:id(\\d+)". If you want to use
      // regexp in the path, then set this option to false, and make sure you process
      // path encoding yourself.
      encodePaths: true,
      seo: false,

      // Called right before app's locale changes
      beforeLanguageSwitch: () => console.log('beforeLanguageSwitch..................'),

      // Called after app's locale has changed
      onLanguageSwitched: () => console.log('onLanguageSwitched......................'),
      vuex: {
        // Module namespace
        moduleName: 'i18n',
        // Mutations config
        mutations: {
          // Mutation to commit to store current locale, set to false to disable
          setLocale: 'setLocale',
          // Mutation to commit to store current message, set to false to disable
          setMessages: 'setMessages'
        },
        // PreserveState from server
        preserveState: false
      }
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
  },
  render: {
    // confiture `render`
    // see Nuxt.js docs: https://nuxtjs.org/api/configuration-render#bundleRenderer
    bundleRenderer: {
      directives: {
        t: i18nExtensions.directive
      }
    }
  }
}
