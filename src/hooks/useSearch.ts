import { useContext } from 'react';
import { SearchContext } from '@/src/contexts/searchContext';

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('Search context must be wrapped with SearchContextProvider');
  }
  return context;
};
