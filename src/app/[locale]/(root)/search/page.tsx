'use client';

import React, { useContext } from 'react';
import SearchHistory from '@/components/search/SearchHistory';
import { useSearchParams } from 'next/navigation';
import SearchResults from '@/components/search/SearchResults';
import SearchContext from '@/providers/search';
import CrossoverSearchResults from '@/components/search/CrossoverSearchResults';

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    const { type } = useContext(SearchContext);

    if (query !== null) {
        if (type === 'search') {
            return <SearchResults q={query.toString()} />;
        } else {
            return <CrossoverSearchResults q={query.toString()} />;
        }
    }

    return <SearchHistory />;
}
