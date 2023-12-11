import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('Component: LoginForm', () => {
  it('should render component', () => {
    const mockOnSignIn = vi.fn();
    render(<LoginForm onSignIn={mockOnSignIn} />);

    const formElement = screen.getByTestId('login-form');
    expect(formElement).toBeInTheDocument();

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signInButton = screen.getByTestId('login-form--button');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });
});
