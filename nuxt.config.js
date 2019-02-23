const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const i18nExtensions = require('vue-i18n-extensions')
const en = require('./locales/en.json')
const fr = require('./locales/fr.json')
const de = require('./locales/de.json')
const es = require('./locales/es.json')
const it = require('./locales/it.json')
const routes = ['/accueil', '/cathedrales-gothiques', '/auteur', '/extraits', '/forum', '/contact', '/editeur', '/le-retable-d-issenheim', '/en/home', '/en/gotiqvantica', '/en/author', '/en/excerpt', '/en/forum', '/en/contact', '/en/publisher', '/en/le-retable-d-issenheim', '/fr', '/fr/cathedrales-gothiques', '/fr/auteur', '/fr/extraits', '/fr/forum', '/fr/contact', '/fr/editeur', '/fr/le-retable-d-issenheim', '/de', '/de/cathedrales-gothiques', '/de/author', '/de/excerpt', '/de/forum', '/de/contact', '/de/publisher', '/de/le-retable-d-issenheim', '/it', '/it/cathedrales-gothiques', '/it/author', '/it/excerpt', '/it/forum', '/it/contact', '/it/publisher', '/it/le-retable-d-issenheim', '/es', '/es/cathedrales-gothiques', '/es/author', '/es/excerpt', '/es/forum', '/es/contact', '/es/publisher', '/es/le-retable-d-issenheim']
const siteMapRoutes = function () {
  return routes.map((currRoute) => {
    return (
      {
        url: currRoute,
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2019-02-23T23:43:00.000Z'
      }
    )
  })
}
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
    // Core components
    '~/plugins/core-components.js',
    // Social component
    '~/plugins/social.js',
    // Vue Snotify notifications
    '~/plugins/snotify.js'
    // font awesome icons
    // '~/plugins/fa.js'
  ],
  // generate: {
  // routes: ['/', '/gotiqvantica', '/author', '/excerpt', '/forum', '/contact', '/publisher', '/le-retable-d-issenheim', '/en/home', '/en/gotiqvantica', '/en/author', '/en/excerpt', '/en/forum', '/en/contact', '/en/publisher', '/en/le-retable-d-issenheim', '/fr', '/fr/gotiqvantica', '/fr/author', '/fr/excerpt', '/fr/forum', '/fr/contact', '/fr/publisher', '/fr/le-retable-d-issenheim', '/de', '/de/gotiqvantica', '/de/author', '/de/excerpt', '/de/forum', '/de/contact', '/de/publisher', '/de/le-retable-d-issenheim', '/it', '/it/gotiqvantica', '/it/author', '/it/excerpt', '/it/forum', '/it/contact', '/it/publisher', '/it/le-retable-d-issenheim', '/es', '/es/gotiqvantica', '/es/author', '/es/excerpt', '/es/forum', '/es/contact', '/es/publisher', '/es/le-retable-d-issenheim']
  // },
  modules: [
    'nuxt-fontawesome',
    ['@nuxtjs/dotenv', {
      VUE_APP_HUMAN_ANSWER: ['12']
    }],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: 'https://cathedrale-gothique.com',
      generate: true,
      routes: siteMapRoutes
    }],
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
      rootRedirect: null,
      vueI18n: {
        fallbackLocale: 'fr',
        messages: {
          en: en,
          fr: fr,
          es: es,
          de: de,
          it: it
        }
      },
      strategy: 'prefix_except_default',
      lazy: false,
      pages: {
        index: {
          en: '/',
          fr: '/',
          de: '/',
          it: '/'
        },
        gotiqvantica: {
          en: '/gotiqvantica',
          fr: '/cathedrales-gothiques',
          es: '/gotiqvantica',
          de: '/gotiqvantica',
          it: '/gotiqvantica'
        },
        author: {
          en: '/author',
          fr: '/auteur',
          es: '/autor',
          de: '/autor',
          it: '/autore'
        },
        excerpt: {
          en: '/excerpt',
          fr: '/extraits',
          es: '/extracto',
          de: '/Auszug',
          it: '/estratto'
        },
        forum: {
          en: '/forum',
          fr: '/forum',
          es: '/forum',
          de: '/forum',
          it: '/forum'
        },
        contact: {
          en: '/contact',
          fr: '/contact',
          es: '/contactar',
          de: '/kontakt',
          it: '/contatto'
        },
        retable: {
          en: '/le-retable-d-issenheim',
          fr: '/le-retable-d-issenheim',
          es: '/le-retable-d-issenheim',
          de: '/le-retable-d-issenheim',
          it: '/le-retable-d-issenheim'
        }
      },
      encodePaths: false,
      seo: true
    /*  vuex: {
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
      } */
    }]
  ],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#00bfff'
  },
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
