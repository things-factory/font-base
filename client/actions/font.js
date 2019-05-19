import * as client from '../graphql-client'

export const UPDATE_FONT_LIST = 'UPDATE_FONT_LIST'
export const CLEAR_FONT_LIST = 'CLEAR_FONT_LIST'

export const fetchFontList = () => async dispatch => {
  try {
    const data = await client.fetchFontList()

    dispatch({
      type: 'FONT-LIST',
      list: data.fonts
    })
  } catch (error) {
    dispatch({
      type: 'CLEAR-FONT-LIST'
    })
  }
}

export const createFont = font => async dispatch => {
  try {
    const data = await client.createFont(font)

    const createdFont = data.createFont

    dispatch(fetchFontList())
  } catch (error) {
    console.error(error)
  }
}

export const updateFont = font => async dispatch => {
  try {
    const data = await client.updateFont(font)

    const updatedFont = data.updateFont

    dispatch(fetchFontList())
  } catch (error) {
    console.error(error)
    /* TODO error */
  }
}

export const deleteFont = font => async dispatch => {
  try {
    var { name } = font

    const data = await client.deleteFont(name)

    dispatch(fetchFontList())
  } catch (error) {
    console.error(error)
    /* TODO error */
  }
}
