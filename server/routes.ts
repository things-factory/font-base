import { getAllGoogleFonts } from './controllers/google-fonts'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  var paths = ['all-google-fonts']

  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-route' as any, (app, routes) => {
  routes.get('/all-google-fonts', async (context, next) => {
    context.type = 'application/json'
    context.body = await getAllGoogleFonts()
  })
})
