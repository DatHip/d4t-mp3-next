import { combineReducers } from 'redux'
import { userReducer } from './slice/user'
import { themeReducer } from './slice/theme'
import { queueReducer } from './slice/queue'
import { currentInfoReducer } from './slice/currentInfo'
import { settingReducer } from './slice/setting'

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  queue: queueReducer,
  currentInfo: currentInfoReducer,
  setting: settingReducer
})

export default rootReducer
