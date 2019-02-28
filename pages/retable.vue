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



</template>

<script>
export default {
  name: 'RetablePage',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  head () {
    return {
      title: this.$t('Retable.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Retable.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Retable.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Retable.meta.title') },
        { name: 'twitter:description', content: this.$t('Retable.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/retable' },
        { property: 'og:description', content: this.$t('Retable.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ]
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
