import Vue from 'vue'
import Snotify from 'vue-snotify'

Vue.use(Snotify, {
  global: {
    // Set Snotify maxOnScreen to 1 to not stack the toasts
    maxOnScreen: 1
  }
})

export default ({
  app
}, inject) => {
  // In this case, we added a plugin to our application and this
  // will give the opportunity to get it from middleware and on pages
  // in asyncData/fetch
  app.Snotify = Snotify
}
