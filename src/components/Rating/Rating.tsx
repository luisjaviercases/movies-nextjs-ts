import { FC } from 'react';
import styles from './Rating.module.scss';
import Image from 'next/image';

interface RatingProps {
  value: number;
}

const Rating: FC<RatingProps> = ({ value }) => {
  return (
    <div className={styles.container} data-testid='rating'>
      {[...Array(value)].map((_, index) => (
        <Image
          data-testid={`rating--${index + 1}`}
          key={`rating-${index + 1}`}
          src={`/icons/icon-star.svg`}
          alt={`Rating ${index + 1}`}
          width='20'
          height='20'
        />
      ))}
    </div>
  );
};

export default Rating;
