<template lang="pug">
  v-footer(app color="black" id="footer" absolute fixed)
    v-layout(row wrap align-center text-xs-center id="footerDiv")
      v-flex(xs12 md4  mt-1 id="design")
        small {{ $t('Footer.design') }} &copy;

      v-flex(xs12 md4  mt-1 id="website")
         small {{ $t('Footer.website') }} &copy;
      v-flex(xs12 md4  mt-1 id="music")
        small ♫ A. Michel &nbsp; &copy;
          a(href='https://zen-waves.com/') https://zen-waves.com
    audio(id="player" controls loop muted autoplay)
      source(src="media/wave.ogg" type="audio/ogg")
      source(src="media/wave.mp3" type="audio/mpeg")
    div(style="height:7rem")
</template>
<script>
  export default {
    name: 'FooterView',

    data () {
      return {
        fixed: true,
        isAudio: true,
        audioPlayer: null,
        volume: 0.050
      }
    },

    watch: {
    },

    mounted () {
      this.$_bus.$on('onAudioToggle', this.toggleAudio)
      this.$_bus.$on('volumeChanged', this.setAudioVolume)
      this.audioPlayer = document.querySelector('audio')
      this.audioPlayer.muted = false
      this.audioPlayer.loop = true
      this.audioPlayer.volume = 0.050
      this.audioPlayer.style.display = 'none'
    },

    methods: {
      toggleAudio () {
        if (this.isAudio) {
          this.audioPlayer.pause()
          this.isAudio = false
          this.$_bus.$emit('audioPlay', false)
        } else {
          this.audioPlayer.play()
          this.isAudio = true
          this.$_bus.$emit('audioPlay', true)
        }
      },

      setAudioVolume (volume) {
        this.audioPlayer.volume = volume
        return this.audioPlayer.volume
      }
    }
  }
</script>
<style lang="css" scoped>
audio {
  display: none;
}

@media screen and (max-height: 720px) {
  #footerDiv {
  padding-top: 5rem!important;
  }
}

</style>
