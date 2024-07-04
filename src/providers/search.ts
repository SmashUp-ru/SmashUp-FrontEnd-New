import { Track, TrackAuthor } from '@/utils/types';
import React, { createContext } from 'react';

export interface CrossoverEntry {
    entity: Track | TrackAuthor;
    type: 'track' | 'track_author';
    displayName: string;
}

const SearchContext = createContext<{
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;

    type: 'search' | 'crossover';
    setType: React.Dispatch<React.SetStateAction<'search' | 'crossover'>>;

    crossoverEntries: CrossoverEntry[];
    setCrossoverEntries: React.Dispatch<React.SetStateAction<CrossoverEntry[]>>;
}>({
    query: '',
    setQuery: () => {},
    type: 'search',
    setType: () => {},
    crossoverEntries: [],
    setCrossoverEntries: () => {}
});

export default SearchContext;
