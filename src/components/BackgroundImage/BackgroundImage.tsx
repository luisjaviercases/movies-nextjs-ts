import React from 'react';
import styles from './BackgroundImage.module.scss';

interface BackgroundImageProps {
  imageName: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageName }) => {
  const imageUrl = `/images/${imageName}`;

  const style: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={styles.background} style={{ ...style }}></div>;
};

export default BackgroundImage;
