'use client';

import React from 'react';
import SearchHistory from '@/components/search/SearchHistory';
import { useSearchParams } from 'next/navigation';
import SearchResults from '@/components/search/SearchResults';

export default function Search() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    if (query !== null) {
        // @ts-ignore
        return <SearchResults q={searchParams.get('q').toString()} />;
    }

    return <SearchHistory />;
}
