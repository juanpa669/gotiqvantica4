/* global FB */
import Vue from 'vue'

Vue.prototype.$initFbSDK = _ => {
  FB.init({
    appId: '2008683959352956',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  })
}
