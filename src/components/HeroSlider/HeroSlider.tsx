'use client';

import { Movie } from '@/models/movie';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
import styles from './HeroSlider.module.scss';
import HeroImage from '@/components/HeroImage/HeroImage';
import { useRouter } from 'next/navigation';

interface HeroSliderProps {
  movies: Movie[];
  interval?: number;
  onButtonClick?: (movieId: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ movies, interval = 1000, onButtonClick }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [movies, interval]);

  const currentMovie = movies[activeIndex];

  const handleBulletClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleButtonClick = (movieId: string) => {
    if (onButtonClick) onButtonClick(movieId);
    router.push(`/movies/${currentMovie.title}`);
  };

  return (
    <>
      {currentMovie && (
        <div className={styles.container}>
          <HeroImage src={currentMovie.poster} alt={`${currentMovie.title} poster film`} />
          <div className={styles['container__content']}>
            <h1 className={styles['container__content__title']}>{currentMovie.title}</h1>
            <p className={styles['container__content__description']}>{currentMovie.description}</p>
            <div className={styles['container__content__custom-button']}>
              <Button size='big' onClick={() => handleButtonClick(currentMovie._id)} role='hero-slider--button'>
                Discover
              </Button>
            </div>
          </div>
          <div className={styles['container__bullets']}>
            {movies.map((movie, index) => (
              <button
                key={`hero-slider-bullet-${movie._id}-${index}`}
                className={`${styles['container__bullets__bullet']} ${
                  index === activeIndex ? styles['container__bullets__bullet--active'] : ''
                }`}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
