'use client';

import { useMemo, useState } from 'react';
import Button from '@/components/Button/Button';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import PageContainer from '@/components/PageContainer/PageContainer';
import { Movie } from '@/models/movie';
import { useGetGenresQuery } from '@/services/query/genresApi';
import { useGetMoviesQuery } from '@/services/query/moviesApi';
import styles from './page.module.scss';
import Carousel from '@/components/Carousel/Carousel';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { data: movies, isLoading: isLoadingMovies } = useGetMoviesQuery();
  const { data: genres, isLoading: isLoadingGenres } = useGetGenresQuery();

  const moviesByGenre: Record<string, Movie[]> = {};

  movies?.forEach((movie) => {
    const genreId = movie.genre;
    if (!moviesByGenre[genreId]) {
      moviesByGenre[genreId] = [];
    }
    moviesByGenre[genreId].push(movie);
  });

  const highlightedMovies = useMemo(() => {
    return (movies || []).filter((movie) => movie.highlighted);
  }, [movies]);

  const handleGenreClick = (genreId: string) => {
    setSelectedGenre(selectedGenre === genreId ? null : genreId);
  };

  return (
    <>
      {isLoadingMovies || isLoadingGenres ? (
        <LoadingSpinner />
      ) : (
        <>
          <HeroSlider movies={highlightedMovies} />
          <PageContainer>
            <div className={styles['filter-buttons']}>
              {genres?.map((genre) => (
                <div key={genre.id} className={styles['filter-buttons__button-container']}>
                  <Button
                    variant={genre.id === selectedGenre ? 'primary' : 'secondary'}
                    onClick={() => handleGenreClick(genre.id)}>
                    {genre.name}
                  </Button>
                </div>
              ))}
            </div>
            <div className={styles['carousel-list']}>
              {genres?.map((genre) => (
                <>
                  {selectedGenre === null || selectedGenre === genre.id ? (
                    <div key={genre.id} className={styles['carousel-list__container']}>
                      <h2 className={styles['carousel-list__container__title']}>{genre.name}</h2>
                      <Carousel movies={moviesByGenre[genre.id]} />
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          </PageContainer>
        </>
      )}
    </>
  );
}
