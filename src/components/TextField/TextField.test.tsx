import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('Component: TextField component', () => {
  it('should render correctlyt', () => {
    const { container } = render(<TextField placeholder='Username' />);
    const inputElement = container.querySelector('input');

    expect(inputElement).not.toBeNull();
    expect(inputElement?.placeholder).toBe('Username');
  });

  it('should show error', () => {
    render(<TextField errorMessage='Invalid username' />);
    const errorMessageElement = screen.getByTestId('text-field--error-message');
    expect(errorMessageElement).toBeInTheDocument();
  });
});
