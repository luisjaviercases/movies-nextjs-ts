import { MovieProvider } from '@/context/MovieContext';

export default function ProtectedAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MovieProvider>{children} </MovieProvider>
    </main>
  );
}
