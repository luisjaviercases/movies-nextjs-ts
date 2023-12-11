'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieContextType {
  movieId: string | null;
  setMovieContext: (id: string) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movieId, setMovieId] = useState<string | null>(null);

  const setMovieContext = (id: string) => {
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
