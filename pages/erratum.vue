<template lang="pug">
  v-container(fluid)
    v-layout(row wrap v-if="showErratum")
        v-flex(xs12)

          h1(class="text-xs-center" id="erratum-title") ERRATUM

        v-flex(xs12 md6 offset-md3)
          p(class="erratum-message" v-html="$t('Erratum.text')")

        v-divider(dark inset)
        v-flex(xs12 text-xs-center v-show="showErratum")
          |  {{ $t('Erratum.image1') }}
          v-flex(xs12 sm6 offset-sm3 md4 offset-md4 )
            img(src="/img/main/erratum/sephirot.jpg" width="100%" alt="sephirot")
          |  {{ $t('Erratum.image2') }}
        v-flex(xs12  text-xs-center id="chakra-wrapper" py-4)
          img(:src="chakraImg" width="250px" class="chakra" alt="chakra")
        v-layout
          v-flex.xs12.md6.offset-md3
            p(v-html="$t('Erratum.text2')")

        v-layout(
          wrap
          :justify-space-between="$vuetify.breakpoint.mdAndUp"
          :justify-space-around="$vuetify.breakpoint.xs"
          )
            v-flex.xs4.sm4.offset-md3
              v-btn(
                small
                round
                outline
                @click.native.stop="$router.go(-1)"
              )
                | {{ $t('Button.back') }}

            v-flex.xs4.sm4
              v-btn(
                disabled
                small
                round
                outline
                @click.native="initPrint"
              )
                | {{ $t('Button.print') }}
    v-layout(v-else row justify-center align-center wrap style="height:50vh")
      v-flex(
      xs12
      text-xs-center
      )
        h1 {{ $t('Erratum.noContent') }}

    v-flex(xs12 text-xs-center class="print") Page 30 / 31
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'erratum',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data: () => ({
    erratumText: '',
    printPage: false,
    erratumLang: ['fr', 'it']
  }),
  head () {
    return {
      title: this.$t('Erratum.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Erratum.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Erratum.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Erratum.meta.title') },
        { name: 'twitter:description', content: this.$t('Erratum.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/' },
        { property: 'og:description', content: this.$t('Erratum.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/livre-fb.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ]
    }
  },
  computed: {
    // ...mapGetters(['isMobile']),
    lang () { return this.$store.state.i18n.locale },
    showErratum () { return this.erratumLang.indexOf(this.lang) > -1 },
    message () { return this.erratumText },
    chakraImg () {
      let lang = this.locale
      switch (lang) {
        case 'it': return '/img/main/erratum/ITA-chakra.jpeg'
        case 'en': return '/img/main/erratum/GB-chakra.jpeg'
        case 'es': return '/img/main/erratum/ESP-chakra.jpeg'
        case 'de': return '/img/main/erratum/DE-chakra.jpeg'
        default: return '/img/main/erratum/FR-chakra.jpeg'
      }
    }
  },
  methods: {
    initPrint () { window.print() }
  }

}
</script>
