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
import { FollowSlice } from './slice/followSlice';

const twetsPersistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['usersCollection'],
};

const followPersistConfig = {
  key: 'follow',
  storage: storage,
};

const persistedReducer = persistReducer(twetsPersistConfig, UsersSlice.reducer);
const followReducer = persistReducer(followPersistConfig, FollowSlice.reducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    follow: followReducer,
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
