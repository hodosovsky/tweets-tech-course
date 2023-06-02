import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const UsersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://643abc9190cd4ba5630062e8.mockapi.io`,
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
      query: ({ id, followers, isFollowed }) => {
        console.log('id:', followers);
        return {
          url: `/users/${id}`,
          method: 'PUT',
          body: { followers, isFollowed },
        };
      },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useFollowTogleMutation,
} = UsersApi;
