'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieContextType {
  movieId: number | null;
  setMovieContext: (id: number) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movieId, setMovieId] = useState<number | null>(null);

  const setMovieContext = (id: number) => {
    setMovieId(id);
  };

  return <MovieContext.Provider value={{ movieId, setMovieContext }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
