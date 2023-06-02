import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userFollow: [],
};

export const FollowSlice = createSlice({
  name: 'follow',
  initialState,
  reducers: {
    setFollow: (state, { payload }) => void (state.userFollow = payload),
  },
});

export const { setFollow } = FollowSlice.actions;
export const getUserFollow = state => state?.follow?.userFollow;
