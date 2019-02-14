<template lang="pug">
  v-content
    v-container.fluid
      v-layout(
        align-center
        justify-center
      )
        vue-snotify
        transition(:name="transitionName" mode="out-in")
          router-view
</template>
<script>
  export default {
    name: 'AppView',

    computed: {
      transitionName () {
        return this.$route.params.transition
      }
    },

    methods: {
      swipe (direction) {
        return this.$_bus.$emit('onSwipe', direction)
      }
    }
  }
</script>
