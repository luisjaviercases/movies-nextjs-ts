'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MovieContextType {
  movieId: string | null;
  listOfMovieIds: string[];
  setMovieIdContext: (id: string) => void;
  setListOfMovieIdsContext: (listOfMovieIds: string[]) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const [listOfMovieIds, setListOfMovieIds] = useState<string[]>([]);

  const setMovieIdContext = (id: string | null) => {
    setMovieId(id);
  };

  const setListOfMovieIdsContext = (listOfMovieIds: string[]) => {
    setListOfMovieIds(listOfMovieIds);
  };

  return (
    <MovieContext.Provider value={{ movieId, listOfMovieIds, setMovieIdContext, setListOfMovieIdsContext }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
