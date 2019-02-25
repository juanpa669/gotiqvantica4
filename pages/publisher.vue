<template lang="pug">
  v-container.grid-list-md
    v-layout(row justify-center align-center)
      v-flex(xs12 text-xs-center key="titleWrapper")
        h1(class="headline editor-title") {{ $t('Editor.title') }}
    transition(name="mcScale" appear mode="in-out")
      v-flex(xs12 lg4 offset-lg4 key="tooltpWrapper" text-xs-center)
        v-tooltip(class="editor" top)
          a(href="http://www.editions-saint-honore.com/produit/gotiqvantica/" slot="activator" target="_blank")
            img(
                src="/img/main/book/livre-320w.jpg"
                srcset="/img/main/book/livre-375w.jpg 360w, /img/main/book/livre-600w.jpg 480w, /img/main/book/livre-768w.jpg 768w, /img/main/book/livre-768w@2x.jpg 1280w"
                alt="book"
                id="publisher"
                width="100%"
              )

          span(v-t="'Editor.purchase'")


          v-flex(xs12 text-xs-center mt-4 key="buttonWrapper")
            h3(v-t="'Editor.imgClick'" key="message")
</template>

<script>
export default {
  name: 'Editor',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data: () => ({
    show: false
  }),
  head () {
    return {
      title: this.$t('Editor.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Editor.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Editor.meta.keywords') },
        { name: 'twitter:card', property: 'twitter:card',  content: this.$t('Editor.meta.description') },
        { name: 'twitter:site', property: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', property: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', property: 'twitter:title', content: this.$t('Editor.meta.title') },
        { name: 'twitter:description', property: 'twitter:description', content: this.$t('Editor.meta.description') },
        { name: 'twitter:image', property: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:url', content: 'https://cathedrale-gothique.com/publisher' },
        { property: 'og:title', content: this.$t('Editor.meta.title') },
        { property: 'og:description', content: this.$t('Editor.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'fb:app_id', content: '2008683959352956' }
      ]
    }
  },
  methods: {
    buy () {
      this.$_bus.$emit('onPurchase')
    }
  }
}
</script>

<style>
 .tooltip__content {
  top: 50vh!important;
}
</style>
