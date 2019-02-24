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
              @click.native.stop="$router.go(-1)"
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
        { name: 'og:url', property: 'og:url', content: this.$route.fullPath },
        { name: 'og:title', 'property': 'og:title', 'content': this.$t('Author.meta.title') },
        { name: 'og:description', 'property': 'og:description', 'content': this.$t('Author.meta.description').replace(/<\/?[^>]+(>|$)/g, '') },
        { name: 'og:image', 'property': 'og:image', 'content': 'https://cathedrale-gothique.com/img/main/book/livre-320w@2x.jpg' },
        { name: 'twitter:title', property: 'twitter:title', content: this.$t('Author.meta.title') },
        { name: 'twitter:description', property: 'twitter:description', content: this.$t('Author.meta.description') }
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
