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
        v-card-text(style="height:200px;")
          v-radio-group(v-model="userLocale" column)
            template(v-for="country in countries ")
              v-layout.justify-center
                v-flex.xs6.country
                  v-radio(
                    :label="country.label"
                    :value="country.value"
                    :key="country.value"
                    mandatory
                  )
                v-flex.xs2.offset-xs4.flags
                  v-avatar(size="24px" large)
                    img(:src="`img/lang/flags/${country.flag}`")
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
    countries () {
      return this.$t('Button.countries')
    },
    storeLocale () {
      return Cookie.get('locale')
    }
  },

  watch: {
    userLocale (value, oldValue) {
      console.log(value, oldValue)
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
      if (this.selectedLang !== this.currentLanguage.locale) this.selectedLang = this.currentLanguage.locale
    },

    translateI18n () {
      this.dialog = false

      // this.$store.commit('setLocale', this.userLocale)
      // this.$router.replace({ params: { currentLanguage } })
      this.$i18n.locale = this.userLocale
      this.$emit('localeChanged', this.userLocale)
      // Cookie.set('locale', this.currentLanguage, { expires: 7 })
      // document.cookie = `currentLanguage=${lang};path=/;max-age=${60 * 60 * 24 * 7}` // expires in 7 days
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
