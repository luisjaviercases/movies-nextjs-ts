'use client';

import { FC, useState } from 'react';
import { useAddMovieToUserListMutation, useRemoveMovieFromUserListMutation } from '@/services/query/userApi';
import styles from './FavoriteButton.module.scss';
import Image from 'next/image';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

interface FavoriteButtonProps {
  movieId: string | null;
  moviesList: string[];
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId, moviesList }) => {
  const id = movieId ?? '';
  const [isFavorited, setIsFavorited] = useState<boolean>(moviesList.includes(id));
  const [addMovieToList, { isLoading: isLoadingAddToList }] = useAddMovieToUserListMutation();
  const [removeMovieFromList, { isLoading: isLoadingRemoveFromList }] = useRemoveMovieFromUserListMutation();

  const checkIfIdIsInFavoritesList = (userList: string[]) => {
    const isMovieInList = userList.includes(id) ?? false;
    setIsFavorited(isMovieInList);
  };

  const handleButtonClick = async () => {
    try {
      const result = isFavorited ? await removeMovieFromList(id) : await addMovieToList({ id: id });
      if (result) {
        if ('data' in result) {
          checkIfIdIsInFavoritesList(result.data.myList);
        } else {
          console.error('Error:', result.error);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {isLoadingAddToList || isLoadingRemoveFromList ? (
        <LoadingSpinner />
      ) : (
        <button className={styles.button} onClick={handleButtonClick} data-testid='favorite-button'>
          {isFavorited ? (
            <>
              <Image src={`/icons/icon-remove.svg`} alt='Remove from my list button' width='38' height='36' />
              <span className={`${styles['button__text']} ${styles['button__text__fav']}`}>Remove from my list</span>
            </>
          ) : (
            <>
              <Image src={`/icons/icon-plus.svg`} alt='Add to list button' width='40' height='40' />
              <span className={styles['button__text']}>Add to my list</span>
            </>
          )}
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
