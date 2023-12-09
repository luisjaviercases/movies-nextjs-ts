import { FC } from 'react';
import FooterLink from './components/FooterLink/FooterLink';
import styles from './Footer.module.scss';

interface FooterProps {
  links: { text: string; url: string }[][];
}

const Footer: FC<FooterProps> = ({ links }) => {
  return (
    <footer className={styles.footer}>
      {links.map((column, columnIndex) => (
        <div key={columnIndex} className={styles['footer__column']}>
          {column.map((link, linkIndex) => (
            <FooterLink key={linkIndex} {...link} />
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
