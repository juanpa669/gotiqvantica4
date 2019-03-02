<template lang="pug">
  v-container(grid-list-xs id="forum-container")
    v-layout(wrap justify-center align-center)
      h1(v-t="'Forum.meta.title'" class="text-xs-center")
    v-layout(wrap justify-center align-center)
      p(v-t="'Forum.subtile'" class="text-xs-center")
    v-layout(wrap justify-start align-center)
      v-flex(
        xs12
        sm10
        offset-sm1
        md8
        offset-md2
        lg7
        offset-lg3
        xl5
        offset-xl4
        )
        v-toolbar(
          color="light-blue accent-4"
          scroll-off-screen
          class=""
          )
          v-toolbar-side-icon
            v-btn(
                color="light-blue accent-2"
                light
                small
                absolute
                fab
                @click.native="$router.push('/contact')"
            )
              v-icon add

          v-toolbar-title.white--text {{ $t('Forum.title') }}
          v-spacer
          v-icon forum

        v-card.black
          v-container(
            fluid
            grid-list-md
          )
            v-layout(row wrap justify-center)
              transition-group( name="mcScale" appear :key="comments.id")
                v-flex(v-for="(comment, i) in comments" :key="comment.id")
                  v-card(color="blue-grey darken-4" white--text :width="$vuetify.breakpoint.smAndUp ? '600px' : '320px'")
                    v-card-title.primary-title
                      v-layout(wrap align-content-end)
                        v-flex
                          p {{comment.message}}

                        v-flex.xs12.headline.yellow--text.text-xs-right
                          span {{ comment.author }}

                    v-card-actions
                      social-sharing(
                        url="https://cathedrale-gothique.com/"
                        :title="$t('Forum.title')"
                        :description="comment.message"
                        :quote="comment.message"
                        :hashtags="$t('hashTags')"
                        twitter-user="RinarceS"
                        inline-template
                        network-tag="p"
                        media="https://cathedrale-gothique.com/img/main/GOTIQVANTICA.jpg"
                      )
                        network(network="facebook")
                          v-btn(
                            icon
                            :disabled="fav"
                            @click.native="fav = !fav"
                            color="light-blue"
                          )
                            v-icon share
    v-layout.wrap.fb
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
import comments from '@/locales/comments'
import SocialSharing from 'vue-social-sharing'

export default {
  name: 'forum',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },

  components: {
    SocialSharing
  },
  head () {
    return {
      title: this.$t('Forum.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Forum.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Forum.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Forum.meta.title') },
        { name: 'twitter:description', content: this.$t('Forum.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:url', content: `https://cathedrale-gothique.com${this.$route.fullPath}/` },
        { property: 'og:title', content: this.$t('Forum.meta.title') },
        { property: 'og:description', content: this.$t('Forum.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' }
      ]
    }
  },
  data () {
    return {
      search: false,
      comments: comments,
      fav: false
    }
  },
  mounted () {
    this.$initFbSDK()
  }
}
</script>
<style scoped>
  h4, span {
    font-family: papyrus;
  }
  #main-forum {
    background-image: url('/img/main/contact/chevalier.png')!important;
    background-position: 0 0;
    background-size: contain;
  }
  h4 {
    font-size: 1.4rem;
  }
   .scale-move{
     transition: transform .8s .3s cubic-bezier(.25,.8,.50,1);
   }
   .toolbar__title {
     font-family: papyrus;
     font-size: x-large;
     font-weight: 900;
   }
   .fb {
     z-index: 100;
   }
</style>
