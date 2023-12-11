'use client';

import { Movie } from '@/models/movie';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button/Button';
import styles from './HeroSlider.module.scss';

interface HeroSliderProps {
  movies: Movie[];
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ movies, interval = 3000 }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles['container__images']}>
        <Image
          className={styles['container__images__image']}
          priority
          fill
          src={currentMovie.poster}
          alt={`${currentMovie.title} poster film`}
        />
      </div>
      <div className={styles['container__content']}>
        <h1 className={styles['container__content__title']}>{currentMovie.title}</h1>
        <p className={styles['container__content__description']}>{currentMovie.description}</p>
        <div className={styles['container__content__custom-button']}>
          <Button>Discover</Button>
        </div>
      </div>
      <div className={styles['container__bullets']}>
        {movies.map((_, index) => (
          <button
            key={`hero-slider-bullet-${index}`}
            className={`${styles['container__bullets__bullet']} ${
              index === activeIndex ? styles['container__bullets__bullet--active'] : ''
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
