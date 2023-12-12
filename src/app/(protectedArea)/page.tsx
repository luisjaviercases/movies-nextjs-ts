'use client';

import { useEffect, useMemo, useState } from 'react';
import Button from '@/components/Button/Button';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import PageContainer from '@/components/PageContainer/PageContainer';
import { Movie } from '@/models/movie';
import { useGetGenresQuery } from '@/services/query/genresApi';
import { useGetMoviesQuery } from '@/services/query/moviesApi';
import { useGetUserMoviesListQuery } from '@/services/query/userApi';
import { useMovieContext } from '@/context/MovieContext';
import styles from './page.module.scss';
import Carousel from '@/components/Carousel/Carousel';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { data: movies, isLoading: isLoadingMovies } = useGetMoviesQuery();
  const { data: genres, isLoading: isLoadingGenres } = useGetGenresQuery();
  const {
    data: userMoviesList,
    isLoading: isLoadingUserMoviesList,
    isFetching: isFetchingUserMoviesList,
    refetch: refetchUserMoviesList,
  } = useGetUserMoviesListQuery();
  const { setMovieIdContext, setListOfMovieIdsContext } = useMovieContext();

  useEffect(() => {
    refetchUserMoviesList();
  }, [refetchUserMoviesList]);

  const moviesByGenre: Record<string, Movie[]> = {};

  movies?.forEach((movie) => {
    const genreId = movie.genre;
    if (!moviesByGenre[genreId]) {
      moviesByGenre[genreId] = [];
    }
    moviesByGenre[genreId].push(movie);
  });

  const filteredMovies = movies?.filter((movie) => userMoviesList?.includes(movie.id)) ?? [];

  const highlightedMovies = useMemo(() => {
    return (movies || []).filter((movie) => movie.highlighted);
  }, [movies]);

  const handleGenreClick = (genreId: string) => {
    setSelectedGenre(selectedGenre === genreId ? null : genreId);
  };

  const saveDataToContext = (movieId: string) => {
    setMovieIdContext(movieId);
    setListOfMovieIdsContext(userMoviesList ?? []);
  };

  return (
    <>
      {isLoadingMovies || isLoadingGenres || isLoadingUserMoviesList || isFetchingUserMoviesList ? (
        <LoadingSpinner />
      ) : (
        <>
          <HeroSlider movies={highlightedMovies} onButtonClick={saveDataToContext} />
          <PageContainer>
            <div className={styles['filter-buttons']}>
              {genres?.map((genre) => (
                <div key={`filter-buttons-${genre.id}`} className={styles['filter-buttons__button-container']}>
                  <Button
                    variant={genre.id === selectedGenre ? 'primary' : 'secondary'}
                    onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                  </Button>
                </div>
              ))}
            </div>
            <div className={styles['carousel-list']}>
              {/* Show movies by genre */}
              {genres?.map((genre) => (
                <div key={`carousel-${genre.id}`}>
                  {selectedGenre === null || selectedGenre === genre.id ? (
                    <div className={styles['carousel-list__container']}>
                      <h2 className={styles['carousel-list__container__title']}>{genre.name}</h2>
                      <Carousel movies={moviesByGenre[genre.id]} onLinkClick={saveDataToContext} />
                    </div>
                  ) : null}
                </div>
              ))}
              {/* Show user movies list */}
              {filteredMovies.length > 0 && (
                <div className={styles['carousel-list__container']}>
                  <h2 className={styles['carousel-list__container__title']}>My List</h2>
                  <Carousel movies={filteredMovies} onLinkClick={saveDataToContext} />
                </div>
              )}
            </div>
          </PageContainer>
        </>
      )}
    </>
  );
}
