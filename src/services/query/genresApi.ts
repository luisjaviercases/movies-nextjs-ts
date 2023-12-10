import { Genre } from '@/models/genre';
import { baseApi } from '@/services/query/baseApi';

export const genresApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], void>({
      query: () => ({
        url: '/films/genres',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetGenresQuery } = genresApi;
