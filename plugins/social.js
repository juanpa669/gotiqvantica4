import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)

export default ({
  app
}, inject) => {
  // In this case, we added a plugin to our application and this
  // will give the opportunity to get it from middleware and on pages
  // in asyncData/fetch
  app.SocialSharing = SocialSharing
}
