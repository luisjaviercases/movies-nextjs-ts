import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('Component: HeroImage', () => {
  it('should renders image', () => {
    const imageUrl = '/image.jpg';
    const altText = 'Image altt';

    render(<HeroImage src={imageUrl} alt={altText} />);
    const imageElement = screen.getByTestId('hero-image--img');

    expect(imageElement).toBeInTheDocument();
  });
});
