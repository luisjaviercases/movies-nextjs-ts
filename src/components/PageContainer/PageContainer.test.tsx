import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageContainer from './PageContainer';

describe('Component: PageContainer', () => {
  it('should render children', () => {
    const children = 'children';
    const { container } = render(<PageContainer>{children}</PageContainer>);

    const containerElement = screen.getByTestId('page-container');
    expect(containerElement).toBeInTheDocument();

    expect(container).toHaveTextContent(children);
  });
});
