import { memo } from 'react';
import styles from './Sample.module.scss';

const Sample: React.FC = () => {
  return <span className={styles.sample}>Sample component</span>;
};

export default memo(Sample);
