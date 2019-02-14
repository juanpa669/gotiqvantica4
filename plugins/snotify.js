import Vue from 'vue'
import Snotify from 'vue-snotify'

Vue.use(Snotify, {
  global: {
    // Set Snotify maxOnScreen to 1 to not stack the toasts
    maxOnScreen: 1
  }
})
