'use client';

import Sample from '@/components/Sample/Sample';
import { useMovieContext } from '@/context/MovieContext';
import { useGetMoviesQuery } from '@/services/query/moviesApi';
import Link from 'next/link';

export default function Home() {
  const { data: movies } = useGetMoviesQuery();
  const { setMovieContext } = useMovieContext();

  console.log('Movies', movies);

  const handleMovieClick = (movieId: number) => {
    setMovieContext(movieId);
  };

  return (
    <>
      <h1>Home page</h1>
      <Link href={`/movies/${'Movie title 1'}`} onClick={() => handleMovieClick(1000)}>
        Movie details 1
      </Link>
      <Link href={`/movies/${'Movie title 2'}`} onClick={() => handleMovieClick(1001)}>
        Movie details 2
      </Link>
      <Sample />
    </>
  );
}
