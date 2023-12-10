'use client';

import { FC, useState, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import styles from './SignOut.module.scss';

const SignOut: FC = () => {
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleButtonClick = () => {
    alert('Sign out request!');
  };

  return (
    <div className={styles.container}>
      <div className={styles['container__icon']} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
        <Image src={`./icons/icon-user.svg`} alt='Icon user' width='38' height='38' />
      </div>
      {isButtonVisible && (
        <div className={styles['container__custom-button']}>
          <Button onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave} onClick={handleButtonClick}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignOut;
