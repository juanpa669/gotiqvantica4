<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/img/main/author-64.jpg" alt="Vuetify.js" class="mb-5 photo" />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to Rina Sestito Arce WEbsite</v-card-title>
        <v-card-text>
            <h1>content here</h1>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="css" scoped>
  .photo {
    border-radius: 50%;

  }
</style>
