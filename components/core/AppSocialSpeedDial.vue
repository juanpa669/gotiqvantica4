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
    url="https://rina-sestito-arce.com/"
    :title="$t('bookTitle')"
    :description="$t('bookDescription')"
    :quote="$t('Home.sentence1')"
    :hashtags="$t('hashTags')"
    twitter-user="RinarceS"
    inline-template
    network-tag="p"
    media="https://rina-sestito-arce.com/img/main/GOTIQVANTICA.jpg">
  <div class="mcSocial black">
    <v-flex black pb-4 light text-xs-center> {{ $t('socialShare') }}
      <v-icon dark>public</v-icon>

    </v-flex>


      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      </div>
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
