import Vue from 'vue'
import VGrid from 'vuetify/es5/components/VGrid'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VHover,
  VCard,
  VToolbar,
  VIcon,
  VBtn
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globall
library.add(fas) // Include needed icons.

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'mail': 'fas fa-envelope',
    'facebook': 'fab fa-facebook-f',
    'google': 'fab fa-google-plus',
    'pinterest': 'fab fa-pinterest',
    'twitter': 'fab fa-twitter'
  },
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VHover,
    VCard,
    VGrid,
    VToolbar,
    VIcon,
    VBtn
  },
  directives: {
    Ripple
  }
})
