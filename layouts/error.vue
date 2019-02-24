<template>
<v-container fluid grid-list-xs>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
    <h1 v-if="error.statusCode === 404" v-html="$t('Errors.title-404')"></h1>
    <h1 v-else>An error occurred</h1>
    <p  v-html="$t('Errors.text-404')"></p>
    </v-flex>
  </v-layout>
  <v-layout wrap align-center justify-center>
    <v-flex xs12 sm6 lg4 v-for="item in items" :key="item.id">
      <AppHoverCard :title="item.name" :url="item.url" :stars="item.stars" :image="item.image"/>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  data () {
    return {
      items: [
        { id: 1, name: this.$t('Toolbar.items[0].title'), url: 'index', stars: 5, image: '/img/main/contact/chevalier.png' },
        { id: 2, name: this.$t('Toolbar.items[1].title'), url: 'gotiqvantica', stars: 5, image: '/img/main/book/livre-320w@2x.jpg' },
        { id: 3, name: this.$t('Toolbar.items[8].title'), url: 'retable', stars: 5, image: '/img/main/book/retable.png' }
      ]
    }
  }
}
</script>
