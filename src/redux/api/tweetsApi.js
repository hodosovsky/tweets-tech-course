import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const TweetsApi = createApi({
  reducerPath: 'tweetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://643abc9190cd4ba5630062e8.mockapi.io`,
  }),
  tagTypes: ['tweets'],
  endpoints: builder => ({
    getTweets: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTweetsQuery, useLazyGetTweetsQuery } = TweetsApi;
