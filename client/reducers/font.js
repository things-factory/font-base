import WebFont from 'webfontloader'
import { UPDATE_FONT_LIST, CLEAR_FONT_LIST } from '../actions/font'

const font = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FONT_LIST:
      let newState = action.list

      let googles = []
      let customs = []
      let customFontCSS = ''

      newState.forEach(font => {
        switch (font.provider) {
          case 'google':
            googles.push(font.name)
            break
          case 'custom':
            customs.push(font.name)
            customFontCSS += `@font-face {
  font-family: '${font.name}';
  src: local('${font.name}')${font.uri ? `, url(${font.uri})` : ''};
}
` // TODO: format('woff2') 등 파일 형식에 맞는 포맷 추가
            break
        }
      })

      let style = document.head.querySelector('#custom-fonts')
      if (!style) {
        style = document.createElement('style')
        style.id = 'custom-fonts'
        style.type = 'text/css'
        document.head.appendChild(style)
      }
      style.innerHTML = customFontCSS

      // TODO: typekit 등 타 서비스 지원
      let WebFontConfig = {}
      if (googles.length) {
        WebFontConfig.google = {
          families: googles
        }
      }
      if (customs.length) {
        WebFontConfig.custom = {
          families: customs
        }
      }
      if (Object.keys(WebFontConfig).length) WebFont.load(WebFontConfig)

      return newState

    case CLEAR_FONT_LIST:
      return []

    default:
      return state
  }
}

export default font
