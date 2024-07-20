'use client';

import React, { useContext } from 'react';
import SearchHistory from '@/components/search/SearchHistory';
import SearchResults from '@/components/search/SearchResults';
import SearchContext from '@/providers/search';
import CrossoverSearchResults from '@/components/search/CrossoverSearchResults';
import SearchButtons from '@/components/search/SearchButtons';
import { useTranslations } from 'next-intl';

export default function Search() {
    const { type, query, crossoverEntries } = useContext(SearchContext);

    const transl = useTranslations('pages.search');

    if (type === 'crossover') {
        if (crossoverEntries.length > 0) {
            return (
                <SearchButtons title={transl('results.crossover.title')}>
                    <CrossoverSearchResults />
                </SearchButtons>
            );
        }
    } else if (type === 'search') {
        let finalQuery = query.trim();
        if (finalQuery.length >= 4) {
            return (
                <SearchButtons title={transl('results.title')}>
                    <SearchResults query={finalQuery} />
                </SearchButtons>
            );
        }
    }

    // transl('history.title')
    return (
        <SearchButtons title='Enter query from 4 to 32 symbols'>
            <SearchHistory />
        </SearchButtons>
    );
}
