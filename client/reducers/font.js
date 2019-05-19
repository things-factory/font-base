import WebFont from 'webfontloader'
import { UPDATE_FONT_LIST, CLEAR_FONT_LIST } from '../actions/font'

const fonts = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FONT_LIST:
      let newState = action.list

      let googles = newState.filter(font => font.provider === 'google')
      if (googles.length > 0) {
        WebFont.load({
          google: {
            families: googles.map(font => font.name)
          }
        })
      }

      return newState

    case CLEAR_FONT_LIST:
      return []

    default:
      return state
  }
}

export default fonts
