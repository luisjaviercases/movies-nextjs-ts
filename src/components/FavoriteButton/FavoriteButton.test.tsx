import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

const mockAddMovieToUserListMutation = vi.fn();
const mockRemoveMovieFromUserListMutation = vi.fn();

vi.mock('@/services/query/userApi', () => ({
  useAddMovieToUserListMutation: () => [mockAddMovieToUserListMutation, { isLoading: false }],
  useRemoveMovieFromUserListMutation: () => [mockRemoveMovieFromUserListMutation, { isLoading: false }],
}));

describe('Component: FavoriteButton', () => {
  it('should render in not favorited state', () => {
    render(<FavoriteButton movieId='1' moviesList={[]} />);
    const buttonElement = screen.getByTestId('favorite-button');

    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  });

  it('should render in favorited state', () => {
    render(<FavoriteButton movieId='1' moviesList={['1']} />);
    const buttonElement = screen.getByTestId('favorite-button');

    expect(buttonElement).toBeInTheDocument();
    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();
  });

  it('should call add to list when clicked', async () => {
    render(<FavoriteButton movieId='1' moviesList={[]} />);
    const buttonElement = screen.getByTestId('favorite-button');
    fireEvent.click(buttonElement);

    await waitFor(() => expect(mockAddMovieToUserListMutation).toHaveBeenCalledWith({ id: '1' }));
  });

  it('should call remove from list when clicked', async () => {
    render(<FavoriteButton movieId='1' moviesList={['1']} />);
    const buttonElement = screen.getByTestId('favorite-button');
    fireEvent.click(buttonElement);

    await waitFor(() => expect(mockRemoveMovieFromUserListMutation).toHaveBeenCalledWith('1'));
  });
});
