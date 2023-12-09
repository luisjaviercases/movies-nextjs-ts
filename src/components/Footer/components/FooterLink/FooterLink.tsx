import { FC } from 'react';
import Link from 'next/link';
import styles from './FooterLink.module.scss';

interface FooterLinkProps {
  text: string;
  url: string;
}

const FooterLink: FC<FooterLinkProps> = ({ text, url }) => (
  <Link className={styles.link} href={url}>
    {text}
  </Link>
);

export default FooterLink;
