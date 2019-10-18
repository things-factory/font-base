import { config } from '@things-factory/env'
import { fetch } from 'apollo-env'

const address = 'https://www.googleapis.com/webfonts/v1/webfonts?key='

export async function getAllGoogleFonts() {
  var key = config.get('googleFontAPIKey')
  var response = await fetch(`${address}${key}`)
  if (response.ok) {
    return (await response.json()).items.map(font => font.family)
  } else {
    return []
  }
}
