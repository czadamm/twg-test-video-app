import { createContext, useState } from 'react';
import { ContextProviderProps, SearchContextType } from '@/src/contexts/types';

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchContextProvider({ children }: ContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState('react native');
  const [sortingMethod, setSortingMethod] = useState('viewCount');

  function setSearchParameters(query: string, sortBy: string) {
    setSearchQuery(query);
    setSortingMethod(sortBy);
  }

  const value = {
    searchQuery,
    sortingMethod,
    setSearch: setSearchParameters,
    setSearchQuery,
    setSortingMethod,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
