import ReduxProvider from '@/store/reduxProvider';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'NextJS app',
  description: 'Make API requests with JWT',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
