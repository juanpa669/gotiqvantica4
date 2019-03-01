<template>
<v-flex xs1 mr-0>
      <v-speed-dial
      v-cloak
      v-model="fab"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"

      >
      <v-btn
        slot="activator"
        color="black"
        small
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>share</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    <social-sharing
    url="https://cathedrale-gothique.com"
    :title="$t('bookTitle')"
    :description="$t('bookDescription')"
    :quote="$t('Home.sentence')"
    :hashtags="$t('hashTags')"
    twitter-user="RinarceS"
    inline-template
    network-tag="p"
    media="https://cathedrale-gothique.com/img/main/GOTIQVANTICA.jpg">
  <v-flex xs12 class="mcSocial black">
      <network network="email">
        <v-icon v-text="'$vuetify.icons.mail'" /> Email

      </network>
      <network network="facebook">
        <v-icon v-text="'$vuetify.icons.facebook'" /> Facebook
      </network>
      <network network="instagram">
         <v-icon v-text="'$vuetify.icons.instagram'" /> Instagram
      </network>
      <network network="twitter">
        <v-icon v-text="'$vuetify.icons.twitter'" /> Twitter
      </network>

      </v-flex>

      </social-sharing>
      </v-speed-dial>
</v-flex>
</template>

<script>
import SocialSharing from 'vue-social-sharing'
export default {
  name: 'SocialSpeedDial',
  components: {
    SocialSharing
  },
  data: () => ({
    fab: false,
    top: false,
    right: true,
    bottom: false,
    left: false,
    direction: 'bottom',
    transition: 'slide-y-reverse-transition',
    hover: false
  })
}
</script>
