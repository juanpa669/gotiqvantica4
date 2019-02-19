<template>
  <v-app dark>
    <AppDrawer @input="onInput" />
    <AppToolbar @onPurchase="onPurchase" @toggleDrawer="toggleIt" @onLocaleChange="updateLocale"/>
    <v-content>
      <v-container>
        <AppPurchaseDialog :dialog="dialog" :product="gotiqvantica" @onCloseDialog="onCloseDialog"></AppPurchaseDialog>
        <nuxt />
      </v-container>
    </v-content>

    <AppFooter />
  </v-app>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    data () {
      return {
        toggle: 0,
        defaultProduct: {
          ...this.gotiqvantica
        },
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
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      storedLocale () {
        return this.getCookie()
      }
    },
    created () {
      if (this.$route.path === '/') {
        this.$router.push('en')
      }
    },
    mounted () {
      if (this.getCookie() === undefined) {
        this.setCookie('en')
      }
      if (this.isStoreEqualToLocal() === false) {
        // console.log('need to set stored locale : ' + this.getCookie())
        return this.updateLocale(this.storedLocale)
      }
      this.$_bus.$on('localeChanged', this.updateLocale)
      this.$on('onPurchase', this.onPurchase)
    },
    methods: {
      toggleIt () {
        return this.$store.commit('toggleDrawer')
      },
      onInput (e) {
      },
      checkUserLocale () {
        if ((this.storedLocale !== undefined) && (this.storedLocale !== this.$store.state.i18n.locale)) {
          this.$store.commit('i18n/setLocale', this.storedLocale)
        }
      },
      isStoreEqualToLocal () {
        const value = this.storedLocale === this.$store.state.i18n.locale
        return value
      },
      updateLocale (value) {
        if (typeof value === 'string') {
          if (value !== this.storedLocale && value !== undefined) {
            this.$store.commit('i18n/setLocale', value)
            this.$i18n.locale = value
            this.setCookie(value)
          } else {
            this.$store.commit('i18n/setLocale', 'fr')
            // this.$i18n.locale = 'en'
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
        // console.log('onPurchase Default.vue : ' + value)
        // console.log('onPurchase dialog : ' + this.dialog)
        if (typeof value === 'boolean') console.log('boolean : ' + value)
        if (value) {
          if (value === 'retable') {
            this.dialog = true
            this.defaultProduct = this.retable
          } else {
            this.dialog = true
            this.defaultProduct = this.gotiqvantica
          }
          this.dialog = true
        }
      },
      onCloseDialog () {
        this.dialog = false
      }
    }
  }
</script>
