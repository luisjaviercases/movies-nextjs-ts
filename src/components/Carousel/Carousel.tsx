'use client';

import React, { FC } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Carousel.module.scss';
import { Movie } from '@/models/movie';

interface CarouselProps {
  movies: Movie[];
  imageWidth?: number;
  imageHeight?: number;
  showPoster?: boolean;
  onLinkClick?: (movieId: string) => void;
}

const Carousel: FC<CarouselProps> = ({
  movies,
  onLinkClick,
  imageWidth = 261,
  imageHeight = 386,
  showPoster = false,
}) => {
  const galleryRef = useHorizontalScroll();

  const handleMovieClick = (movieId: string) => {
    if (onLinkClick) onLinkClick(movieId);
  };

  return (
    <div className={styles.container} ref={galleryRef}>
      {movies.map((movie, index) => (
        <Link
          className={styles['container__item']}
          key={`carousel-link-${movie.id}-${index}`}
          href={`/movies/${movie.title}`}
          onClick={() => handleMovieClick(movie.id)}
          data-testid='carousel--link'>
          <Image
            className={styles['container__item__img']}
            width={imageWidth}
            height={imageHeight}
            src={showPoster ? movie.poster : movie.thumbnail}
            alt={`Image ${movie.title}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
