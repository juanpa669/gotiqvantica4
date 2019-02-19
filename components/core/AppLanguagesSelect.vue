<template lang="pug">
v-layout.row
  v-flex.xs1
    v-btn(
      icon
      color="black"
      dark
      slot="activator"
      @click.native.stop="dialog = !dialog"
    )
      v-icon language
    v-dialog(v-model="dialog" width="300px")
      v-card.justify-center
        v-card-title.mx-5 {{ $t('Dialog.selectCountry') }}
        v-divider
        v-card-text
          v-layout(wrap justify-center align-center)
            v-flex(xs6 offset-xs2)
              nuxt-link(:to="switchLocalePath('en')")
                img(src="/img/lang/flags/en.png")

          v-layout(wrap justify-center align-center)
            v-flex(xs6 offset-xs2)
              nuxt-link(:to="switchLocalePath('fr')")
                img(src="/img/lang/flags/fr.png")
          v-layout(wrap justify-center align-center)
            v-flex(xs6 offset-xs2)
              nuxt-link(:to="switchLocalePath('de')")
                img(src="/img/lang/flags/de.png")
          v-layout(wrap justify-center align-center)
            v-flex(xs6 offset-xs2)
              nuxt-link(:to="switchLocalePath('it')")
                img(src="/img/lang/flags/it.png")
          v-layout(wrap justify-center align-center)
            v-flex(xs6 offset-xs2)
              nuxt-link(:to="switchLocalePath('es')")
                img(src="/img/lang/flags/es.png")
        v-divider
        v-card-actions
          v-flex(xs6 offset-xs3 justify-center align-center)
            v-btn(color="orange darken-1" flat @click.native="onCloseDialog") {{ $t('Button.close') }}
</template>

<script>
// import { mapMutations } from 'vuex'
// import { Validator } from 'vee-validate'
// import locales from '@/locales'
// import { mapGetters } from 'vuex'
import { mapGetters } from 'vuex'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'AppLanguagesSelect',

  data: () => ({
    dataReg: new RegExp(/^\/[a-zA-Z][^/]+/),
    dialog: false,
    top: true,
    right: false,
    bottom: false,
    left: true,
    direction: 'bottom',
    transition: 'slide-y-reverse-transition',
    userLocale: 'en'
  }),

  computed: {
    ...mapGetters({
      currentLocale: 'modules/i18n/currentLocale'
    }),
    pathRoute () {
      return this.$route.fullPath
    },
    replacedRoute () {
      return this.$route.fullPath.replace(this.dataReg, `/${this.currentLocale}`)
    },
    countries () {
      return this.$t('Button.countries')
    },
    storeLocale () {
      return Cookie.get('i18n_redirected')
    },
    toReplace () {
      let str = `'^/' + ${this.$i18n.locale} + (${this.$route.fullPath}.indexOf('/' + ${this.$i18n.locale} + '/') === 0 ? '/' : '')`
      alert(str)
    }
  },

  watch: {
    userLocale (value, oldValue) {
      if (value !== this.currentLocale && value !== this.storeLocale) {
        this.$store.commit('i18n/setLocale', value)
        Cookie.set('locale', value, { expires: 7 })
      }
    },
    '$route' (to, from) {
      // console.log(to, from)
      this.dialog = false
    }
  },
  mounted () {
    if (this.storeLocale) {
      this.userLocale = this.storeLocale
    }
  },
  methods: {
    onCloseDialog () {
      this.dialog = false
      if (this.selectedLang !== this.currentLanguage) this.selectedLang = this.currentLanguage
    },

    translateI18n (lang) {
      this.dialog = false
      this.$i18n.locale = lang
      this.$emit('localeChanged', lang)
      Cookie.set('locale', lang, { expires: 7 })
      return true
    },
    redirectTo (locale) {
      return this.$router.push(this.replacedRoute)
    }
  }
}
</script>

<style lang="css" scoped>
.country {
  margin-top: .5rem;
}
.country img {
  padding: 0 5px;
}
</style>
