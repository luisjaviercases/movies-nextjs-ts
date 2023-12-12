'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieContextType {
  movieId: string | null;
  setMovieIdContext: (id: string) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movieId, setMovieId] = useState<string | null>(null);

  const setMovieIdContext = (id: string | null) => {
    setMovieId(id);
  };

  return <MovieContext.Provider value={{ movieId, setMovieIdContext }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
