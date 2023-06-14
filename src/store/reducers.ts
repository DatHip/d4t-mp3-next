import { combineReducers } from 'redux';
import { userReducer } from './slice/user';
import { themeReducer } from './slice/theme';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
});

export default rootReducer;
