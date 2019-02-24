<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
      nuxt
      :to="localePath(url)"

    >
      <v-img
        :aspect-ratio="16/9"
        :src="image"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">{{ title }}</span>
          <div class="d-flex">
            <v-rating
              :value="stars"
              color="yellow"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ stars }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: 'HoverCard',
  props: {
    title: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: false
    },
    reviews: {
      type: Number,
      required: false
    },
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>
