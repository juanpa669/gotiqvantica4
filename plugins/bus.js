import Vue from 'vue'

const Bus = new Vue()

Vue.prototype.$_bus = Bus

// export default Bus

export default ({
  app
}, inject) => {
  // In this case, we added a plugin to our application and this
  // will give the opportunity to get it from middleware and on pages
  // in asyncData/fetch
  app.$_bus = Bus
}
