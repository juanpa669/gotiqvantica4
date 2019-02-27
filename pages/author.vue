<template lang="pug">
    v-layout(row wrap id="layout-wrap")

      v-flex(xs12 text-xs-center key="title" id="title")
        h1(v-t="'Author.title'")
      v-flex(
        xs12
        md10
        offset-md2
        lg6
        offset-lg3 pa-3
        key="avatar"
        )
        div
          v-avatar(
          :tile="tile"
          elevation-15
          size="96px"
          class="grey lighten-4 elevation-5"
          key="avatar"
          )
            img(
              src="/img/main/author-64.jpg"
              alt="avatar"
            )
        div
          div.headline Rina SESTITO ARCE
          span.white--text GOTIQVANTICA &nbsp; {{year}}&copy;

      v-flex(xs12 sm10 offset-sm1 lg6 offset-lg3 key="bio")
        v-card.bio.black
          v-card-text(
            id="bio"
            v-html="$t('Author.biography')"
          )
        v-layout(
          wrap
          :justify-space-between="$vuetify.breakpoint.mdAndUp"
          :justify-space-around="$vuetify.breakpoint.xs"
        )
          v-flex.xs4.md2
            v-btn(
              round
              outline
              @click.native="$router.go(-1)"
              v-t="'Button.back'"
            )
          v-flex.xs4.md2
            v-btn(
              round
              outline
              @click.native.stop="$router.push('/contact')"
            ) {{ $t('Button.contactAuthor') }}

</template>

<script>
export default {
  name: 'author',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data () {
    return {
      show: false,
      tile: false
    }
  },
  head () {
    return {
      title: this.$t('Author.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Author.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Author.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Author.meta.title') },
        { name: 'twitter:description', content: this.$t('Author.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/' },
        { property: 'og:description', content: this.$t('Author.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ]
    }
  },
  computed: {
    year: _ => new Date().getFullYear()
  },

  methods: {
    animeJS: (el, done) => {
      el.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ], {
          duration: 1000,
          fill: 'both'
        })
      el.onfinish = done
    }
  }
}
</script>
<style>
 .scale-move{
     transition: transform .8s cubic-bezier(.25,.8,.50,1);
   }
   .zoom-move{
   transition: transform 3s ease-out;
 }
</style>
