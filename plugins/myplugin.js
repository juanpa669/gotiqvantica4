export default ({
  app
}) => {
  // Get localized path for homepage
  // console.log({ app })
  const localePath = app.i18n.localePath('index')
  // Get path to switch current route to French
  const switchLocalePath = app.i18n.switchLocalePath('fr')
  console.log('localePath : ' + localePath, ' | switchLocalePath : ' + switchLocalePath)
}
