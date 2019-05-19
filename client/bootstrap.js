import { store } from '@things-factory/shell'
import font from './reducers/font'

export default function bootstrap() {
  store.addReducers({
    font
  })
}
