import { createSlice } from '@reduxjs/toolkit';
import { UsersApi } from '../api/usersApi';

const initialState = {
  usersCollection: [],
};

export const UsersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      UsersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.usersCollection = payload;
      }
    );
  },
});

export const getUsersCollection = state => state.users.usersCollection;
