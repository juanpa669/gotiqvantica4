const getters = {
  drawer: (state) => state.appDrawer,
  currentLocale: state => state.i18n.locale || 'en'
}

export default getters
