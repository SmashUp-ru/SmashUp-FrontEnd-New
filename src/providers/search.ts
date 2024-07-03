import React, { createContext } from 'react';

const SearchContext = createContext<{
    type: 'search' | 'crossover';
    setType: React.Dispatch<React.SetStateAction<'search' | 'crossover'>>;

    crossoverEntries: string[];
    setCrossoverEntries: React.Dispatch<React.SetStateAction<string[]>>;
}>({
    type: 'search',
    setType: () => {},
    crossoverEntries: [],
    setCrossoverEntries: () => {}
});

export default SearchContext;
