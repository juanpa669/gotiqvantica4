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
          v-radio-group(v-model="userLocale" column)
            template(v-for="country in countries ")
              v-layout.justify-center
                v-flex.xs2
                  v-btn(flat small @click="translateI18n(country.value)") {{ country.label }}
                v-flex.xs2.flags
                  v-avatar(size="24px" large)
                    img(:src="`${country.value}/img/lang/flags/${country.flag}`")
        v-divider
        v-card-actions
          v-btn(color="orange darken-1" left flat @click.native="onCloseDialog") {{ $t('Button.close') }}
          v-btn(color="orange darken-1" left flat @click.native="translateI18n").mx-auto {{ $t('Button.valid') }}
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
      currentLocale: 'currentLocale'
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
      return Cookie.get('locale')
    },
    toReplace () {
      let str = `'^/' + ${this.$i18n.locale} + (${this.$route.fullPath}.indexOf('/' + ${this.$i18n.locale} + '/') === 0 ? '/' : '')`
      alert(str)
    }
  },

  watch: {
    userLocale (value, oldValue) {
      if (value !== this.currentLocale && value !== this.storeLocale) {
        this.$store.commit('setLocale', value)
        Cookie.set('locale', value, { expires: 7 })
      }
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
      this.redirectTo(lang)

      // document.cookie = `currentLanguage=${lang};path=/;max-age=${60 * 60 * 24 * 7}` // expires in 7 days
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
