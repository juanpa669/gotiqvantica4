<template>
<v-container>
<!-- ********** template ******************* -->
<v-layout justify-center>
    <v-flex xs12 sm6>
      <v-toolbar color="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title v-t="'Home.title'"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card>
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
              <v-card nuxt :to="`${$i18n.locale}/${card.url}`">
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
    locales: ['en', 'fr', 'es', 'it', 'es']
  },
  data: () => ({
    cards: [
      { title: 'Rina Sestito Arce', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12, textcolor: 'white', url: 'index', ratio: 1 },
      { title: 'Gotiqvantica', src: '/img/main/book/livre-320w.jpg', flex: 12, textcolor: 'white', url: 'gotiqvantica', ratio: 2 },
      { title: 'Le retable d’Issenheim', src: '/img/main/book/retable.png', flex: 12, textcolor: 'black', url: 'retable', ratio: 2 }
    ]
  }),
  head () {
    return {
      title: this.$t('Home.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Home.meta.description') },
        { name: 'keywords', content: this.$t('Home.meta.keywords') }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentLocale: 'currentLocale'
    })
  },
  mounted () {
    // return this.$store.commit('i18n/setLocale', 'en')
  }
}
</script>
<style lang="css" scoped>
  .photo {
    border-radius: 50%;

  }
</style>
