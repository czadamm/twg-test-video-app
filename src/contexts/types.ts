import { ReactNode } from 'react';

export type SearchContextType = {
  searchQuery: string;
  sortingMethod: string;
  setSearch: (query: string, sortBy: string) => void;
  setSearchQuery: (query: string) => void;
  setSortingMethod: (sortBy: string) => void;
};

export type ContextProviderProps = {
  children: ReactNode;
};
