import Footer from '@/components/Footer/Footer';
import { MovieProvider } from '@/context/MovieContext';
import { footerLinks } from '@/constants/footerLinks';
import styles from './layout.module.scss';
import SignOut from '@/components/SignOut/SignOut';

export default function ProtectedAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MovieProvider>
        <div className={styles.container}>
          <SignOut />
          {children}
          <Footer links={footerLinks} />
        </div>
      </MovieProvider>
    </main>
  );
}
