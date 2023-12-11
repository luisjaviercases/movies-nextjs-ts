import { FC, ReactNode } from 'react';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
