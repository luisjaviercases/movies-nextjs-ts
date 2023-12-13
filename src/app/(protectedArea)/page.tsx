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
import React from 'react';

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
  const { setMovieIdContext } = useMovieContext();

  const moviesByGenre: Record<string, Movie[]> = {};
  const showLoadingSpinner = isLoadingMovies || isLoadingGenres || isLoadingUserMoviesList || isFetchingUserMoviesList;
  const filteredMovies = movies?.filter((movie) => userMoviesList?.includes(movie.id)) ?? [];

  useEffect(() => {
    refetchUserMoviesList();
  }, [refetchUserMoviesList]);

  movies?.forEach((movie) => {
    const genreId = movie.genre;
    if (!moviesByGenre[genreId]) {
      moviesByGenre[genreId] = [];
    }
    moviesByGenre[genreId].push(movie);
  });

  const comingSoonMovies = movies?.filter((movie) => new Date(movie.availableDate) > new Date()) ?? [];

  const highlightedMovies = useMemo(() => {
    return (movies || []).filter((movie) => movie.highlighted);
  }, [movies]);

  const handleGenreClick = (genreId: string) => {
    setSelectedGenre(selectedGenre === genreId ? null : genreId);
  };

  const saveDataToContext = (movieId: string) => {
    setMovieIdContext(movieId);
  };

  return (
    <>
      {showLoadingSpinner ? (
        <LoadingSpinner />
      ) : (
        <>
          <HeroSlider movies={highlightedMovies} onButtonClick={saveDataToContext} />
          <PageContainer>
            <div className={styles['filter-buttons']}>
              {genres?.map((genre, index) => (
                <div key={`filter-buttons-${genre.id}-${index}`} className={styles['filter-buttons__button-container']}>
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
              {genres?.map((genre, index) => (
                <React.Fragment key={`carousel-${genre.id}-${index}`}>
                  {selectedGenre === null || selectedGenre === genre.id ? (
                    <div className={styles['carousel-list__container']}>
                      <h2 className={styles['carousel-list__container__title']}>{genre.name}</h2>
                      <Carousel movies={moviesByGenre[genre.id]} onLinkClick={saveDataToContext} />
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
              {/* Show coming soon movies list */}
              {comingSoonMovies.length > 0 && (
                <div className={styles['carousel-list__container']}>
                  <h2 className={styles['carousel-list__container__title']}>Coming Soon</h2>
                  <Carousel
                    movies={comingSoonMovies}
                    imageWidth={400}
                    imageHeight={260}
                    onLinkClick={saveDataToContext}
                    showPoster
                  />
                </div>
              )}
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
