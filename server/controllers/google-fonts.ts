import { config } from '@things-factory/env'
import { fetch } from 'apollo-env'

const address = 'https://www.googleapis.com/webfonts/v1/webfonts?key='

export async function getAllGoogleFonts() {
  var key = config.get('googleFontAPIKey')
  if (!key) {
    console.warn(
      "[things-factory/font-base] Could not read API key. Please check 'googleFontAPIKey' property in your configuration."
    )
    return []
  }
  var response = await fetch(`${address}${key}`)
  if (response.ok) {
    return (await response.json()).items.map(font => font.family)
  } else {
    let errorMsg = ''
    errorMsg += `[things-factory/font-base] ${response.status} - ${response.statusText}.`
    switch (response.status) {
      case 400:
        errorMsg += '\nYour API key may be incorrect or expired.'
        break
    }
    console.warn(errorMsg)
    return []
  }
}
