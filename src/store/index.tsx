import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useUserSlice } from "./slice/user";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistedReducer = persistReducer(
  {
    key: "d4t-mp3",
    storage,
    version: 1,
    migrate: (state) => {
      return Promise.resolve(state);
    },
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: true,
});

export const persistor = persistStore(store);

export default function ReduxStore({ children }: any) {
  useUserSlice();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
