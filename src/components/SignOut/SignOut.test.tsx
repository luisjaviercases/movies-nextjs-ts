import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SignOut from './SignOut';

const mockAuthSignOutQuery = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({ push: vi.fn() })),
}));

vi.mock('@/services/query/authApi', () => ({
  useLazyAuthSignOutQuery: () => [mockAuthSignOutQuery, { isLoading: false }],
}));

describe('Component: SignOut', () => {
  it('should render component', () => {
    render(<SignOut />);

    const containerElement = screen.getByTestId('signout');
    expect(containerElement).toBeInTheDocument();

    const iconButtonElement = screen.getByTestId('signout--icon-button');
    expect(iconButtonElement).toBeInTheDocument();
  });
});
