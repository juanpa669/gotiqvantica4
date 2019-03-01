<template lang="pug">
  v-toolbar(color="black" dark fixed app)
    v-toolbar-side-icon(v-cloak @click.prevent.stop="onToggleDrawer")
    v-btn(id="amazonBtn" icon @click.native.prevent.stop="onPurchase")
        v-icon shopping_cart
    AppLanguagesSelect(@localeChanged="onLocaleChange")
    v-btn(right icon @click.native="onAudioToggle")
      v-icon(v-show="playmusic") pause_circle_outline
      v-icon(v-show="!playmusic") play_circle_outline
      v-spacer
</template>
<script>
  import AppSocialSpeedDial from './AppSocialSpeedDial'
  import AppLanguagesSelect from './AppLanguagesSelect'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      AppLanguagesSelect,
      AppSocialSpeedDial
    },

    data: () => ({
      playmusic: true,
      volume: 0.050
    }),

    computed: {
      ...mapState(['appMinivariant', 'appDrawer']),
      items () {
        return this.$t('Toolbar.items')
      }
    },

    watch: {
      volume (val) {
        if (val) {
          this.$_bus.$emit('volumeChanged', this.volume)
        }
      }
    },

    mounted () {
      this.$_bus.$on('musicStopped', this.musicState)
      this.$_bus.$on('audioPlay', this.musicState)
    },

    methods: {
      ...mapMutations('toggleDrawer', 'toggleMiniVariant'),
      onToggleDrawer () {
        this.$emit('toggleDrawer')
        // return this.$store.dispatch('setDrawer', true)
      },
      onClick (e) {
        this.$router.push(e.to)
      },
      onPurchase () {
        // console.log('emit onPurchase', 'AppToolbar')
        let product = this.$route.name
        this.$emit('onPurchase', product)
        return true
      },
      onAudioToggle () {
        this.$_bus.$emit('onAudioToggle')
      },
      musicState (val) {
        if (val === true) {
          this.playmusic = true
        }
        if (val === false) {
          this.playmusic = false
        }
      },
      onLocaleChange (value) {
        this.$emit('onLocaleChange', value)
      }
    }
  }
</script>
