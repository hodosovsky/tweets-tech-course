import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { UsersApi } from './api/usersApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { UsersSlice } from './slice/usersSlice';

const twetsPersistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['usersCollection'],
};

const persistedReducer = persistReducer(twetsPersistConfig, UsersSlice.reducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    UsersApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
