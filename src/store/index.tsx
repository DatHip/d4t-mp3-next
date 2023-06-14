import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { useUserSlice } from './slice/user';

const persistedReducer = persistReducer({
  key: 'd4t-mp3',
  storage,
  version: 1,
  migrate: state => {
    return Promise.resolve(state);
  },
}, rootReducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ReduxStore({ children } : any) {
  useUserSlice()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
