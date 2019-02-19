const state = () => ({
  locale: 'en',
  locales: ['en', 'fr', 'it', 'de', 'es']
})

const mutations = {
  setLocale (state, payload) {
    state.locale = payload
  },
  setMessages (state, payload) {
    state.messages = payload
  }
}

const getters = {
  currentLocale: (state) => state.locale
}

export default {
  state,
  mutations,
  getters
}
