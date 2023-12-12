import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSlider from './HeroSlider';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe('Component: HeroSlider', () => {
  it('should call onButtonClick', () => {
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

    const handleButtonClick = vi.fn();

    render(<HeroSlider movies={movies} onButtonClick={handleButtonClick} />);

    const discoverButton = screen.getByRole('hero-slider--button');
    fireEvent.click(discoverButton);
    expect(handleButtonClick).toHaveBeenCalledWith(movies[0].id);
  });
});
