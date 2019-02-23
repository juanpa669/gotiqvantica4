<template lang="pug">
  v-layout
    v-navigation-drawer(
      v-cloak
      ref="drawer"
      hide-overlay
      floating
      fixed
      clipped
      class="black"
      v-model="drawerValue"
      app
    )
      v-list(v-cloak)
        v-toolbar(flat class="transparent")
          v-list.pt-2.transparent
            v-list-tile(avatar)
              v-list-tile-avatar
                img(src="/img/main/author-64.jpg")

              v-list-tile-content
                v-list-tile-title Rina SESTITO ARCE

            v-list-tile(
              v-for="(item, i) in items"
              :key="i"
              exact
              nuxt
              :to="localePath({name: item.name},$i18n.locale)"
              ripple
              active-class="mc-active-class"
              :class="{'specialLinks': item.name === 'retable' || item.name === 'gotiqvantica'}"
            )
              v-list-tile-action
                v-icon {{ item.icon }}
              v-list-tile-content
                v-list-tile-title {{ item.title }}


</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapState(['appDrawer', 'currentLocale']),
      drawerValue: {
        get (state) { return state.appDrawer },
        set (val) { return this.setDrawer(val) }
      },
      items () { return this.$t('Toolbar.items', this.currentLocale) }
    },
    methods: {
      ...mapMutations({
        setDrawer: 'setDrawer'
      })
    }
  }
</script>

<style lang="css" scoped>
  .specialLinks {
    color: #00bfff!important;
  }
</style>
