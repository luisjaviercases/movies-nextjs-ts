'use client';

import { useMovieContext } from '@/context/MovieContext';

export default function MovieDetails() {
  const { movieId } = useMovieContext();

  return (
    <>
      <h1>Movie details {movieId}</h1>
    </>
  );
}
