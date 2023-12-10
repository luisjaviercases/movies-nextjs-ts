'use client';

import { FC, useState, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './SignOut.module.scss';
import { useLazyAuthSignOutQuery } from '@/services/query/authApi';
import { removeCookie } from '@/app/actions';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const SignOut: FC = () => {
  const router = useRouter();
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [signOut, { isLoading }] = useLazyAuthSignOutQuery();

  const handleIconHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setButtonVisible(true);
  };

  const handleIconLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setButtonVisible(false);
    }, 500);
  };

  const handleButtonClick = async () => {
    try {
      await signOut();
      await removeCookie('userToken');
      router.push('/login');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      isButtonVisible ? handleIconLeave() : handleIconHover();
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.container}>
          <button
            className={styles['container__icon']}
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
            onKeyDown={handleKeyDown}>
            <Image src={`/icons/icon-user.svg`} alt='Icon user' width='38' height='38' />
          </button>
          {isButtonVisible && (
            <div className={styles['container__custom-button']}>
              <Button onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} onClick={handleButtonClick}>
                Sign out
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SignOut;
