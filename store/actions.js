// actions

const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      // const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  setLocale ({ commit }, payload) {
    commit('setLocale', payload)
  },
  toggleDrawer ({ commit }) {
    commit('toggleDrawer')
  },
  setDrawer ({ commit }, payload) {
    if (typeof payload !== 'boolean') return
    commit('setDrawer', payload)
  },
  setIsMobile ({ commit }, payload) {
    commit('setIsMobile', payload)
  },
  toggleMiniVariant ({ commit }) {
    commit('toggleMiniVariant')
  }
}

export default actions
