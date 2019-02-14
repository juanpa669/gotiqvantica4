import Vue from 'vue'
import VGrid from 'vuetify/es5/components/VGrid'
import '@fortawesome/fontawesome-free/css/all.css'

import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VIcon,
  VBtn
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  iconfont: 'fa',
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VGrid,
    VToolbar,
    VIcon,
    VBtn
  },
  directives: {
    Ripple
  }
})
