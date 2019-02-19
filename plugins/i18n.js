/*
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({
  app,
  store
}) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json'),
      'de': require('~/locales/de.json'),
      'it': require('~/locales/it.json'),
      'es': require('~/locales/es.json')
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/en/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
*/
/*
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({
  app,
  store,
  req
}) => {
  if (process.server) {
    var a = req.headers
    console.log(a)
    var cookies = req.headers.cookie
    var KeyNameLocale = 'locale='
    var decodedCookie = decodeURIComponent(cookies)
    var ca = decodedCookie.split(';')

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }

      if (c.indexOf(KeyNameLocale) !== -1) {
        var newLocale = c.substring(KeyNameLocale.length, c.length)
        console.log('newLocale')
        console.log(newLocale)
        store.commit('SET_LANG', newLocale)
      }
    }
  }
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json')
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${app.i18n.locale}/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
/*
export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json'),
      'de': require('~/locales/de.json'),
      'it': require('~/locales/it.json'),
      'es': require('~/locales/es.json')
    }
  })
}
*/
