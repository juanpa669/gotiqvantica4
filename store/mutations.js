// import * as type from './mutation-types'
// import {i18n, loadLanguage} from '@/i18n'

const mutations = {
  setIsMobile (state, payload) {
    state.isMobile = payload
  },
  setLocale (state, payload) {
    state.locale = payload
  },
  setMessages (state, payload) {
    state.locale = payload
  },
  setDrawer (state, payload) {
    state.appDrawer = payload
  },
  setAuth (state, payload) {
    state.auth = payload
  },
  toggleDrawer (state) {
    state.appDrawer = !state.appDrawer
  },
  toggleMiniVariant (state) {
    state.appMinivariant = !state.appMinivariant
  }
}

export default mutations
