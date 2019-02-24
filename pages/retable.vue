<template lang="pug">
    v-container(fluid grid-list-xs)
      v-layout(row wrap)
        v-flex(xs12 md6 offset-md2 text-xs-center)
            img(
              src="/img/main/book/retable.png"
              alt="retable"
              id="retable"
              width="100%"
              )
      v-layout(row wrap)
        v-flex(xs12 md6 offset-md2 d-flex )
          p
            h1 Le retable d’Issenheim,<br />grimoire alchimique pour Compostelle

      transition(name="mcRight" appear mode="in-out")
        v-flex(xs12 lg6 offset-lg2 id="home-summary")
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
        { name: 'og:url', property: 'og:url', content: this.$route.fullPath },
        { name: 'og:title', 'property': 'og:title', 'content': this.$t('Retable.meta.title') },
        { name: 'og:description', 'property': 'og:description', 'content': this.$t('Retable.meta.description').replace(/<\/?[^>]+(>|$)/g, '') },
        { name: 'og:image', 'property': 'og:image', 'content': 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { name: 'twitter:title', property: 'twitter:title', content: this.$t('Retable.meta.title') },
        { name: 'twitter:description', property: 'twitter:description', content: this.$t('Retable.meta.description') }
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
      console.log('event emitted!', JSON.stringify(this.product))
      this.$_bus.$emit('onPurchase', this.product)
    }
  }

}
</script>
