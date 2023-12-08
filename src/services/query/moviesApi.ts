import { Movie } from '@/models/movie';
import { baseApi } from '@/services/query/baseApi';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => ({
        url: 'films/movies',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
