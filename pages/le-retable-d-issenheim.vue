<template lang="pug">
    v-container(fluid grid-list-xs)
      v-layout(row wrap)
        v-flex(xs12 text-xs-center)
          h1 Le retable d’Issenheim, grimoire alchimique pour Compostelle
        v-flex(xs12 md6 offset-md3 text-xs-center)
            img(
              src="/img/main/book/retable.png"
              alt="retable"
              title="Le retable d'Issenheim, grimoire alchimique pour Compostelle"
              id="retable"
              width="100%"
              )
      v-layout(row wrap)
        transition(name="mcRight" appear mode="in-out")
          v-flex(xs12 md6 offset-md3 id="home-summary")
            v-card-text(id="livre-retable"  v-html="$t('Retable.text')")

            v-card-actions
              v-layout(row wrap align-center)
                v-flex(text-xs-center)
                  v-btn(
                    small
                    outline
                    ripple
                    round
                    color="white"
                    @click.native="purchase"
                    target="_blank"
                  ) {{ $t('Button.buy') }}
      v-spacer
      v-layout.wrap
        v-flex(
          xs12
          text-xs-center
          pa-4
          )
            h4 Partager la page
            div(
              class="fb-like"
              fb-like data-href="https://cathedrale-gothique.com/le-retable-d-issenheim"
              data-layout="button_count"
              data-action="like"
              data-size="large"
              data-show-faces="true"
              data-share="true"
              )


</template>

<script>
export default {
  name: 'RetablePage',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  head () {
    let canonical = `https://cathedrale-gothique.com${this.$route.path}`
    let link = [{
      rel: 'canonical',
      href: canonical
    }]
    return {
      title: this.$t('Retable.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Retable.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Retable.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://cathedrale-gothique.com' },
        { name: 'twitter:creator', content: '@Rinarce' },
        { name: 'twitter:title', content: this.$t('Retable.meta.title') },
        { name: 'twitter:description', content: this.$t('Retable.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Retable.meta.title') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://cathedrale-gothique.com${this.$route.fullPath}` },
        { property: 'og:description', content: this.$t('Retable.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ],
      link
    }
  },
  data () {
    return {
      toggle: 0,
      product: {
        name: 'le-retable-dissenheim-grimoire-alchimique-pour-compostelle',
        amazonUrl: 'https://www.amazon.fr/retable-dIssenheim-Grimoire-alchimique-Compostelle/dp/2407012690/',
        fnacUrl: 'https://livre.fnac.com/a13288728/Rina-Sestito-Arce-Le-retable-d-Issenheim'
      }
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  methods: {
    purchase () {
      this.$_bus.$emit('onPurchase', this.product)
    }
  }

}
</script>
<style lang="css" scoped>
p {
  font-size: 1.5rem!important;
}
</style>
