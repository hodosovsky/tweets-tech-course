import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TweetsApi } from './api/tweetsApi';

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
import { TweetsSlice } from './slice/tweetsSlice';

const twetsPersistConfig = {
  key: 'tweets',
  storage: storage,
  whitelist: ['myTweets'],
};

const persistedReducer = persistReducer(
  twetsPersistConfig,
  TweetsSlice.reducer
);

export const store = configureStore({
  reducer: {
    tweets: persistedReducer,
    [TweetsApi.reducerPath]: TweetsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    TweetsApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
