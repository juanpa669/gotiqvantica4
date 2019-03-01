<template>
<v-container>
<!-- ********** template ******************* -->
<v-layout justify-center>
    <v-flex xs12 sm6>
      <h1 v-t="'Home.title'"></h1>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon @click="onClick"></v-toolbar-side-icon>
        <v-toolbar-title></v-toolbar-title>
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
              <v-card nuxt :to="localePath(card.url)" @click.native="onCardClick(card.id)">
                <v-img
                  :src="card.src"
                  height="275px"
                  :alt="card.title"
                  :title="card.title"
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
                <v-flex v-if="card.id !== 4">
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex v-else>
                  <div class="fb-like"
                    fb-like data-href="https://www.facebook.com/Rinarce/"
                    data-layout="button_count"
                    data-action="like"
                    data-size="large"
                    data-show-faces="true"
                    data-share="true"
                    ></div>
                </v-flex>
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
            <v-layout wrap>
            <v-flex xs12 text-xs-center pa-4>
              <h4>Partager la page du site</h4>
              <div class="fb-like"
              fb-like data-href="https://cathedrale-gothique.com"
              data-layout="button_count"
              data-action="like"
              data-size="large"
              data-show-faces="true"
              data-share="true"
              ></div>
            </v-flex>
          </v-layout>
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
      { id: 1, title: 'Rina Sestito Arce', src: '/img/main/contact/chevalier.png', flex: 12, textcolor: 'white', url: 'author', ratio: 1 },
      { id: 2, title: 'Gotiqvantica', src: '/img/main/book/livre-320w.jpg', flex: 12, textcolor: 'white', url: 'gotiqvantica', ratio: 2 },
      { id: 3, title: 'Le retable d’Issenheim', src: '/img/main/book/retable.png', flex: 12, textcolor: 'white', url: 'retable', ratio: 2 },
      { id: 4, title: 'Rejoignez-nous sur Facebook', src: '/img/main/summary/livrecoeur-768.jpg', flex: 12, textcolor: 'white', url: 'index', ratio: 1 }
    ]
  }),
  head () {
    return {
      title: this.$t('Home.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Home.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Home.meta.keywords') },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Home.meta.title') },
        { name: 'twitter:description', content: this.$t('Home.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://cathedrale-gothique.com' },
        { property: 'og:description', content: this.$t('Home.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/summary/livrecoeur-768.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
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
    },
    onCardClick (id) {
      if (id === 4) {
        if (confirm('Voulez-vous vous rendre sur la page Facebook ?')) {
          window.location = 'https://www.facebook.com/Rinarce/'
        }
      }
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
  span {
    font-family: papyrus!important;
    border-radius: 50px;
  }
</style>
