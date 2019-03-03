<template lang="pug">
  v-layout.wrap
    v-flex(xs12 md6 offset-md3)
      v-card
        v-card-title
          h1 {{ $t('Editor.title') }}
        v-card-text
          p(class="textEditor" v-html="$t('Editor.text')")
    v-layout(wrap justify-center align-center mt-5)
      transition(name="mcScale" appear mode="in-out")
        v-flex(xs12 md4 text-xs-center)
          AppHoverCard(title="Gotiqvantica" image="https://cathedrale-gothique.com/img/main/book/livre.jpg" url="" :stars="5" :externalLink="true")
            template(slot="text")
              p {{ $t('gotiqvanticaShort') }}
            template(slot="actions")
              v-card-actions
                v-btn(flat color="orange" @click.native="onShare('gotiqvantica')") {{ $t('Button.share') }}
                v-btn(flat color="orange" @click.native="goTo('gotiqvantica')") {{ $t('Button.explore') }}
      transition(name="mcScale" appear mode="in-out")
        v-flex(xs12 md4 text-xs-center)
          AppHoverCard(title="Le Retable d Issenheim" image="https://cathedrale-gothique.com/img/main/book/retable.png" url="" :stars="5" :externalLink="true")
            template(slot="text")
              p {{ $t('retableShort') }}
            template(slot="actions")
              v-card-actions
                v-btn(flat color="orange" @click.native="onShare('retable')") {{ $t('Button.share') }}
                v-btn(flat color="orange" @click.native="goTo('le-retable-dissenheim-grimoire-alchimique-pour-compostelle')") {{ $t('Button.explore') }}



      v-flex(
        xs12
        text-xs-center
        pa-4
      )
        h4 Partager la page Facebook
        div(
          class="fb-like"
          fb-like data-href="https://www.facebook.com/Rinarce/"
          data-layout="button_count"
          data-action="like"
          data-size="large"
          data-show-faces="true"
          data-share="true"
          )
</template>

<script>
/* global FB */
export default {
  name: 'Editor',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data: () => ({
    show: false,
    reviews: 5
  }),
  head () {
    return {
      title: this.$t('Editor.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Editor.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Editor.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Editor.meta.title') },
        { name: 'twitter:description', content: this.$t('Editor.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `https://cathedrale-gothique.com${this.$route.fullPath}/` },
        { property: 'og:description', content: this.$t('Editor.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ]
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  methods: {
    buy () {
      this.$_bus.$emit('onPurchase')
    },
    goTo (product) {
      window.open(`https://www.editions-saint-honore.com/produit/${product}`)
    },
    onShare (product) {
      FB.ui({
        method: 'share',
        href: `https://cathedrale-gothique.com/${product === 'gotiqvantica' ? 'cathedrales-gothiques' : 'le-retable-d-issenheim'}`
      }, function (response) {
        // console.log(response)
      })
    }
  }
}
</script>

<style lang="stylus">
$my-blue = #00bfff

.tooltip__content
  top 50vh!important

.textEditor a
  background-color transparent
  -webkit-text-decoration-skip objects!important
  color $my-blue!important
  font-family papyrus

</style>
