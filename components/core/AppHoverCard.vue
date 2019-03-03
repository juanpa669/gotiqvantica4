<template lang="pug">
  v-hover
    v-card(
      v-if="!externalLink"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
      nuxt
      exact
      :to="localePath(url)"
    )
      v-img(
       :alt="title" :title="title"
        :aspect-ratio="16/9"
        :src="image"
      )
      v-card-title
        div
          span.headline {{ title }}
          div.d-flex
            v-rating(
              :value="stars"
              color="yellow"
              dense
              half-increments
              readonly
              size="14"
            )
            div(class="ml-2 grey--text text--darken-2")
              span {{ stars }}
              span ({{ reviews }})
              v-spacer
      v-btn(icon class="mr-0")
        v-icon mdi-chevron-right
      v-card-text
        slot(name="cardText") Default text
      v-card-actions
        slot(name="actions")

    v-card(
      v-else
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
      exact
      :href="url"
      target="_blank"
    )
      v-img(
       :alt="title" :title="title"
        :aspect-ratio="16/9"
        :src="image"
      )
      v-card-title
        div
          span.headline {{ title }}
          div.d-flex
            v-rating(
              :value="stars"
              color="yellow"
              dense
              half-increments
              readonly
              size="14"
            )
            div(class="ml-2 grey--text text--darken-2")
              span {{ stars }}
              span ({{ reviews }})

      v-card-actions
        slot(name="actions")
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
      slot(name="hideText")
        v-slide-y-transition
          v-card-text(v-show="show")
            slot(name="text")
              p a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

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
    externalLink: {
      type: Boolean,
      required: false,
      default: false
    },
    image: {
      type: String,
      required: true
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style lang="css" scoped>
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects!important;
  color: white!important;
}
</style>
