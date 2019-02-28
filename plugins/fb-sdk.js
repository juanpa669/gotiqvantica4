let vm = this
let FB = {}

window.fbAsyncInit = () => {
  FB.init({
    appId: '2008683959352956',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  })
  FB.getLoginStatus(function (response) {
    vm.statusChangeCallback(response)
  })
}

(function (d, s, id) {
  let js = d.getElementsByTagName(s)[0]
  let fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = '//connect.facebook.net/fr_FR/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))
