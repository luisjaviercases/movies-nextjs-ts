import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Component: Button', () => {
  it('should call onClick', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const buttonElement = screen.getByText('Click');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
