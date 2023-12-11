import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BackgroundImage from './BackgroundImage';

describe('Component: BackgroundImage', () => {
  it('should render component', () => {
    render(<BackgroundImage imageName='example.jpg' />);

    const backgroundImageElement = screen.getByTestId('background-image');

    expect(backgroundImageElement).toHaveStyle({ backgroundImage: 'url(/images/example.jpg)' });
  });
});
