import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UsersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://6479c974a455e257fa63c546.mockapi.io/`,
  }),
  tagTypes: ['users'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
    followTogle: builder.mutation({
      query: ({ id, followers }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: { followers },
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useFollowTogleMutation,
} = UsersApi;
