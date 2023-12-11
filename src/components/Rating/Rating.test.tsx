import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Rating from './Rating';

describe('Component: Rating', () => {
  it('should render the correct number of stars', () => {
    const value = 3;

    render(<Rating value={value} />);

    const containerElement = screen.getByTestId('rating');

    expect(containerElement).toBeInTheDocument();

    [...Array(value)].map((_, index) => {
      const starElement = screen.getByTestId(`rating--${index + 1}`);
      expect(starElement).toBeInTheDocument();
    });
  });
});
