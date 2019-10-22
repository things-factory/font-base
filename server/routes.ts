import { getAllGoogleFonts } from './controllers/google-fonts'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  fallbackOption.whiteList.push('/all-google-fonts')
})

process.on('bootstrap-module-route' as any, (app, routes) => {
  routes.get('/all-google-fonts', async (context, next) => {
    context.type = 'application/json'
    context.body = await getAllGoogleFonts()
  })
})
