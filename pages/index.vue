<template>
<v-container>
<!-- ********** template ******************* -->
<v-layout justify-center>
    <v-flex xs12 sm6>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon @click="onClick"></v-toolbar-side-icon>
        <v-toolbar-title v-t="'Home.title'"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>public</v-icon>
        </v-btn>
      </v-toolbar>
      <v-hover>
      <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`">
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="[{ [`xs${card.flex}`]: true, [`lg${card.flex/card.ratio}`]: true }]"
            >
              <v-card nuxt :to="localePath(card.url)">
                <v-img
                  :src="card.src"
                  height="275px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span :class="`headline ${card.textcolor}--text`" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
<!-- ********** template ******************* -->
</v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

  name: 'IndexPage',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data: () => ({
    cards: [
      { title: 'Rina Sestito Arce', src: '/img/main/contact/chevalier.png', flex: 12, textcolor: 'white', url: 'author', ratio: 1 },
      { title: 'Gotiqvantica', src: '/img/main/book/livre-320w.jpg', flex: 12, textcolor: 'white', url: 'gotiqvantica', ratio: 2 },
      { title: 'Le retable d’Issenheim', src: '/img/main/book/retable.png', flex: 12, textcolor: 'white', url: 'retable', ratio: 2 }
    ]
  }),
  head () {
    return {
      title: this.$t('Home.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Home.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Home.meta.keywords') },
        { name: 'twitter:card',  content: this.$t('Home.meta.description') },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Home.meta.title') },
        { name: 'twitter:description', content: this.$t('Home.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'book' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/' },
        { property: 'og:description', content: this.$t('Home.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'fb:app_id', content: '2008683959352956' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentLocale: 'currentLocale'
    })
  },
  methods: {
    onClick () {
      this.$store.commit('toggleDrawer')
    }
  }
}
</script>
<style lang="css" scoped>
  .photo {
    border-radius: 50%;

  }
  .headline {
    background-color:rgba(0,0,0,.5);
    padding: 10px;
  }
</style>
