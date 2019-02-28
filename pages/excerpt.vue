<template>
  <v-layout row wrap align-center>

    <v-flex xs12 text-xs-center>
      <h1 class="extraits-title" v-html="$t('Excerpt.title')">
      </h1>
    </v-flex>

      <v-flex xs12 md10 offset-md1>
      <transition name="mcScale" appear mode="in-out">
      <v-card color="transparent">
        <v-responsive id="livre-bougie" height="200px"></v-responsive>

          <v-card-title>
            <h1 class="mb-2 light-blue--text">{{ $t('Excerpt.subTitle') }}</h1>
          </v-card-title>

        <transition name="mcScale" appear mode="in-out">
        <v-card-text primary-title>
            <div class="extraits extraits-first" v-html="$t('Excerpt.text')"></div>
        </v-card-text>
        </transition>
        <v-card-actions>
          <v-layout>
          <v-spacer></v-spacer>
            <v-flex xs2>
            <v-btn
            small
            outline
            round
            @click.native="$router.go(-1)"
            v-t="'Button.back'"> </v-btn>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs2>
          <v-btn
          small
          round
          href="https://www.editions-saint-honore.com/produit/gotiqvantica/"
          target="_blank"
          outline color="white"
          v-t="'Button.buy'"></v-btn>
          </v-flex>
          <v-spacer></v-spacer>
          </v-layout>

        </v-card-actions>
           </v-card>
           </transition>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ExtraitsView',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  head () {
    return {
      title: this.$t('Excerpt.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Excerpt.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Excerpt.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Excerpt.meta.title') },
        { name: 'twitter:description', content: this.$t('Excerpt.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/extraits' },
        { property: 'og:description', content: this.$t('Excerpt.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/livre-fb.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' }
      ]
    }
  }
}
</script>
