import { FC } from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles['container__overlay']}></div>
      <div className={styles['container__spinner']}></div>
    </div>
  );
};

export default LoadingSpinner;
