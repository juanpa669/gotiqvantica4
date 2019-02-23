<template>
  <v-app dark>
    <AppDrawer />
    <AppToolbar @onPurchase="onPurchase" @toggleDrawer="toggleIt" @onLocaleChange="updateLocale"/>
    <v-content>
      <v-container>
        <AppPurchaseDialog :dialog="dialog" :product="product" @onCloseDialog="onCloseDialog"></AppPurchaseDialog>
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
    computed: {
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
        if (this.$route.path === `/${this.$i18n.locale}/retable` || this.$route.path === '/retable') {
          if (typeof value === 'string') {
            this.product = this.retable
          } else {
            this.product = value
          }
        } else {
          if (typeof value === 'string') {
            this.product = this.gotiqvantica
          }
          this.product = this.gotiqvantica
        }
        this.dialog = true
      },
      onCloseDialog () {
        this.dialog = false
      }
    }
  }
</script>
