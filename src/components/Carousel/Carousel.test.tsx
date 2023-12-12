import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Carousel from './Carousel';
import { MovieProvider } from '@/context/MovieContext';

describe('Component: Carousel', () => {
  it('should render movies in carousel', () => {
    const movies = [
      {
        id: '1',
        title: 'Movie 1',
        description: '',
        genre: '',
        availableDate: '',
        thumbnail: '/image.jpeg',
        cast: '',
        poster: '',
        rating: 1,
        highlighted: false,
      },
      {
        id: '2',
        title: 'Movie 2',
        description: '',
        genre: '',
        availableDate: '',
        thumbnail: '/image.jpeg',
        cast: '',
        poster: '',
        rating: 1,
        highlighted: false,
      },
    ];

    const { container } = render(
      <MovieProvider>
        <Carousel movies={movies} />
      </MovieProvider>
    );

    const movieElements = container.querySelectorAll('[data-testid="carousel--link"]');
    expect(movieElements.length).toBe(2);
  });
});
