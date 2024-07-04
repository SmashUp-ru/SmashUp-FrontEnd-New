'use client';

import React, { useContext } from 'react';
import SearchHistory from '@/components/search/SearchHistory';
import SearchResults from '@/components/search/SearchResults';
import SearchContext from '@/providers/search';
import CrossoverSearchResults from '@/components/search/CrossoverSearchResults';

export default function Search() {
    const { type, query, crossoverEntries } = useContext(SearchContext);

    if (type === 'crossover') {
        if (crossoverEntries.length > 0) {
            return <CrossoverSearchResults />;
        } else {
            return <SearchHistory />;
        }
    }

    let finalQuery = query.trim();
    if (finalQuery.length >= 4) {
        return <SearchResults query={finalQuery} />;
    }

    return <SearchHistory />;
}
