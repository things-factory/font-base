import { store } from '@things-factory/shell'
import { fetchFontList } from './actions/font'
import font from './reducers/font'

export default function bootstrap() {
  store.addReducers({
    font
  })

  store.dispatch(fetchFontList())
}
