'use client';

import Button from '@/components/Button/Button';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import HeroImage from '@/components/HeroImage/HeroImage';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import PageContainer from '@/components/PageContainer/PageContainer';
import Rating from '@/components/Rating/Rating';
import { useMediaQuery } from 'react-responsive';
import { useMovieContext } from '@/context/MovieContext';
import { useGetMovieByIdQuery } from '@/services/query/moviesApi';
import { useGetGenresQuery } from '@/services/query/genresApi';
import { useGetUserMoviesListQuery } from '@/services/query/userApi';
import styles from './page.module.scss';

export default function MovieDetails() {
  const { movieId } = useMovieContext();
  const { data: genres } = useGetGenresQuery();
  const { data: userMoviesList } = useGetUserMoviesListQuery();
  const { data: movie, isLoading: isLoadingMovie } = useGetMovieByIdQuery(movieId);
  const isTabletMobileSmallDesktop = useMediaQuery({ query: '(max-width: 1024px)' });
  const isComingSoonMovie = movie?.availableDate ? new Date(movie.availableDate) > new Date() : false;

  const currentMovieGenreName = genres?.find((genre) => genre.id === movie?.genre)?.name;

  const actionButtons = () => {
    return (
      <>
        <Button variant='secondary'>Trailer</Button>
        {!isComingSoonMovie && <Button>Play</Button>}
      </>
    );
  };

  return (
    <>
      {isLoadingMovie ? (
        <LoadingSpinner />
      ) : (
        <>
          {movieId && movie ? (
            <>
              <div className={styles.hero}>
                <HeroImage src={movie.poster} alt={`${movie.title} poster film`} />
                {!isTabletMobileSmallDesktop && <div className={styles['hero__actions']}>{actionButtons()}</div>}
              </div>
              <PageContainer>
                {isTabletMobileSmallDesktop && <div className={styles.actions}>{actionButtons()}</div>}
                <div className={styles.content}>
                  <FavoriteButton movieId={movieId ?? null} moviesList={userMoviesList ?? []} />
                  <div className={styles['content__resume']}>
                    <div className={styles['content__resume__row']}>
                      <span className={styles['content__resume__row__title']}>Rating:</span>{' '}
                      <Rating value={movie.rating} />
                    </div>
                    <div className={styles['content__resume__row']}>
                      <span className={styles['content__resume__row__title']}>Cast:</span>{' '}
                      <span className={styles['content__resume__row__description']}>{movie.cast}</span>
                    </div>
                    <div className={styles['content__resume__row']}>
                      <span className={styles['content__resume__row__title']}>Genre:</span>{' '}
                      <span className={styles['content__resume__row__description']}>{currentMovieGenreName}</span>
                    </div>
                  </div>
                  <h1 className={styles['content__title']}>{movie.title}</h1>
                  <p className={styles['content__description']}>{movie.description}</p>
                </div>
              </PageContainer>
            </>
          ) : (
            <span>NO HAY DATOS</span>
          )}
        </>
      )}
    </>
  );
}
