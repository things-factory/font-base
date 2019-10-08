import { store } from '@things-factory/shell'
import { fetchFontList } from './actions/font'
import font from './reducers/font'
import { auth } from '@things-factory/auth-base'

export default function bootstrap() {
  store.addReducers({
    font
  })

  auth.on('signin', () => {
    store.dispatch(fetchFontList())
  })
}
