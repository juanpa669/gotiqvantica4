// actions

const actions = {
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
