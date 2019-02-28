<template lang="pug">
v-container(fluid grid-list-xs)
  v-layout(row wrap align-center)
    v-flex.xs12
      v-card(class="elevation-5" color="transparent")
        v-card-title
            v-flex.xs12.text-xs-center
              h1(v-html="$t('Home.mainTitle')")
    v-layout.wrap
      transition(name="mcScale" appear mode="in-out")
        v-flex(xs12 d-flex)
          v-layout(columns wrap)
            v-flex(xs12 md6 offset-md3 lg4 offset-lg4 text-xs-center)
              img(
                src="/img/main/book/livre-320w.jpg"
                srcset="/img/main/book/livre-375w.jpg 360w, /img/main/book/livre-600w.jpg 640w, /img/main/book/livre-768w.jpg 768w, /img/main/book/livre.jpg 1280w"
                alt="book"
                title="Livre cathedrales gothiques"
                id="livre"
                width="100%"
              )
            v-flex(xs12 text-xs-center pa-4)
              div.fb-like(
              fb-like data-href="https://www.facebook.com/Rinarce/"
              data-layout="button_count"
              data-action="like"
              data-size="large"
              data-show-faces="true"
              data-share="true"
              )
            v-flex(xs12 text-xs-center pa-2)
              div.text-xs-center
                v-rating(color="yellow" v-model="rating")


      transition(name="mcRight" appear mode="in-out")
        v-flex(xs12 lg10 offset-lg1 id="home-summary")
          v-card-text(id="livre-summary")
            p(id="summary" v-html="$t('Summary.text')")

          v-card-actions
            v-layout(row wrap align-center)
              v-flex(text-xs-center)
                v-btn(
                  small
                  outline
                  ripple
                  round
                  color="white"
                  href="https://www.editions-saint-honore.com/produit/gotiqvantica/"
                  target="_blank"
                ) {{ $t('Button.buy') }}
                v-spacer

</template>

<script>
import SocialSharing from 'vue-social-sharing'
import { mapGetters } from 'vuex'

export default {
  name: 'GotiqvanticaPage',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  components: {
    SocialSharing
  },
  head () {
    return {
      title: this.$t('Home.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Home.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Home.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Home.meta.title') },
        { name: 'twitter:description', content: this.$t('Home.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/livre-fb.jpg' },
        { hid: 'og:title', property: 'og:title', content: this.$t('Home.mainTitle') },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `https://www.cathedrale-gothique.com` },
        { hid: 'og:description', property: 'og:description', content: this.$t('Home.meta.description') },
        { hid: 'og:image', property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/livre-fb.jpg' },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' }
      ]
    }
  },
  data () {
    return {
      rating: 5,
      dialog: false,
      videoDialog: false,
      card: {
        title: this.$t('Home.cardTitle'),
        text: this.$t('Home.cardText'),
        mbutton: this.$t('Button.close')
      },
      show: false,
      title: ''
    }
  },
  computed: {
    ...mapGetters({
      currentLocale: 'currentLocale'
    }),
    isSmallMobile () { return this.$nextTick(() => window.innerWidth <= 600) },
    summaryText () { return this.summary },
    gotiqvanticaFbUrl () {
      return this.currentLocale === 'fr' ? '/cathedrales-gothiques' : `/${this.currentLocale}/gotiqvantica`
    }
  },

  mounted () {
    this.show = true
  },

  methods: {
    togglePlay () {
      this.dialog = true
    }
  }
}
</script>
<style lang="stylus" scoped>
a
a:link
a:visited
a:hover
a:active
  color orange

</style>
