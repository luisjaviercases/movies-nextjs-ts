import { Movie } from '@/models/movie';
import { baseApi } from '@/services/query/baseApi';

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => ({
        url: '/films/movies',
        method: 'GET',
      }),
    }),
    getMovieById: builder.query<Movie, string | null>({
      query: (id) => ({
        url: `/films/movies/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
