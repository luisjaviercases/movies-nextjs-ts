'use client';

import React, { FC } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Carousel.module.scss';
import { Movie } from '@/models/movie';

interface CarouselProps {
  movies: Movie[];
  onLinkClick?: (movieId: string) => void;
}

const Carousel: FC<CarouselProps> = ({ movies, onLinkClick }) => {
  const galleryRef = useHorizontalScroll();

  const handleMovieClick = (movieId: string) => {
    if (onLinkClick) onLinkClick(movieId);
  };

  return (
    <div className={styles.container} ref={galleryRef}>
      {movies.map((movie) => (
        <Link
          className={styles['container__item']}
          key={`carousel-link-${movie.id}`}
          href={`/movies/${movie.title}`}
          onClick={() => handleMovieClick(movie.id)}
          data-testid='carousel--link'>
          <Image
            className={styles['container__item__img']}
            width={261}
            height={386}
            src={movie.thumbnail}
            alt={`Image ${movie.title}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
