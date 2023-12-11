import Image from 'next/image';
import { FC } from 'react';
import styles from './HeroImage.module.scss';

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <div className={styles['container']}>
      <Image className={styles['container__image']} priority fill src={src} alt={alt} data-testid='hero-image--img' />
    </div>
  );
};

export default HeroImage;
