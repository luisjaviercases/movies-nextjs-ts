import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const mockLinks = [
  [
    { text: 'Link 1', url: '' },
    { text: 'Link 2', url: '' },
  ],
  [
    { text: 'Link 3', url: '' },
    { text: 'Link 4', url: '' },
  ],
];

describe('Component: Footer', () => {
  it('should render component with links', () => {
    render(<Footer links={mockLinks} />);

    const columnElement = screen.getByText('Link 1');
    expect(columnElement).toBeInTheDocument();
  });
});
