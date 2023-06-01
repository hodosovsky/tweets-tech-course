import { createSlice } from '@reduxjs/toolkit';
import { TweetsApi } from '../api/tweetsApi';

const initialState = {
  myTweets: [1, 2, 3],
};

export const TweetsSlice = createSlice({
  name: 'tweets',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      TweetsApi.endpoints.getTweets.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const getTweets = state => state.tweets.myTweets;
