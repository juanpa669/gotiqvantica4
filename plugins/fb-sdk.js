/* global FB */

window.fbAsyncInit = (function () {
  FB.init({
    appId: '2008683959352956',
    cookie: true,
    xfbml: true,
    version: '{api-version}'
  })

  FB.AppEvents.logPageView()
}(function (d, s, id) {
  var js = d.getElementsByTagName(s)[0]
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk')))
