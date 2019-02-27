<template>
  <v-app dark>
    <AppDrawer />
    <AppToolbar @onPurchase="onPurchase" @toggleDrawer="toggleIt" @onLocaleChange="updateLocale"/>
    <v-content>
      <vue-snotify />
      <v-container>
        <AppPurchaseDialog :dialog="dialog" :product="product" @onCloseDialog="onCloseDialog"></AppPurchaseDialog>
        <nuxt />
      </v-container>
    </v-content>

    <AppFooter />
  </v-app>
</template>

<script>
  import addSnotify from '~/mixins/addSnotification.js'
  import { mapGetters } from 'vuex'

  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    name: 'layoutComponent',
    data () {
      return {
        traductor: null,
        toggle: 0,
        product: {},
        gotiqvantica: {
          name: 'gotiqvantica',
          amazonUrl: 'https://www.amazon.fr/Gotiqvantica-Rina-Sestito-Arce/dp/2407004094/ref=sr_1_1?ie=UTF8&qid=1512692037&sr=8-1&keywords=gotiqvantica',
          fnacUrl: 'https://livre.fnac.com/a11193768/Rina-Sestito-Arce-Gotiqvantica/'
        },
        retable: {
          name: 'le-retable-dissenheim-grimoire-alchimique-pour-compostelle',
          amazonUrl: 'https://www.amazon.fr/retable-dIssenheim-Grimoire-alchimique-Compostelle/dp/2407012690/',
          fnacUrl: 'https://livre.fnac.com/a13288728/Rina-Sestito-Arce-Le-retable-d-Issenheim'
        },
        clipped: false,
        drawer: true,
        fixed: false,
        dialog: false,
        miniVariant: false
      }
    },
    head () {
      return {
        title: this.$t('Home.meta.title'),
        meta: [
          { hid: 'description', name: 'description', content: this.$t('Home.meta.description') },
          { hid: 'keywords', name: 'keywords', content: this.$t('Home.meta.keywords') },
          { name: 'twitter:card', content: this.$t('Home.meta.description') },
          { name: 'twitter:site', content: '@juanpa' },
          { name: 'twitter:creator', content: '@Rina' },
          { name: 'twitter:title', content: this.$t('Home.meta.title') },
          { name: 'twitter:description', content: this.$t('Home.meta.description') },
          { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
          { property: 'og:title', content: this.$t('Home.mainTitle') },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://www.cathedrale-gothique.com/' },
          { property: 'og:description', content: this.$t('Home.meta.description') },
          { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
          { property: 'fb:app_id', content: '2008683959352956' }
        ]
      }
    },
    mixins: [addSnotify],
    computed: {
      ...mapGetters({ 'currentLocale': 'currentLocale' }),
      storedLocale () {
        return this.getCookie()
      }
    },
    mounted () {
      this.$_bus.$on('onPurchase', this.onPurchase)
      this.$_bus.$on('localeChanged', this.updateLocale)
    },
    beforeDestroy () {
      this.$_bus.$off('onPurchase')
      this.$_bus.$off('localeChanged')
    },
    watch: {
      currentLocale (value, oldValue) {
        return this.traduction(value)
      }
    },
    methods: {
      toggleIt () {
        return this.$store.commit('toggleDrawer')
      },
      checkUserLocale () {
        if ((this.storedLocale !== undefined) && (this.storedLocale !== this.$store.state.i18n.locale)) {
          this.$store.commit('setLocale', this.storedLocale)
        }
      },
      isStoreEqualToLocal () {
        const value = this.storedLocale === this.$store.state.i18n.locale
        return value
      },
      updateLocale (value) {
        if (typeof value === 'string') {
          if (value !== this.storedLocale && value !== undefined) {
            this.$store.commit('setLocale', value)
            this.$i18n.locale = value
            this.setCookie(value)
          } else {
            this.$store.commit('setLocale', 'fr')
          }
          return true
        }
      },
      getCookie () {
        return Cookie.get('i18n_redirected')
      },
      setCookie (value) {
        return Cookie.set('locale', value)
      },
      onPurchase (value) {
        if (this.$route.path === `/${this.$i18n.locale}/le-retable-d-issenheim` || this.$route.path === '/le-retable-d-issenheim') {
          if (typeof value === 'string') this.product = this.retable
          else this.product = value
        } else {
          if (typeof value === 'string') this.product = this.gotiqvantica
          this.product = this.gotiqvantica
        }
        this.dialog = true
      },
      onCloseDialog () {
        this.dialog = false
      },
      traduction (val) {
        switch (val) {
          case 'de': this.traductor = 'Ralf Müller'
            break
          case 'en': this.traductor = 'Valérie Poppe Muess'
            break
          case 'es': this.traductor = 'Angélique León Colotte'
            break
          case 'fr': this.dialog2 = false
            break
          default: return ''
        }
        if (val !== 'fr' && val !== 'it') this.traductorToast()
      },
      traductorToast () {
        return this.addSnotify({
          type: 'info',
          text: this.formatTraductor(),
          timeout: 6000,
          position: 'rightTop'
        })
      },
      formatTraductor () {
        return this.$t('translation') + this.traductor
      }
    }
  }
</script>
<style lang="css">
@import "vue-snotify/styles/material"
</style>
