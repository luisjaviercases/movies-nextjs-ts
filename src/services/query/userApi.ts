import { baseApi } from '@/services/query/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMovieToUserList: builder.mutation<{ myList: string[] }, { id: string }>({
      query: (body) => {
        return {
          url: '/films/user/list',
          method: 'POST',
          body,
        };
      },
    }),
    removeMovieFromUserList: builder.mutation<{ myList: string[] }, string>({
      query: (id) => {
        return {
          url: `/films/user/list/${id}`,
          method: 'DELETE',
        };
      },
    }),
    getUserMoviesList: builder.query<string[], void>({
      query: () => ({
        url: '/films/user',
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddMovieToUserListMutation, useRemoveMovieFromUserListMutation, useGetUserMoviesListQuery } = userApi;
